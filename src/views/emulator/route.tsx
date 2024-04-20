import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import {FiArrowLeft} from "react-icons/fi";
import {Link, useNavigate} from "@remix-run/react";
import {useEffect} from "react";

const MOBILE_THRESHOLD = 600;

const MobileViewEmulator = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(window.innerWidth < MOBILE_THRESHOLD) {
            navigate('/app')
        }
    }, []);
    return (
        <div className="bg-[#0F1828] w-full min-h-screen py-10 px-20">
            <div className="grid xl:grid-cols-2 gap-20">
                <div className="flex justify-center">
                    <DeviceFrameset device="iPhone X">
                        <iframe src="/app" className="w-full h-full"></iframe>
                    </DeviceFrameset>
                </div>
                <div className="mt-20 text-white">
                 <span>
                           <span className="font-black text-5xl font-[Berlin]">
                           <span className="text-green-500">eco</span>
                               mmute <span className="italic text-3xl">berlin</span>
                            </span>
                       </span>
                    <h2 className="mt-10 font-bold text-3xl">
                        Check out our mobile app
                    </h2>
                    <p className="mt-10">
                        The prototype on your left is fully clickable.
                        Feel free to play with it.
                    </p>

                    <Link to="/" className="inline-flex border px-4 py-2 rounded-xl border items-center mt-10">
                        <FiArrowLeft className="w-7 h-7 mr-2" />
                        <span className="">Go back to the landing page</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MobileViewEmulator