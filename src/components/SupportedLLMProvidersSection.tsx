export default function SupportedLLMProvidersSection() {
  return (
    <section className="max-w-4xl mx-auto text-center mb-20 p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Supported LLM Providers</h2>
      <p className="text-lg text-gray-700 mb-6">
        C*Opal is flexible and supports integration with multiple large language model providers:
      </p>
      <ul className="list-none p-0 flex flex-wrap justify-center gap-6 text-lg text-gray-800">
        <li className="bg-white px-6 py-3 rounded-full shadow-sm">VertexAI</li>{/* Moved */}
        <li className="bg-white px-6 py-3 rounded-full shadow-sm">Gemini</li>
        <li className="bg-white px-6 py-3 rounded-full shadow-sm">OpenAI</li>{/* Moved */}
        <li className="bg-white px-6 py-3 rounded-full shadow-sm">Ollama</li>
      </ul>
    </section>
  );
}