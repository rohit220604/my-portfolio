// app/loading.jsx
export default function Loading() {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-50">
        <div className="w-64 h-3 bg-blue-900/60 rounded-full overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full rounded-full animate-pulse bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500" style={{ width: '60%' }} />
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🚀</span>
        </div>
        <div className="text-blue-100 text-xl font-mono mt-8">
          Loading your awesomeness...
        </div>
      </div>
    );
  }
  