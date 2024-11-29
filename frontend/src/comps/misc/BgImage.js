import BackgroundImage from "./../../assets/images/zenith-bg.jpg";

export default function BgImage() {
    return (
        <picture>
            {/* <source 
                srcSet={require("../assets/images/zenith-bg.webp")} 
                type="image/webp"
            /> */}
            <img 
                src={BackgroundImage}
                alt="Background image"
                className="absolute top-0 left-0 h-dvh w-screen object-cover opacity-40 lg:opacity-10 pointer-events-none"
                aria-hidden="true"
            />
        </picture>
    );
}