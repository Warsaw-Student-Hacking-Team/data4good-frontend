import BikeRentalMap from "~/views/app/bikeRental/BikeRentalMap";
import {json} from "@remix-run/node";
import {Link, useLoaderData} from "@remix-run/react";
import {FiArrowLeft, FiX} from "react-icons/fi";

export async function loader() {
    return json({
        ENV: {
            MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
        },
    });
}

export const meta = () => ([
    {
        title: 'Bike Rental',
    }
])

const BikeRentalPage = () => {
    const {ENV: {MAPBOX_ACCESS_TOKEN}, stationsGeoJSON} = useLoaderData();
    return(
        <div className="">
            <div className="top-5 left-5 fixed z-10">
                <div className="bg-white px-4 py-2 rounded-xl inline-flex">
                    <FiArrowLeft className="w-6 h-6"/>
                    <span className="ml-2">Back</span>
                </div>
            </div>
            <div className="">
                <BikeRentalMap
                    mapboxAccessToken={MAPBOX_ACCESS_TOKEN}/>
            </div>
            <div className="fixed left-0 w-full bottom-0 z-30">
                <div className="bg-white rounded-t-lg px-5 pt-5 pb-8 w-full relative">
               <div className="absolute top-5 right-5">
                   <FiX className="w-6 h-6"/>
               </div>
                    <span className="text-lg font-bold">Berlin Mitte #2</span>
                    <span className="mt-2 block">29 bikes available</span>

                    <div className="mt-2">
                        <Link to="/app/bike/riding" className="block w-full font-bold bg-green-500 text-white text-center px-5 py-2 rounded-lg">
                            Rent a bike
                        </Link>
                        <span className="block text-center mt-2 text-gray-700">
                            Thank you for using green mobility!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BikeRentalPage