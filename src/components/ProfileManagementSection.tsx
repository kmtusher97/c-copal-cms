import React from 'react';

export default function ProfileManagementSection() {
  return (
    <section className="max-w-4xl mx-auto text-center mb-20 p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Profile Management</h2>
      <p className="text-lg text-gray-700 mb-6">
        Profiles allow you to manage multiple AI provider configurations, making it easy to switch between different providers or models without reconfiguring your settings each time.
      </p>

      {/* Profile Basics */}
      <div className="text-left text-lg text-gray-700 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile Basics</h3>
        <p className="mb-4">
          Each profile contains:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>A unique name</li>
          <li>An AI provider (OpenAI, Gemini, VertexAI, or Ollama)</li>
          <li>An API key (where applicable)</li>
          <li>A selected model</li>
        </ul>
        <p>
          The active profile determines which AI provider and model is used for processing your commands.
        </p>
      </div>

      {/* Managing Profiles */}
      <div className="text-left text-lg text-gray-700 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Managing Profiles</h3>
        <p className="mb-2">Listing Profiles:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal profile list
          </code>
        </pre>
        <p className="mb-4">
          This shows all profiles with their provider, model, and pricing information. The active profile is marked.
        </p>

        <p className="mb-2">Setting the Active Profile:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal profile set &lt;profile-name&gt;
          </code>
        </pre>
        <p className="mb-4">
          All subsequent commands will use this profile until you change it again.
        </p>

        <p className="mb-2">Deleting a Profile:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal profile delete &lt;profile-name&gt;
          </code>
        </pre>
        <p className="mb-4">
          If you delete the active profile, another profile will automatically be set as active.
        </p>

        <p className="mb-2">Viewing Available Models:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal profile models
          </code>
        </pre>
        <p className="mb-2">You can filter models by provider:</p>
         <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal profile models --provider openai
          </code>
        </pre>
      </div>

      {/* Using a Specific Profile for a Command */}
      <div className="text-left text-lg text-gray-700 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Using a Specific Profile for a Command</h3>
        <p className="mb-4">
          You can temporarily use a different profile for a single command:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal --profile &lt;profile-name&gt; &quot;your command&quot;
          </code>
        </pre>
        <p className="mb-2">Or use the shorthand:</p>
         <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal -p &lt;profile-name&gt; &quot;your command&quot;
          </code>
        </pre>
      </div>

      {/* Profile Setup Example */}
      <div className="text-left text-lg text-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile Setup Example</h3>
        <p className="mb-2">1. Run the setup wizard to create your first profile:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal setup
          </code>
        </pre>

        <p className="mb-2">2. Create additional profiles for different providers:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            # The setup command will guide you through creating a new profile<br/>
            copal setup
          </code>
        </pre>

        <p className="mb-2">3. Switch between profiles as needed:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal profile set work-openai<br/>
            copal profile set personal-gemini
          </code>
        </pre>

        <p className="mb-2">4. Use a specific profile without switching:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal -p work-openai &quot;analyze this log file&quot;
          </code>
        </pre>
      </div>
    </section>
  );
}