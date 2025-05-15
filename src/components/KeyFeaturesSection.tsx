export default function KeyFeaturesSection() {
  return (
    <section className="max-w-4xl mx-auto mb-20 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">Key Features</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
        <li><strong>Natural Language Command Interpretation:</strong> Understands and translates human language into executable terminal commands.</li>
        <li><strong>Multi-LLM Provider Support:</strong> Seamlessly integrate with OpenAI, Gemini, VertexAI, Ollama, and more.</li>
        <li><strong>Tool Execution:</strong> Leverage powerful tools for web search, file system interaction, code analysis, and more, directly from the CLI.</li>
        <li><strong>Thread Management:</strong> Maintain conversation context across interactions for a smoother workflow.</li>
        <li><strong>Cost Tracking:</strong> Monitor and manage your LLM usage costs.</li>
        <li><strong>Flexible Configuration:</strong> Easily set up and switch between different LLM providers and settings.</li>
      </ul>
    </section>
  );
}