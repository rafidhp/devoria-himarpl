import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <img
        src="/himarpl/Maskot3.png" // Letakkan file ini di folder public
        alt="Loading"
        width={120}
        height={120}
        className="animate-pulse"
      />
      <div className="flex gap-2 items-center">
        <Loader2 className="animate-spin text-primary w-4 h-4" />
        <p className="text-muted-primary text-md">Loading...</p>
      </div>
      
    </div>
  );
}
