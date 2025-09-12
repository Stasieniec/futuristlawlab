'use client';

interface BlogActionsProps {
  title: string;
  excerpt: string;
}

export default function BlogActions({ title, excerpt }: BlogActionsProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: excerpt,
        url: window.location.href
      });
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-slate-500 text-sm">Share:</span>
      <button 
        onClick={handleShare}
        className="text-slate-600 hover:text-blue-700 transition"
        aria-label="Share article"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
        </svg>
      </button>
    </div>
  );
}
