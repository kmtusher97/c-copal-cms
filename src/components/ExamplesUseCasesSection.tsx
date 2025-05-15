import Image from "next/image";

export default function ExamplesUseCasesSection() {
  return (
    <section className="max-w-4xl mx-auto mb-20 p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">Examples / Use Cases</h2>
      <p className="text-lg text-gray-700 mb-6">
        See how C*Opal can simplify your daily tasks:
      </p>
      <div className="text-left text-lg text-gray-700 space-y-6">
        <div>
          <p className="font-semibold text-gray-800 mb-2">Find all Python files modified in the last 7 days:</p>
          <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto shadow-inner"><code className="text-sm md:text-base">copal find python files modified last 7 days</code></pre>
        </div>
        <div>
          <p className="font-semibold text-gray-800 mb-2">Summarize the main function in 'src/index.ts':</p>
          <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto shadow-inner"><code className="text-sm md:text-base">copal summarize function main in src/index.ts</code></pre>
        </div>
        <div>
          <p className="font-semibold text-gray-800 mb-2">What is the latest stable version of Node.js?</p>
          <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto shadow-inner"><code className="text-sm md:text-base">copal latest stable nodejs version</code></pre>
        </div>
         <div>
          <p className="font-semibold text-gray-800 mb-2">Explain this complex bash command: `tar -czvf archive.tar.gz --exclude='*.log' /path/to/directory`:</p>
          <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto shadow-inner"><code className="text-sm md:text-base">copal explain bash command tar -czvf archive.tar.gz --exclude='*.log' /path/to/directory</code></pre>
        </div>
      </div>
    </section>
  );
}