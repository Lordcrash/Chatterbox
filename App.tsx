import React from 'react';

// The global JSX declaration for 'gradio-app' is now in types.ts,
// which makes it available throughout the application.

const App: React.FC = () => {
  const gradioAppSrc = "https://resembleai-chatterbox.hf.space";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white flex flex-col items-center p-4 sm:p-6 md:p-8 selection:bg-purple-500 selection:text-white">
      <header className="w-full max-w-6xl text-center my-8 sm:my-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Interactive AI Chat
          </span>
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          Experience the Resemble AI Chatterbox, embedded directly on this page. Engage with the AI below.
        </p>
      </header>

      <main className="w-full max-w-6xl flex-grow flex justify-center px-2 sm:px-0">
        <div className="bg-slate-700/30 backdrop-blur-lg shadow-2xl rounded-xl overflow-hidden w-full ring-1 ring-slate-700">
          {/* 
            The <gradio-app> element renders the Gradio interface.
            The Gradio JS script (loaded in index.html) defines this custom element.
            TypeScript now recognizes 'gradio-app' due to the global declaration in types.ts.
            It typically handles its own loading state and responsiveness.
            Ensure the `src` attribute points to a valid Gradio app URL.
          */}
          <gradio-app src={gradioAppSrc}></gradio-app>
        </div>
      </main>

      <footer className="w-full max-w-6xl text-center mt-10 sm:mt-16 py-6 sm:py-8 border-t border-slate-700">
        <p className="text-sm text-slate-400">
          Powered by <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">React</a>, 
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"> Tailwind CSS</a>, and 
          <a href="https://www.gradio.app/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"> Gradio</a>.
        </p>
         <p className="text-xs text-slate-500 mt-2">
          Gradio app hosted on Hugging Face Spaces.
        </p>
      </footer>
    </div>
  );
};

export default App;