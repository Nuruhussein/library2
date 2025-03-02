export default function ApplicationLogo(props) {
    return (
        <img
            {...props}
            className={`sm:h-16 text-2xl w-28 transition-all duration-300 ${props.className || ''}`}
            src="/storage/images/turas.PNG"
            alt="Logo"
        />
    );
}
