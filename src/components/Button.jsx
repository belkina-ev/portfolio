import React from "react";

const Button = ({ children, className = "", url, ...props }) => {
    const handleClick = () => {
        if (url) {
            window.open(url, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <button
            className={`
                text-[#EEEEF4] 
                border 
                border-green-300/30
                rounded-full 
                py-2
                text-lg
                bg-transparent
                cursor-pointer
                transition
                duration-300
                hover:bg-green-200/20
                focus:outline-none focus:ring-2 focus:ring-green-300
                ${className}
            `}
            onClick={handleClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
