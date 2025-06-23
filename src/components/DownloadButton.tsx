import React from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  fileName?: string;
  className?: string;
  children?: React.ReactNode;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  fileName = 'CV_Daniel_Marica.pdf',
  className = '',
  children
}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv/Professional_CV_Resume.pdf';
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-black text-black hover:text-white font-medium border border-black transition-colors duration-200 ${className}`}
      style={{ 
        alignItems: 'center', 
        display: 'flex',
        background: '#f5f5f5',
        color: '#000',
        border: '1px solid #000',
        padding: '1rem 2rem',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        borderRadius: '0'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#000';
        e.currentTarget.style.color = '#f5f5f5';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#f5f5f5';
        e.currentTarget.style.color = '#000';
      }}
    >
      <Download size={20} style={{ marginRight: '8px' }} />
      <span style={{ lineHeight: '20px' }}>
        {children || 'TÉLÉCHARGER CV'}
      </span>
    </button>
  );
};
