import { useState, useRef, useEffect } from "react";
import Options from "./Options";
import Profile from "./Profile";
import DarkLogo from "./../../assets/images/zenith-logo-dark.png"
import LightLogo from "./../../assets/images/zenith-logo.png"

export default function ProfileContainer() {
    const [isActive, setIsActive] = useState(false);
    const ProfileContainerRef = useRef(null);

    const handleOptionToggle = () => {
        setIsActive(!isActive);
    };

    const handleClickOutside = (event) => {
        if (ProfileContainerRef.current && !ProfileContainerRef.current.contains(event.target)) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={ProfileContainerRef}
            className="fixed flex flex-col mx-6 my-4 lg:m-0 gap-3 lg:top-8 lg:left-8 shadow-2xl white-shadow z-10"
        >
            <img
                className="size-8 cursor-pointer dark:hidden"
                src={LightLogo}
                alt="Zenith logo"
                onClick={handleOptionToggle}
            />

            <img
                className="size-8 cursor-pointer hidden dark:block"
                src={DarkLogo}
                alt="Zenith logo"
                onClick={handleOptionToggle}
            />

            {isActive && (
                <div className="flex m-auto flex-col border-[0.5px] border-slate-100 dark:border-gray-500 bg-white-100 dark:bg-gray-400 rounded-3xl overflow-clip -ml-2 z-50 relative">
                    <Options />
                    <hr className="stroke-[0.5px] border-slate-100 dark:border-gray-500" />
                    <Profile />
                </div>
            )}
        </div>
    );
}
