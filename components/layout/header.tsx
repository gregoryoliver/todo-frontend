const Header = () => {
    return (
        <div className="w-full h-40 flex items-center justify-center bg-[#0D0D0D]">
            <img     src={"/assets/images/icon/icon-rocket.svg"} className="-mb-1" width={18} height={'auto'} alt="Rocket Icon" />            
            <div className="text-4xl font-black ml-3">
                <span className="text-[#4EA8DE]">Todo</span>
                <span className="text-[#5E60CE] ml-2">App</span>
            </div>
        </div>
    )
}

export default Header;