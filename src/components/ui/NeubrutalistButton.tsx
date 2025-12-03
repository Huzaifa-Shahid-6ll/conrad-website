import React from 'react';

interface NeubrutalistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

const NeubrutalistButton: React.FC<NeubrutalistButtonProps> = ({
    children,
    className = '',
    variant = 'primary',
    ...props
}) => {
    const baseStyles = "px-6 py-3 font-bold border-2 border-black rounded-full transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";

    const variants = {
        primary: "bg-mint text-black shadow-[var(--shadow-neubrutalist)] hover:bg-mint/90",
        secondary: "bg-white text-black shadow-[var(--shadow-neubrutalist)] hover:bg-gray-50",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default NeubrutalistButton;
