import {HomeIcon} from "@radix-ui/react-icons";
import {BiHistory} from "react-icons/bi";
import {PiChartBarDuotone, PiTrophyDuotone} from "react-icons/pi";
import {Link} from "@remix-run/react";

const mobileNavItems = [
    {
        icon: <HomeIcon className="w-7 h-7"/>,
        label: 'Home',
        to: '/app'
    },
    {
        icon: <BiHistory className="w-7 h-7"/>,
        label: 'History',
        to: '#'
    },
    {
        icon: <PiChartBarDuotone className="w-7 h-7"/>,
        label: 'Impact',
        to: '#'
    },
    {
        icon: <PiTrophyDuotone className="w-7 h-7"/>,
        label: 'Benefits',
        to: '/app/benefits'
    },
]

const MobileNav = () => (
    <div className="fixed w-full bottom-0">
        <div className="border-t bg-white">
            <div className="grid grid-cols-4 px-10 py-2 text-[#0F1828]">
                {
                    mobileNavItems.map(item => (
                        <div className="flex flex-col items-center">
                            <Link to={item.to}>
                                <span className="flex justify-center">
                                    {item.icon}
                                </span>
                                <span className="text-xs">{item.label}</span>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
)

export default MobileNav