import type { MetaFunction } from "@remix-run/node";
import {PersonIcon} from "@radix-ui/react-icons";
import PointsDailyChart from "~/views/app/dashboard/Chart";
import {RiBikeLine, RiTaxiWifiLine} from "react-icons/ri";
import {PiCarProfileFill} from "react-icons/pi";
import RideSchedule from "~/views/app/dashboard/RideSchedule";
import AppLayout from "~/views/app/AppLayout";
import {Link, useLoaderData} from "@remix-run/react";
import styles from './styles/dashboard.module.css'
import {json} from "@remix-run/node";
import {FiBell} from "react-icons/fi";
import landingStyles from '../../landing/styles/landing.module.css'

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export const loader = async () => {
    return json({
        user: await fetch('https://randomuser.me/api/').then(res => res.json()).then(data => data.results[0])
    })
}

export default function CarRideRoute() {
    const {user} = useLoaderData();

    return (
        <AppLayout>
            <div className="pt-5 px-5 w-full">
                <div className="bg-[#0F1828] text-white py-2 px-2 rounded-xl shadow-xl">
                    <div className="flex justify-center mt-1 mb-2">
                      <span>
                           <span className="font-black text-2xl font-[Berlin]">
                           <span className="text-green-500">eco</span>
                               mmute <span className="italic">berlin</span>
                            </span>
                       </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="rounded-full p-1 bg-white/20">
                                <FiBell className="w-7 h-7"/>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="mr-4">
                                <span className="font-bold">{user.name.first} {user.name.last}</span>
                                <span className="block text-right text-slate-200">
                                  Berlin
                              </span>
                            </div>
                            <img src={user.picture.medium}
                                 className="w-14 h-14 object-cover rounded-full border border-2"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-7 px-5">
                <h1 className="text-3xl font-black font-[Berlin] text-center">
                    Your trip with Angela <br/> is scheduled for
                </h1>
                <div className="mt-10 flex items-center justify-center">
                    <div className="text-white bg-[#0F1828] rounded-lg px-10 py-5">
                        <div className="block text-xl text-center">MON 21.05</div>
                        <div className="mt-2 block text-2xl font-bold text-center">10:20</div>
                    </div>
                </div>
                <div className="mt-10">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                From
                            </th>
                            <td className="px-6 py-4">
                                Brandenburger Tor
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                To
                            </th>
                            <td className="px-6 py-4">
                                Potsdamer Platz
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-5">
                    <div className="grid grid-cols-2 gap-10">
                        <Link to="/app" className="border border-red-500 text-red-500 bg-red-500/10 rounded-xl px-5 py-2 text-center font-bold">
                            Cancel
                        </Link>
                        <Link to="/app" className="border border-blue-500 text-blue-500 bg-blue-500/10 rounded-xl px-5 py-2 text-center font-bold">
                            Start a chat
                        </Link>
                    </div>
                </div>

            </div>
            <div className=""></div>
        </AppLayout>
    );
}
