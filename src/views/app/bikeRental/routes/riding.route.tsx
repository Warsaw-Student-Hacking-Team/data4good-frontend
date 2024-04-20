import BikeAnimation from "~/views/app/bikeRental/BikeAnimation.client";
import {ClientOnly} from "remix-utils/client-only";
import {useEffect, useState} from "react";

const BikeRidingPage = () => {
    const [rawSeconds, setRawSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setRawSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const minutes = Math.floor(rawSeconds / 60);
    const seconds = (rawSeconds % 60).toString().padStart(2, '0');
    const distance = (rawSeconds * 0.0003).toFixed(2)
    const points = Math.floor(distance * 75);

    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#0f1828]">
            <div className="">
                <div className="bg-white rounded-full max-w-96 max-h-96 min-h-48 min-w-48 p-10">
                    <ClientOnly fallback={null}>
                        {() => <BikeAnimation className="h-40"/>}
                    </ClientOnly>
                </div>

                <div className="bg-white rounded-xl mt-10 py-2 px-5">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <span className="block">Time</span>
                            <span className="block text-lg font-bold">{minutes}:{seconds}</span>
                        </div>
                        <div className="text-right">
                            <span className="block">Distance</span>
                            <span className="block text-lg font-bold">{distance} km</span>
                        </div>
                    </div>
                    <span className="mt-2 text-center block">
                       Your impact
                   </span>
                    <span className="block text-2xl text-center font-bold">
                        {points}
                    </span>

                </div>

                <div className="mt-5">
                    <button className="bg-white text-red-500 text-center font-bold block w-full px-5 py-2 rounded-lg">
                        End ride
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BikeRidingPage;