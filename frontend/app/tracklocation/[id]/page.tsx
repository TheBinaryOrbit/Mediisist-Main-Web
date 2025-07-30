'use client';

import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Wifi, WifiOff } from 'lucide-react';
import { axiosClient } from '@/lib/axiosClient';
import { toast } from 'react-toastify';
import { Check } from 'lucide-react';
import { useParams } from 'next/navigation';

interface AmbulanceData {
    ambulanceId: string;
    position: [number, number];
    lastUpdated: Date;
    isOnline: boolean;
}



let socket: Socket;

const TrackLocationPage = () => {
    const [ambulanceData, setAmbulanceData] = useState<AmbulanceData | null>(null)
    const [isRecentering, setIsRecentering] = useState<boolean>(false);
    const [mapCenter, setMapcenter] = useState<[number, number]>(ambulanceData ? ambulanceData.position : [28.6139, 77.2090]);
    const [mapInstance, setMapInstance] = useState<any>(null);
    const [isRideCompleted, setIsRideCompleted] = useState<boolean>(false);
    const params = useParams()

    useEffect(() => {
        console.log("Mapinstance" + mapInstance);
    }, [mapInstance]);

    const baseUrl = 'https://api.mediisist.in';

    const fetchRideDetails = async () => {
        try {
            const res = await axiosClient.get(`/ride/getride/${params.id}`);
            if (res.status === 200 || res.status === 201) {
                console.log("Ride details fetched successfully:", res.data);
                if (res.data.ride.isRideCompleted == true) {
                    return true
                }
            } else {
                return false;
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error?.response?.data?.error || "An error occurred while fetching ride details");
            return false;
        }
    };

    useEffect(() => {
        const socketConnection = async () => {
            const checkRide = await fetchRideDetails();


            if (checkRide) {
                console.log("Ride completed, showing success message"); 
                setIsRideCompleted(true);
            }

            socket = io(baseUrl);

            socket.on('connect', () => {
                console.log('Connected to socket:', socket.id);


                socket.emit('join', { sessionKey: params.id });
            });

            socket.on('disconnect', () => {
                console.log('Disconnected from socket');

            });

            socket.on('connect_error', (error) => {
                console.error('Connection error:', error);

            });

            socket.on('locationUpdate', ({ latitude, longitude }) => {
                console.log('Received ambulance location:', { latitude, longitude });

                if (latitude == null || longitude == null) {
                    console.warn('Invalid coordinates received:', { latitude, longitude });
                    return;
                }

                setAmbulanceData({
                    ambulanceId: String(params.id),
                    position: [latitude, longitude],
                    lastUpdated: new Date(),
                    isOnline: true,
                });

                setMapcenter([latitude, longitude]);
            });
        }

        socketConnection();

        // Check for ambulance activity (mark offline if no update for 2 minutes)
        const activityChecker = setInterval(() => {
            setAmbulanceData(prev => {
                if (!prev) return null;

                const now = new Date().getTime();
                const timeDiff = now - prev.lastUpdated.getTime();

                // If no update for 2 minutes, mark as offline
                if (timeDiff > 120000) {
                    return {
                        ...prev,
                        isOnline: false
                    };
                }

                return prev;
            });
        }, 30000); // Check every 30 seconds

        return () => {
            clearInterval(activityChecker);
            if (socket) {
                socket.emit('leaveAmbulanceTracking', { ambulanceId: params.id });
                socket.disconnect();
            }
        };
    }, [params.id, baseUrl]);




    // Custom ambulance marker icon
    const getAmbulanceIcon = (isOnline: boolean) => {
        const color = isOnline ? '#10B981' : '#6B7280'; // green for online, gray for offline

        return L.divIcon({
            className: 'custom-ambulance-marker',
            html: `
        <div style="text-align: center;">
          <div style="
            background: ${color}; 
            width: 40px; 
            height: 40px; 
            border-radius: 50%; 
            display: flex; 
            align-items: center; 
            justify-content: center;
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          ">
            <span style="color: white; font-weight: bold; font-size: 22px;">🚑</span>
          </div>
        </div>
      `,
            iconSize: [50, 70],
            iconAnchor: [25, 35],
        });
    };


    const centerOnAmbulance = () => {
        console.log(mapInstance);
        if (ambulanceData) {
            console.log('Centering on ambulance:', ambulanceData.position);
            mapInstance.flyTo(ambulanceData.position, 15); // or use mapInstance.setView()

            setTimeout(() => {
                setIsRecentering(false);
            }, 800);
        }
    };


    const getStatusColor = (isOnline: boolean) => {
        return isOnline ? 'text-green-600 bg-green-100' : 'text-gray-600 bg-gray-100';
    };

    const getStatusText = (isOnline: boolean) => {
        return isOnline ? 'ONLINE' : 'OFFLINE';
    };

    if( isRideCompleted) {
        return (
        
            <div className="absolute inset-0 bg-gray-100 bg-opacity-70 z-10 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <Check className="h-12 w-12 text-green-600 mb-4 mx-auto" />
                            <h2 className="text-xl font-semibold text-gray-800">Ride Completed</h2>
                            <p className="mt-2 text-gray-600">Thank you for using our service!</p>
                        </div>
                    </div>
        );
    }



    return (
        <div className="h-screen w-full flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-md p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="bg-red-100 p-2 rounded-full">
                            <MapPin className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">Ambulance Tracker</h1>
                            {/* <p className="text-sm text-gray-600">ID: {params.id}</p> */}
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            {ambulanceData ? (
                                <Wifi className="h-5 w-5 text-green-600" />
                            ) : (
                                <WifiOff className="h-5 w-5 text-red-600" />
                            )}
                            <span className={`text-sm font-medium ${ambulanceData ? 'text-green-600' : 'text-red-600'}`}>
                                {ambulanceData ? 'Online' : 'Offline'}
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Recenter Button */}
            {ambulanceData && (
                // <button
                //     onClick={centerOnAmbulance}
                //     disabled={isRecentering}
                //     className={`z-50 bg-blue-500 hover:bg-blue-600 border border-gray-300 flex items-center justify-center cursor-pointer shadow-lg p-3 transition-all duration-200 ${isRecentering ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-xl'
                //         }`}
                // >
                //     <div className="flex items-center space-x-2">
                //         <Crosshair
                //             className={`h-5 w-5 text-white ${isRecentering ? 'animate-spin' : ''}`}
                //         />
                //         <span className="text-sm text-white font-medium ">
                //             {isRecentering ? 'Centering...' : 'Recenter'}
                //         </span>
                //     </div>
                // </button>
                ""
            )}

            {/* Map Container */}
            <div className="flex-1 relative">
                {!ambulanceData ? (
                    <div className="absolute inset-0 bg-gray-100 bg-opacity-70 z-10 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mb-4 mx-auto"></div>
                            <h2 className="text-xl font-semibold text-gray-800">Tracking Ambulance</h2>
                            <p className="mt-2 text-gray-600">Waiting for location updates...</p>
                        </div>
                    </div>
                )
                    :
                    (
                        <MapContainer
                            center={mapCenter}
                            zoom={ambulanceData ? 30 : 30}
                            scrollWheelZoom={true}
                            style={{ height: '100%', width: '100%' }}
                            
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            {ambulanceData && (
                                <Marker
                                    position={ambulanceData.position}
                                    icon={getAmbulanceIcon(ambulanceData.isOnline)}
                                >
                                    <Popup>
                                        <div className="p-2">
                                            <h3 className="font-bold text-lg">🚑 Ambulance {ambulanceData.ambulanceId}</h3>
                                            <div className="mt-2 space-y-1">
                                                <p><strong>Status:</strong>
                                                    <span className={`ml-1 px-2 py-0.5 rounded text-xs ${getStatusColor(ambulanceData.isOnline)}`}>
                                                        {getStatusText(ambulanceData.isOnline)}
                                                    </span>
                                                </p>
                                                <p><strong>Latitude:</strong> {ambulanceData.position[0].toFixed(6)}</p>
                                                <p><strong>Longitude:</strong> {ambulanceData.position[1].toFixed(6)}</p>
                                                <p><strong>Last Updated:</strong> {ambulanceData.lastUpdated.toLocaleTimeString()}</p>
                                            </div>
                                        </div>
                                    </Popup>
                                </Marker>
                            )}
                        </MapContainer>
                    )
                }
            </div>
        </div >
    );
};

export default TrackLocationPage;