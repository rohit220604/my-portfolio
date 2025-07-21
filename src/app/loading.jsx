export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-blue-950 z-50">
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Slow spin with 3s duration */}
        <div className="absolute w-16 h-16 border-4 border-dashed border-blue-400 rounded-full animate-[spin_3s_linear_infinite]"></div>
        {/* Normal spin with default 1s */}
        <div className="absolute w-24 h-24 border-4 border-dashed border-blue-700 rounded-full animate-[spin_4s_linear_infinite]"></div>
        {/* Another slow spin */}
        <div className="absolute w-32 h-32 border-4 border-dashed border-blue-300 rounded-full animate-[spin_5s_linear_infinite]"></div>
        <div className="w-8 h-8 bg-blue-700 rounded-full shadow-lg z-10"></div>
      </div>
      <div className="text-blue-100 text-xl font-mono mt-8 animate-pulse">
        Loading...
      </div>
    </div>
  );
}
