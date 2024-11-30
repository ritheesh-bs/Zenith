import DarkBackgroundImage from "./../../assets/images/dark-bg.jpg";
import LightBackgroundImage from "./../../assets/images/light-bg.png";

export default function BgImage() {
    return (
        <picture className="z-0">
            <img 
                src={DarkBackgroundImage}
                alt="Background image"
                className="absolute top-0 left-0 h-dvh w-screen object-cover opacity-40 lg:opacity-10 pointer-events-none hidden dark:block"
                aria-hidden="true"
            />
            <img 
                src={LightBackgroundImage}
                alt="Background image"
                className="absolute top-0 rotate-180 left-0 h-dvh w-screen object-cover opacity-30 pointer-events-none dark:hidden"
                aria-hidden="true"
            />
        </picture>
    );
}