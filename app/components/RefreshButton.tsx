"use client"; 

export default function RefreshButton() {
  return (
    <div className="text-center mb-8">
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Refresh Page
      </button>
    </div>
  );
}
