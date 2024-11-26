import { useState, useRef, useEffect } from "react";
import Options from "./Options";
import Profile from "./Profile";
import Logo from "./../../assets/images/zenith-logo.png"

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
            className="fixed flex flex-col gap-3 top-8 left-8 white-shadow"
        >
            <img
                className="size-8 cursor-pointer"
                src={Logo}
                alt="Zenith logo"
                onClick={handleOptionToggle}
            />

            {isActive && (
                <div className="flex flex-col border-[0.5px] border-[#222222] bg-[#0B0B0B] rounded-3xl overflow-clip -ml-2">
                    <Options />
                    <hr className="border-[0.5px] border-[#222222]" />
                    <Profile />
                </div>
            )}
        </div>
    );
}
