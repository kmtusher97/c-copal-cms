export default function LocalDevelopmentSection() {
  return (
    <section id="local-development" className="max-w-4xl mx-auto text-center mb-20 p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Local Development</h2>
      <p className="text-lg text-gray-700 mb-6">
        If you want to contribute to Copal or run it from source, follow these steps:
      </p>

      {/* Prerequisites */}
      <div className="text-left text-lg text-gray-700 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Prerequisites</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Node.js (version 20.0.0 or higher)</li>
          <li>npm or yarn</li>
        </ul>
      </div>

      {/* Clone the Repository */}
      <div className="text-left text-lg text-gray-700 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Clone the Repository</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            git clone https://github.com/kamrul1157024/terminal-ai.git<br/>
            cd terminal-ai
          </code>
        </pre>
      </div>

      {/* Install Dependencies */}
      <div className="text-left text-lg text-gray-700 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Install Dependencies</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            npm install<br/>
            # or using yarn<br/>
            yarn
          </code>
        </pre>
      </div>

      {/* Build the Project */}
      <div className="text-left text-lg text-gray-700 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Build the Project</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            npm run build<br/>
            # or using yarn<br/>
            yarn build
          </code>
        </pre>
      </div>

      {/* Install Locally for Testing */}
      <div className="text-left text-lg text-gray-700 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Install Locally for Testing</h3>
        <p className="mb-4">
          This will build the project and make the <code>copal</code> command available globally on your system:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            npm run install:global<br/>
            # or using yarn<br/>
            yarn install:global
          </code>
        </pre>
      </div>

      {/* Development Scripts */}
      <div className="text-left text-lg text-gray-700 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Development Scripts</h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>
            <strong>Build</strong>: Transpile TypeScript to JavaScript
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mt-2 shadow-inner">
              <code className="text-sm md:text-base">npm run build</code>
            </pre>
          </li>
          <li>
            <strong>Clean</strong>: Remove build artifacts
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mt-2 shadow-inner">
              <code className="text-sm md:text-base">npm run clean</code>
            </pre>
          </li>
          <li>
            <strong>Format</strong>: Apply code formatting with Prettier
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mt-2 shadow-inner">
              <code className="text-sm md:text-base">npm run format</code>
            </pre>
          </li>
          <li>
            <strong>Lint</strong>: Run ESLint to check code quality
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mt-2 shadow-inner">
              <code className="text-sm md:text-base">npm run lint</code>
            </pre>
          </li>
          <li>
            <strong>Fix Linting Issues</strong>: Run ESLint with auto-fix
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mt-2 shadow-inner">
              <code className="text-sm md:text-base">npm run lint:fix</code>
            </pre>
          </li>
        </ul>
      </div>

      {/* Contributing */}
      <div className="text-left text-lg text-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Contributing</h3>
        <ol className="list-decimal list-inside ml-4">
          <li>Fork the repository</li>
          <li>Create a feature branch (<code>git checkout -b feature/amazing-feature</code>)</li>
          <li>Commit your changes (<code>git commit -m &apos;Add some amazing feature&apos;</code>)</li>
          <li>Push to the branch (<code>git push origin feature/amazing-feature</code>)</li>
          <li>Open a Pull Request</li>
        </ol>
        <p className="mt-4">
          We welcome contributions to improve Copal!
        </p>
      </div>
    </section>
  );
}