import Image from "next/image";

export default function GettingStartedSection() {
  return (
    <section className="max-w-4xl mx-auto text-center mb-20 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Getting Started</h2>
      <p className="text-lg text-gray-700 mb-6">
        Ready to enhance your terminal experience with AI? Follow these simple steps to get Copal up and running:
      </p>
      <div className="text-left text-lg text-gray-700 space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Installation</h3>
          <p className="mb-2">
            Install Copal globally using npm:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
            <code className="text-sm md:text-base">
              npm install -g copal
            </code>
          </pre>
          <p className="mb-2">
            Or using yarn:
          </p>
           <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
            <code className="text-sm md:text-base">
              yarn global add copal
            </code>
          </pre>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Setup</h3>
          <p className="mb-2">
            If you are using Ollama, make sure the server is running and the llama3.2 model is downloaded.
          </p>
          <p className="mb-2">
            Run the initialization command to configure your AI provider:
          </p>
           <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
            <code className="text-sm md:text-base">
              copal setup
            </code>
          </pre>
           <p>
             Follow the prompts to enter your API keys and preferences. The configuration will be stored in <code>~/.terminal-ai/config.yaml</code>.
           </p>
        </div>
      </div>
    </section>
  );
}