import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#02030a] to-[#050614]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 border-white/10 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-royal to-lavender flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-white animate-spin"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 .73-.13 1.42-.36 2.05l1.46 1.46A8 8 0 0020 12c0-4.42-3.58-8-8-8z" />
                <path d="M6.36 7.05L4.9 5.59A8 8 0 004 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3c-3.31 0-6-2.69-6-6 0-.73.13-1.42.36-2.05z" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full border border-white/5 animate-spin-slow" />
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">Dattechgee</p>
          <p className="text-sm text-neutral-400">Loading — preparing the tech lab...</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
