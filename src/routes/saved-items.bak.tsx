import React from "react";
import { Edit3, Play, Share, Star, Sun } from "lucide-react";
import { Footer } from "@/components/footer.tsx";

export const SavedItems = () => {
  return (
    <div className="flex flex-col">
      {/* Top Header */}
      <header className="flex items-center justify-between p-4 pt-12">
        <div className="flex-1" />
        <div className="bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
          <span className="text-gray-700 font-medium text-lg">For You</span>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <button className="w-10 h-10 bg-white rounded-full shadow-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Edit3 size={18} className="text-gray-600" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full shadow-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Play size={18} className="text-gray-600" />
          </button>
        </div>
      </header>

      {/* TODO: Main Content here (add Outlet) */}
      <main className="grow flex flex-col items-center px-6 py-8">
        <div className="bg-white rounded-3xl shadow-sm [--tw-shadow-color:var(--color-black-a4)] border border-gray-100 p-8 w-full max-w-sm mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-8">
              <Sun size={28} className="text-white" />
            </div>

            <div className="text-center mb-12">
              <h1 className="text-2xl font-bold text-gray-900 leading-relaxed">
                I have the freedom to express myself in original and creative ways.
              </h1>
            </div>

            {/* Action Section */}
            <div className="flex items-center justify-center space-x-6 w-full">
              <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                <Share size={20} className="text-gray-600" />
              </button>

              <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg flex-1 text-nowrap">
                Embrace the Thought
              </button>

              <button
                onClick={() => setIsStarred(!isStarred)}
                className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
              >
                <Star
                  size={20}
                  className={`${isStarred ? "text-yellow-500 fill-yellow-500" : "text-gray-600"} transition-colors`}
                />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <Footer />
    </div>
  );
};
