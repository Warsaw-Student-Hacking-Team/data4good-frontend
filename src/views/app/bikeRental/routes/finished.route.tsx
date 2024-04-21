import BikeRentalMap from "~/views/app/bikeRental/BikeRentalMap";
import {json} from "@remix-run/node";
import {Link, useLoaderData} from "@remix-run/react";
import {FiArrowLeft, FiX} from "react-icons/fi";
import BikeFinishedMap from "~/views/app/bikeRental/BikeFinishedMap";
import landingStyles from "~/views/landing/styles/landing.module.css";
import {TbBike} from "react-icons/tb";

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
                <div className="border-b">
                    <BikeFinishedMap
                        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}/>
                </div>
                <div className="mt-5 px-5">
                    <div className="grid grid-cols-4">
                        <div className="flex items-center justify-center gap-10">
                            <TbBike className="w-10 h-10 text-green-500" />
                        </div>
                        <div className="flex items-center col-span-3 text-slate-600">
                            <span>Thank you for choosing to commute by bike</span>
                        </div>
                    </div>
                    <div className="mt-5 text-center">
                        <span className="text-center">Impact points you've earned</span>
                        <div className={[
                            'mt-10 font-bold w-1/2 text-center',
                            landingStyles.textWithBg
                        ].join(' ')}>
                            <span className="block font-bold text-2xl">12</span>
                        </div>
                    </div>
                    <div className="mt-10">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Time
                                </th>
                                <td className="px-6 py-4">
                                    0:45
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Distance
                                </th>
                                <td className="px-6 py-4">
                                    10 km
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-5">
                        <Link to="/app" className="block w-full font-bold bg-green-500 text-white text-center px-5 py-2 rounded-lg">
                            Got it!
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BikeRentalPage