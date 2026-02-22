interface AlertBannerProps {
  type: 'success' | 'error';
  message: string;
}

export default function AlertBanner({ type, message }: AlertBannerProps) {
  if (type === 'success') {
    return (
      <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-6 rounded">
        <div className="flex items-start">
          <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <div>
            <h3 className="text-green-800 font-semibold">Submission Successful!</h3>
            <p className="text-green-700 text-sm mt-1">
              {message}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8 bg-red-50 border-l-4 border-red-500 p-4 rounded">
      <p className="text-red-700 font-medium">{message}</p>
    </div>
  );
}
