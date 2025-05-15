export default function HowItWorksSection() {
  return (
    <section className="max-w-4xl mx-auto text-center mb-20 p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How it Works</h2>
      <p className="text-lg text-gray-700 mb-6">
        C*Opal works by taking your natural language input, sending it to a powerful Large Language Model (LLM) through a configured provider.
        The LLM interprets your request, and if necessary, utilizes available tools (like file system access or web search) to gather information.
        Finally, the LLM generates the appropriate terminal command or response, which C*Opal then executes and displays the result to you.
      </p>
      {/* Could add an illustration or diagram here later */}
    </section>
  );
}