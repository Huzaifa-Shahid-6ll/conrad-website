import React from 'react';

interface NeubrutalistCardProps {
    children: React.ReactNode;
    className?: string;
    color?: 'cream' | 'mint' | 'peach' | 'lavender' | 'pastelBlue' | 'pastelYellow' | 'white';
}

const NeubrutalistCard: React.FC<NeubrutalistCardProps> = ({
    children,
    className = '',
    color = 'white'
}) => {
    const bgColors = {
        cream: 'bg-cream',
        mint: 'bg-mint',
        peach: 'bg-peach',
        lavender: 'bg-lavender',
        pastelBlue: 'bg-pastel-blue',
        pastelYellow: 'bg-pastel-yellow',
        white: 'bg-white',
    };

    return (
        <div className={`
      ${bgColors[color]} 
      border-2 border-black 
      rounded-[var(--radius-neubrutalist)] 
      shadow-[var(--shadow-neubrutalist)] 
      p-6 
      ${className}
    `}>
            {children}
        </div>
    );
};

export default NeubrutalistCard;
