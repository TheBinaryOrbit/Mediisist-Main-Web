"use client"

import { useEffect, useState } from 'react';
import { MapPin, Check, AlertCircle } from 'lucide-react';
import { axiosClient } from '@/lib/axiosClient';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

type LocationStatus = 'idle' | 'loading' | 'success' | 'error';

interface LocationCoords {
    latitude: number | string | any;
    longitude: number | string | any;
    accuracy: number | string | any;
}

interface LocationResponse {
    success: boolean;
    message?: string;
}

export default function GetLocation() {
    const [status, setStatus] = useState<LocationStatus>('idle');
    const [location, setLocation] = useState<LocationCoords | null>(null);
    const [error, setError] = useState<string>('');
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const navoagtion = useRouter()


    const handleGrantAccess = async (): Promise<void> => {
        setStatus('loading');
        setError('');

        if (!navigator.geolocation) {
            setError('Geolocation is not supported by this browser');
            setStatus('error');
            return;
        }

        try {
            const position = await new Promise<GeolocationPosition>((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject, {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                });
            });

            const coords: LocationCoords = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy
            };

            setLocation(coords);

            const obj = {
                lat: coords?.latitude,
                lng: coords?.longitude
            }

            try {
                const response = await axiosClient.patch(`/ride/updatelocation/${params.id}`, obj)

                if (response.status == 200 || response.status == 201) {
                    toast.success("Location Updated Sucessfully");
                    setStatus('success');
                } else {
                    toast.error("Unable to Update Location")
                }
            } catch (error: any) {
                console.log(error);
                toast.error(error.response.data.error)
                setError('Failed to send location to server');
                setStatus('error');
            }

        } catch (geoError) {
            let errorMessage = 'Failed to get location';

            if (geoError instanceof GeolocationPositionError) {
                switch (geoError.code) {
                    case GeolocationPositionError.PERMISSION_DENIED:
                        errorMessage = 'Location access denied by user';
                        break;
                    case GeolocationPositionError.POSITION_UNAVAILABLE:
                        errorMessage = 'Location information unavailable';
                        break;
                    case GeolocationPositionError.TIMEOUT:
                        errorMessage = 'Location request timed out';
                        break;
                }
            } else if (geoError instanceof Error) {
                errorMessage = geoError.message;
            }

            setError(errorMessage);
            setStatus('error');
        }
    };

    const resetForm = (): void => {
        setStatus('idle');
        setLocation(null);
        setError('');
    };


    useEffect(() => {
        const fetchRideDetails = async () => {
            setLoading(true);
            try {

                const res = await axiosClient.get(`/ride/getride/${params.id}`);

                if (res.status === 200 || res.status === 201) {

                    if (res.data.ride.lat == null || res.data.ride.lng == null) {
                        return setLoading(false);
                    }
                    const loc = {
                        latitude: res.data.ride.lat,
                        longitude: res.data.ride.lng,
                        accuracy: ''
                    }
                    setLocation(loc)
                    setStatus('success');
                } else {
                    toast.error("Failed to fetch ride details");
                    setStatus('error');
                }
            } catch (error: any) {
                console.log(error);
                toast.error(error?.response?.data?.error || "An error occurred while fetching ride details");
                setError('Failed to fetch ride details');
                setStatus('error');
            }
            finally {
                setLoading(false);
            }
        };

        console.log(params.id?.length)
        if (params.id?.length == 32) {
            fetchRideDetails();
        } else {
            navoagtion.push('/')
        }
    }, []);



    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            {
                loading ?
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
                    :
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                        <div className="text-center mb-6">
                            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <MapPin className="w-8 h-8 text-blue-600" />
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                Location Request
                            </h1>
                            <p className="text-gray-600 leading-relaxed">
                                We received your request! Grant us access to your location so we can provide you with personalized services and better assistance.
                            </p>
                        </div>

                        {status === 'idle' && (
                            <button
                                onClick={handleGrantAccess}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
                                type="button"
                            >
                                <MapPin className="w-5 h-5" />
                                Grant Access
                            </button>
                        )}

                        {status === 'loading' && (
                            <div className="text-center">
                                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
                                <p className="text-gray-600">Getting your location...</p>
                            </div>
                        )}

                        {status === 'success' && (
                            <div className="text-center">
                                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <Check className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Location Received!
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Thank you for sharing your location. We can now provide you with better service.
                                </p>
                                {location && (
                                    <div className="bg-gray-50 rounded-lg p-4 text-sm mb-4">
                                        <p className="text-gray-700">
                                            <strong>Latitude:</strong> {(+location.latitude).toFixed(6)}
                                        </p>
                                        <p className="text-gray-700">
                                            <strong>Longitude:</strong> {(+location.longitude).toFixed(6)}
                                        </p>
                                        <p className="text-gray-700">
                                            <strong>Accuracy:</strong> {location?.accuracy ? location.accuracy : "N/A"}
                                        </p>
                                    </div>
                                )}
                                {/* <button
                            onClick={resetForm}
                            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
                            type="button"
                        >
                            Request Again
                        </button> */}
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="text-center">
                                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                    <AlertCircle className="w-8 h-8 text-red-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Something went wrong
                                </h3>
                                <p className="text-red-600 mb-4">{error}</p>
                                <button
                                    onClick={handleGrantAccess}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
                                    type="button"
                                >
                                    Try Again
                                </button>
                            </div>
                        )}

                        <div className="mt-6 text-center">
                            <p className="text-xs text-gray-500">
                                Your location data is secure and will only be used to improve your experience.
                            </p>
                        </div>
                    </div>
            }
        </div>
    );
}