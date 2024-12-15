import React from "react";

const ProjectsDis: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-gray-900 ">
      <div className="bg-gray-800 text-center rounded-lg shadow-lg p-8 max-w-md">
        <h1 className="text-2xl font-bold text-white mb-4">Projects</h1>
        <p className="text-gray-400 mb-6">
          Unfortunately, projects are not available at the moment. Please check back later.
        </p>
        <button
          className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition"
        >
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default ProjectsDis;