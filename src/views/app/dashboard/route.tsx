import type { MetaFunction } from "@remix-run/node";
import {PersonIcon} from "@radix-ui/react-icons";
import PointsDailyChart from "~/views/app/dashboard/Chart";
import {RiBikeLine, RiTaxiWifiLine} from "react-icons/ri";
import {PiCarProfileFill} from "react-icons/pi";
import RideSchedule from "~/views/app/dashboard/RideSchedule";
import AppLayout from "~/views/app/AppLayout";
import {Link, useLoaderData} from "@remix-run/react";
import {json} from "@remix-run/node";
import {FiBell} from "react-icons/fi";
import landingStyles from '../../landing/styles/landing.module.css'

export const meta: MetaFunction = () => {
  return [
    { title: "ecommute berlin - dashboard" },
  ];
};

export const loader = async () => {
    return json({
        user: await fetch('https://randomuser.me/api/').then(res => res.json()).then(data => data.results[0])
    })
}

export default function Index() {
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
                  Your impact
              </h1>
              <div className="mt-5 text-center">
                  <div className={[
                      'font-bold w-1/2 text-center',
                      landingStyles.textWithBg
                  ].join(' ')}>
                      <span className="block font-bold text-2xl">7312</span>
                      <span className="mt-2 block">total points</span>
                  </div>
              </div>
              <div className="mt-10 flex justify-center">
                  <PointsDailyChart/>
              </div>
              <div className="mt-5">
                  <div className="grid grid-cols-3 gap-5">
                      <Link to="/app/car/ride"
                          className="border border-[#58c55f] rounded-lg p-2 shadow-[#58c55f]/40 shadow-2xl bg-transparent text-[#0F1828]">
                          <div className="">
                              <div className="flex justify-center text-[#58c55f]">
                                  <RiTaxiWifiLine className="w-10 h-10"/>
                              </div>
                              <span className="mt-1 block text-center">Ride</span>
                          </div>
                      </Link>
                      <Link to="/app/bike/rental"
                            className="border border-[#58c55f] rounded-lg p-2 shadow-[#58c55f]/40 shadow-xl bg-transparent text-[#0F1828]">
                          <div className="">
                              <div className="flex justify-center text-[#58c55f]">
                                  <RiBikeLine className="w-10 h-10"/>
                              </div>
                              <span className="mt-1 block text-center font-bold">Rent a bike</span>
                          </div>
                      </Link>
                      <div
                          className="border border-[#58c55f] rounded-lg p-2 shadow-[#58c55f]/40 shadow-2xl bg-transparent text-[#0F1828]">
                          <div className="">
                              <div className="flex justify-center text-[#58c55f]">
                                  <PiCarProfileFill className="w-10 h-10"/>
                              </div>
                              <span className="mt-1 block text-center">Offer a ride</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="mt-10">
                  <h1 className="text-3xl font-black font-[Berlin] text-center">
                      Your schedule
                  </h1>
                  <div className="mt-3">
                      <RideSchedule/>
                  </div>
              </div>

          </div>
          <div className=""></div>
      </AppLayout>
  );
}
