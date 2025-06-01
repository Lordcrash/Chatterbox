
import React, { useEffect } from 'react';
import './types'; // Ensures global types are loaded

// The global JSX declaration for 'gradio-app' is now in types.ts,
// which makes it available throughout the application.

const App: React.FC = () => {
  const gradioAppSrc = "https://resembleai-chatterbox.hf.space";

  useEffect(() => {
    // Attempt to hide the H1 element using the user-provided snippet.
    // This code is executed after the component mounts.
    // A timeout is used to give the <gradio-app> a brief moment to load.

    const attemptHideTitle = () => {
      try {
        // User's provided line:
        const headingElement = document.querySelectorAll('gradio-app h1')[0] as HTMLElement | undefined;

        if (headingElement) {
          headingElement.style.display = "none";
          console.log("Attempted to hide H1 element targeted by 'gradio-app h1'.");
        } else {
          console.warn("H1 element targeted by 'gradio-app h1' not found. It might not exist, might be in a Shadow DOM, or within a cross-origin iframe.");
        }
      } catch (error) {
        console.error("Error attempting to hide H1 element:", error);
      }
    };

    // IMPORTANT CAVEATS:
    // 1. Same-Origin Policy: If the <gradio-app> loads its content (src)
    //    into an iframe from a different origin (like hf.space), this script
    //    CANNOT access or modify elements *inside* that iframe.
    //    This is a fundamental browser security feature.
    // 2. Shadow DOM: If <gradio-app> uses a Shadow DOM for its internal
    //    structure, document.querySelectorAll() from the parent page might not
    //    pierce it to find the H1.
    // 3. Timing: The H1 might not be present in the DOM when this script runs,
    //    even with a timeout. This approach is fragile.
    //
    // If the H1 is part of the cross-origin iframe content, this will not work.
    // Changes would need to be made in the Gradio app's own source code.
    const timerId = setTimeout(attemptHideTitle, 2000); // 2-second delay, adjust if necessary

    return () => clearTimeout(timerId); // Cleanup the timeout if the component unmounts
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white flex flex-col items-center p-4 sm:p-6 md:p-8 selection:bg-purple-500 selection:text-white">
      <header className="w-full max-w-6xl text-center my-8 sm:my-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            SynthMe Buddy
          </span>
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
          Welcome to SynthMe Buddy! Transform your text into stunning, high-quality speech. Our advanced AI can even style the voice output using reference audio, bringing your words to life like never before. Dive in and experience the magic of cutting-edge voice synthesis!
        </p>
      </header>

      <main className="w-full max-w-6xl flex-grow flex flex-col items-center px-2 sm:px-0">
        <div className="bg-slate-700/30 backdrop-blur-lg shadow-2xl rounded-xl overflow-hidden w-full ring-1 ring-slate-700">
          {/* 
            The <gradio-app> element renders the Gradio interface.
            The Gradio JS script (loaded in index.html) defines this custom element.
            TypeScript now recognizes 'gradio-app' due to the global declaration in types.ts.
            It typically handles its own loading state and responsiveness.
            Ensure the `src` attribute points to a valid Gradio app URL.

            Note on hiding internal elements:
            Directly hiding specific elements (like a "Chatterbox TS demo" heading) 
            *within* the Gradio application (loaded in the iframe below) from this 
            parent React application is generally not possible due to browser 
            Same-Origin Policy if the content is cross-origin. 
            The useEffect hook above attempts this based on user request, but it is
            subject to these browser security restrictions and timing issues.
          */}
          <gradio-app src={gradioAppSrc}></gradio-app>
        </div>

        <section className="mt-12 sm:mt-16 w-full max-w-4xl mx-auto text-slate-200 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 mb-6 sm:mb-8">
            Instantly Synthesize Lifelike AI Voices with Our Single-Shot Text-to-Voice Generator
          </h2>
          <p className="text-base sm:text-lg mb-4 leading-relaxed">
            Transform your text into natural-sounding, high-quality AI-generated speech in a single step. Our innovative AI voice synthesis model offers a streamlined solution for creating realistic voiceovers, audio content, and more – no complex configurations, just immediate results.
          </p>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Experience the power of cutting-edge artificial intelligence with our easy-to-use text-to-speech (TTS) platform. Simply input your text prompt, and our model will instantly synthesize a clear and expressive AI voice. This "single-shot" capability means you get your desired audio output quickly and efficiently, perfect for dynamic content creation needs.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-4">Key Features & Benefits:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
            <li>Instant Voice Synthesis: Generate AI voices directly from your text prompts in one go.</li>
            <li>Realistic & Natural-Sounding Voices: Leverage advanced AI to produce lifelike speech that captivates listeners.</li>
            <li>Simple & Fast: No complex setup or multi-step processes. Ideal for quick turnarounds and efficient workflows.</li>
            <li>Versatile Applications: Perfect for creating voiceovers for videos, e-learning materials, audiobook narration, accessibility features, and any project requiring high-quality synthesized speech.</li>
            <li>AI Voice Generator: A powerful tool for developers, content creators, marketers, and educators seeking a reliable text-to-speech solution.</li>
            <li>Text-to-Speech Online: Access our voice synthesis capabilities directly through an intuitive interface.</li>
          </ul>

          <p className="text-base sm:text-lg mb-4 leading-relaxed">
            Our AI-powered voice generation model is designed for users who need a straightforward and effective way to convert text into audible speech. Whether you're looking for a quick "text to voice" solution or a robust "AI voice synthesizer," our platform delivers exceptional quality and speed.
          </p>
          <p className="text-base sm:text-lg font-semibold text-center text-pink-400 leading-relaxed">
            Unlock the potential of AI-generated voices for your projects today. Experience seamless, single-shot text-to-speech conversion and elevate your audio content.
          </p>
        </section>
      </main>

      <footer className="w-full max-w-6xl text-center mt-10 sm:mt-16 py-6 sm:py-8 border-t border-slate-700">
        <p className="text-sm text-slate-400">
          SynthMe Buddy
        </p>
      </footer>
    </div>
  );
};

export default App;
