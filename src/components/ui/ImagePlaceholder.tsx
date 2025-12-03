import React from 'react';

interface ImagePlaceholderProps {
    prompt: string;
    height?: string;
    className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
    prompt,
    height = 'h-64',
    className = ''
}) => {
    return (
        <div className={`
      ${height} 
      w-full 
      bg-gray-100 
      border-2 border-dashed border-black 
      rounded-[var(--radius-neubrutalist)] 
      flex flex-col items-center justify-center 
      p-4 text-center 
      ${className}
    `}>
            <span className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">AI Image Placeholder</span>
            <p className="text-xs text-gray-600 font-mono bg-white p-2 border border-gray-300 rounded">
                Prompt: "{prompt}"
            </p>
        </div>
    );
};

export default ImagePlaceholder;
