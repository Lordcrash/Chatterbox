import React from 'react';

// The global JSX declaration for 'gradio-app' is now in types.ts
// and will be picked up automatically by TypeScript.

const App: React.FC = () => {
  const gradioAppSrc = "https://resembleai-chatterbox.hf.space";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 selection:bg-sky-500 selection:text-white">
      <div className="w-full max-w-5xl space-y-6 sm:space-y-8">
        <header className="text-center">
          <div className="inline-flex items-center justify-center p-2 bg-sky-500/10 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-sky-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v.75A7.5 7.5 0 0 1 12 21a7.5 7.5 0 0 1-7.5-7.5V12a7.5 7.5 0 0 1 7.5-7.5A7.5 7.5 0 0 1 19.5 12v.75a6 6 0 0 1-6 6Z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
            Interactive AI Voice Chat
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Experience the <a href="https://huggingface.co/spaces/resembleai/chatterbox" target="_blank" rel="noopener noreferrer" className="font-medium text-sky-400 hover:text-sky-300 underline underline-offset-2">Resemble AI Chatterbox</a>, embedded directly below.
          </p>
        </header>

        <main className="bg-slate-800/70 shadow-2xl rounded-xl overflow-hidden ring-1 ring-slate-700 backdrop-blur-md">
          {/* 
            The Gradio app component.
            It's crucial that the Gradio JS (loaded in index.html) is available before this component renders.
            The `src` attribute points to the Gradio application URL.
            Styling note: The Gradio app will mostly define its own appearance.
            This container provides a themed frame.
            Ensure the Gradio app has enough vertical space or handles its own scrolling.
            A min-height (e.g., min-h-[700px]) is applied to the gradio-app container for better default sizing.
          */}
          <div className="p-0.5 sm:p-1 min-h-[700px] flex"> {/* Minimal padding and ensure vertical space */}
            <gradio-app src={gradioAppSrc} theme_mode="dark" class="flex-grow"></gradio-app> {/* Added theme_mode and class for flex growth */}
          </div>
        </main>

        <footer className="text-center text-xs sm:text-sm text-slate-400/80">
          <p>&copy; {new Date().getFullYear()} AI Showcase. All rights reserved.</p>
          <p className="mt-1">
            Gradio application embedded from <a href={gradioAppSrc} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 underline underline-offset-2">{gradioAppSrc}</a>.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
