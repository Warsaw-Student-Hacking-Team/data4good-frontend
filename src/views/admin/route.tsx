import {FiArrowRight} from "react-icons/fi";
import {FaCarSide} from "react-icons/fa";
import {MdAir} from "react-icons/md";
import {MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "ecommute berlin - admin panel" },
    ];
};

export default function Index() {
    return (
        <div>
            <div className="pt-5 px-5 w-full">
                {/*<div className="flex justify-between items-center py-6 w-full">*/}
                {/*    <h1 className="text-3xl font-bold font-[Berlin] transform translate-y-1">*/}
                {/*        Hello Helga!*/}
                {/*    </h1>*/}
                {/*    <div className="rounded-full p-2 border border-2">*/}
                {/*        <PersonIcon className="w-6 h-6"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="bg-[#0F1828] text-white py-2 px-2 rounded-xl shadow-xl">
                    <div className="flex justify-center mt-1 mb-2">
                      <span>
                           <span className="font-black text-2xl font-[Berlin]">
                           <span className="text-green-500">eco</span>
                               mmute <span className="italic">berlin</span>

                            </span>
                          <span className="block text-center italic text-2xl font-[Berlin]">admin</span>
                       </span>
                    </div>
                </div>
            </div>
            <div className="mt-7 px-5">
                <div className="grid grid-cols-2 gap-10">
                    <div className="border bg-white shadow-xl rounded-lg px-5 py-5">
                        <div className="mb-5">
                            <FaCarSide className="w-10 h-10 text-green-500 block"/>
                        </div>
                        <span className="text-2xl mb-1">
                            Rides not taken in the last 24h
                        </span>
                        <span className="block text-small text-slate-700 mb-2">due to the ecommute berlin app usage</span>
                        <span className="mt-2 text-3xl font-black font-[Berlin] block">
                            1823
                        </span>
                    </div>
                    <div className="border bg-white shadow-xl rounded-lg px-5 py-5">
                        <div className="mb-5">
                            <MdAir className="w-10 h-10 text-green-500 block"/>
                        </div>
                        <span className="text-2xl mb-2">
                            PM 10 reduction est.
                        </span>
                        <span className="block text-small text-slate-700 mb-2 opacity-0">due to the ecommute berlin app usage</span>
                        <span className="mt-2 text-3xl font-black font-[Berlin] block">
                            <span className="flex items-center">
                          <span className="text-red-500">9.4783</span>
                            <FiArrowRight className="w-7 h-7 mx-3 transform -translate-y-0.5"/>
                             <span className="">9.1328</span>
                                {':'}
                                <span
                                    className="ml-2 inline-block text-green-500">-{(9.4783 - 9.1328).toFixed(5)}</span>
                        </span>

                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
