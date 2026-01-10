import React from 'react';

function App() {
  const tags = [
    "JavaScript", "React", "Tailwind CSS", "Node.js", "Design Systems", 
    "Accessibility", "User Interface", "Experience", "Deployment", 
    "Git", "GitHub Actions", "Docker", "Kubernetes", "AWS", "Frontend", 
    "Backend", "Fullstack", "API Design", "GraphQL", "REST"
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-8 border border-gray-100">
        
        <header className="mb-6">
          <h1 className="text-xl font-bold text-gray-900">Interests & Skills</h1>
          <p className="text-gray-500 text-sm mt-1">Select topics to customize your feed.</p>
        </header>

        {/* TAGS CONTAINER */}
        {/* FUTURE BUG: Remove 'flex-wrap' -> Items will overflow horizontally */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, index) => (
            <button 
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border
                ${index % 3 === 0 
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' 
                  : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-400 hover:text-indigo-600'}`}
            >
              {tag}
              {index % 3 === 0 && <span className="ml-2 opacity-75">×</span>}
            </button>
          ))}
          
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-500 border border-transparent hover:bg-gray-200">
            + Add Tag
          </button>
        </div>

        <div className="flex justify-end pt-6 border-t border-gray-100">
          <button className="text-gray-500 hover:text-gray-800 text-sm font-medium px-4 py-2">Cancel</button>
          <button className="bg-gray-900 text-white text-sm font-bold px-6 py-2 rounded-lg hover:bg-gray-800 transition">Save Changes</button>
        </div>

      </div>
    </div>
  );
}

export default App;
