import MobileNav from "~/views/app/MobileNav";

const AppLayout = ({ children }) => {
    return (
        <div className="bg-[#F9FAFC] w-full h-full">
            {children}
            <MobileNav />
        </div>
    )
}

export default AppLayout