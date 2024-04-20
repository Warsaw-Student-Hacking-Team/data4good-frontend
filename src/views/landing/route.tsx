import {Link} from "@remix-run/react";
import styles from './styles/landing.module.css'
import BikeVideo from "~/views/landing/BikeVideo";
import {FiChevronDown} from "react-icons/fi";

const LandingPage = () => {
    return (
        <div className="bg-[#F9FAFC] min-h-screen">
            <div className="fixed top-0 left-0 w-full border-b ">
                <div className="w-4/5 mx-auto py-5 flex justify-between items-center">
                       <span>
                           <span className="font-black text-3xl font-[Berlin]">
                           <span className="text-green-500">eco</span>
                               mmute <span className="italic text-2xl">berlin</span>
                            </span>
                       </span>
                    <Link to="/emulator" className="bg-[#101828] text-white font-semibold rounded-xl px-4 py-2">
                        Explore the prototype
                    </Link>
                </div>
            </div>
            <div className="pt-52 w-4/5 mx-auto">
                <div className="grid grid-cols-2">
                    <div>
                        <div className="">
                            <h3 className="mb-7 inline-block py-2 text-slate-700 text-lg">
                                Mobile app based on a benefits program
                            </h3>
                        </div>
                        <h1 className="font-black text-8xl font-[Berlin]">
                            Empower citizens to choose <span className={styles.textWithBg}>green mobility</span>
                        </h1>
                        <div className="mt-10 flex">
                            <Link to="/emulator"
                                  className="border-2 border-[#101828] bg-[#101828] text-white font-semibold rounded-xl text-lg px-5 py-3">
                                Explore the prototype
                            </Link>
                            <Link to="#about"
                                  className="ml-5 border-2 border-[#101828] text-[#101828] font-semibold rounded-xl text-lg px-5 py-3">
                                Learn how?
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <BikeVideo/>
                    </div>

                </div>
                <div className="mt-24">
                    <div className="flex justify-center">
                        <Link to="#about" className="animate-bounce">
                            <FiChevronDown className="w-16 h-16 "/>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default LandingPage