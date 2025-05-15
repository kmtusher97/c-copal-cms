import React from 'react';

export default function ThreadManagementSection() {
  return (
    <section className="max-w-4xl mx-auto text-center mb-20 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Thread Management</h2>
      <p className="text-lg text-gray-700 mb-6">
        Threads allow you to maintain conversational context across multiple interactions with the AI. This is especially useful for complex tasks that require multiple steps or when you want to continue a conversation later.
      </p>

      {/* Thread Basics */}
      <div className="text-left text-lg text-gray-700 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Thread Basics</h3>
        <p className="mb-4">
          Each thread maintains its conversation history, allowing the AI to reference previous commands and responses. This provides continuity and context awareness for ongoing tasks.
        </p>
      </div>

      {/* Managing Threads */}
      <div className="text-left text-lg text-gray-700 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Managing Threads</h3>
        <p className="mb-2">Listing Threads:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal thread list
          </code>
        </pre>
        <p className="mb-2">You can filter threads by name:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-4 mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal thread list --filter &quot;project&quot;
          </code>
        </pre>
        <p className="mb-4">
          After listing threads, you can select one interactively to continue the conversation.
        </p>

        <p className="mb-2">Attaching to a Thread:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal thread attach &lt;thread-id&gt;
          </code>
        </pre>
        <p className="mb-4">
          This will resume the conversation where you left off, with all previous context intact.
        </p>

        <p className="mb-2">Using a Thread for a Single Command:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal --thread &lt;thread-id&gt; &quot;your command&quot;
          </code>
        </pre>

        <p className="mb-2">Renaming Threads:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal thread rename &lt;thread-id&gt; &quot;React project setup&quot;
          </code>
        </pre>

        <p className="mb-2">Deleting Threads:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal thread delete &lt;thread-id&gt;
          </code>
        </pre>
      </div>

      {/* Thread Workflow Example */}
      <div className="text-left text-lg text-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Thread Workflow Example</h3>
        <p className="mb-2">1. Start a new task in agent mode:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal -i &quot;set up a React project&quot;
          </code>
        </pre>
        <p className="mb-4">This creates a new thread automatically.</p>

        <p className="mb-2">2. Later, list your threads to find the React project:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal thread list
          </code>
        </pre>

        <p className="mb-2">3. Attach to the thread to continue the setup:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal thread attach &lt;thread-id&gt;
          </code>
        </pre>

        <p className="mb-2">4. After completing the task, rename the thread for future reference:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4 shadow-inner">
          <code className="text-sm md:text-base">
            copal thread rename &lt;thread-id&gt; &quot;React project setup&quot;
          </code>
        </pre>
      </div>
    </section>
  );
}