import type { MetaFunction } from "@remix-run/node";
import AppLayout from "~/views/app/AppLayout";
import {Link, useLoaderData} from "@remix-run/react";
import {json} from "@remix-run/node";
import {FiBell} from "react-icons/fi";
import publicTransportBenefitImg from '~/assets/benefits/public-transport-benefit.jpg'
import theaterBenefitImg from '~/assets/benefits/theather-benefit.jpg'
import paybackBenefitImg from '~/assets/benefits/payback-benefit.jpg'

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
const benefits = [
    {
        name: 'Free public transport for 1 month',
        img: publicTransportBenefitImg
    },
    {
        name: 'Payback benefits',
        img: paybackBenefitImg
    },
    {
        name: 'Theater tickets',
        img: theaterBenefitImg
    },
]

export default function BenefitsRoute() {
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
                    Benefits
                </h1>
                <div className=" ">
                    <div className="grid gap-10">
                        <div className="">
                            <div className="mt-5">
                                <ul className="grid gap-5">
                                    {benefits.map(benefit => (
                                        <li className="bg-white rounded-lg p-5">
                                            <img src={benefit.img} className="w-full h-40 object-cover" alt=""/>
                                            <span className="block mt-2 font-bold">{benefit.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=""></div>
        </AppLayout>
    );
}
