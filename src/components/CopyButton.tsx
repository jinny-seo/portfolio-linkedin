import React, { useState } from 'react';

const CopyButton: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    if (copied) return;

    await navigator.clipboard.writeText('ogum536@gmail.com');
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500); // reset after 1.5s
  };

  return (
    <button
      onClick={handleClick}
      disabled={copied}
      className={`font-Doto mx-1
        text-blue-800 p-hero transition-colors duration-300
        ${copied ? 'cursor-default text-blue-800' : 'hover:underline cursor-pointer'}
      `}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

export default CopyButton;
