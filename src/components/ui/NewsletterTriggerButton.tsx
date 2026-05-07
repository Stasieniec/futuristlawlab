'use client';

export default function NewsletterTriggerButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent('open-newsletter'))}
      className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      aria-label="Sign up for our newsletter"
    >
      <span>Newsletter</span>
      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </button>
  );
}
