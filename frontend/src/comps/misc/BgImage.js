import DarkBackgroundImage from "./../../assets/images/dark-bg.jpg";
import LightBackgroundImage from "./../../assets/images/light-bg.png";

export default function BgImage() {
    return (
        <picture>
            <img 
                src={LightBackgroundImage}
                alt="Background image"
                className="absolute top-0 left-0 h-dvh w-screen object-cover opacity-40 lg:opacity-10 pointer-events-none hidden dark:block"
                aria-hidden="true"
            />
        </picture>
    );
}