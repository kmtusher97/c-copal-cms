import React from 'react';

export default function UsageSection() {
  return (
    <section className="max-w-4xl mx-auto text-center mb-20 p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Usage</h2>

      {/* Non-interactive Mode */}
      <div className="text-left text-lg text-gray-700 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Non-interactive mode</h3>
        <p className="mb-4">
          In non-interactive mode, the AI converts your natural language request into a single terminal command and executes it:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal &quot;your command in natural language&quot;
          </code>
        </pre>
        <p className="mb-2">Examples:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal &quot;list all files in the current directory&quot;<br/>
            copal &quot;delete all files in current folder&quot;
          </code>
        </pre>
        <p className="text-sm text-gray-500 italic">
          When using a potentially destructive command, the application will ask for confirmation before executing.
        </p>
      </div>

      {/* Interactive Mode */}
      <div className="text-left text-lg text-gray-700 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Interactive mode</h3>
        <p className="mb-4">
          In interactive mode, the AI maintains a continuous conversation, suggesting and executing commands with your permission:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal --interactive &quot;your task description&quot;
          </code>
        </pre>
        <p className="mb-2">Or use the shorthand:</p>
         <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal -i &quot;your task description&quot;
          </code>
        </pre>
        <p className="mb-4">
          The agent will:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Analyze your request and suggest appropriate commands</li>
          <li>Provide reasoning for each suggested command</li>
          <li>Ask for confirmation before executing potentially dangerous commands</li>
          <li>Return command output to the AI for further analysis</li>
          <li>Maintain conversation context for multi-step tasks</li>
        </ul>
        <p className="mb-2">To exit agent mode, type <code>exit</code> or <code>quit</code>.</p>
        <p className="mb-2">Examples:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal -i &quot;help me find large files on my system&quot;<br/>
            copal -i &quot;set up a basic Node.js project&quot;
          </code>
        </pre>
      </div>

      {/* Advanced Usage: Using with Pipes */}
      <div className="text-left text-lg text-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Advanced Usage: Using with Pipes</h3>
        <p className="mb-4">
          The AI CLI can process input from other commands via pipes:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            # Process file contents<br/>
            cat config.json | copal &quot;validate this JSON file&quot;<br/><br/>
            # Filter command output<br/>
            ps aux | copal &quot;find all Node.js processes&quot;<br/><br/>
            # Analyze logs<br/>
            tail -n 100 server.log | copal &quot;what errors occurred in the last 100 lines&quot;
          </code>
        </pre>
      </div>
    </section>
  );
}