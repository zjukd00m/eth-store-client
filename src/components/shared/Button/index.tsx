export interface ButtonProps {
    text: string;
    color?: string;
    bgColor?: string;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    const { text, onClick, color, bgColor } = props;
    return (
        <button 
            onClick={onClick}
            className={`bg-gray-800
            hover:bg-gray-700 
            focus:bg-gray-700 
            active:bg-gray-900 
            text-white 
            font-semibold 
            py-2 
            px-6 
            rounded 
            shadow-md 
            transition 
            duration-300 
            ease-in-out
            ${color ? color : null}
            ${bgColor ? bgColor : null}
            `}
        >
            { text }
        </button>
    )
}