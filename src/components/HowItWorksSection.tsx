export default function HowItWorksSection() {
  return (
    <section className="max-w-4xl mx-auto text-center mb-20 p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How it Works</h2>
      <p className="text-lg text-gray-700 mb-6">
        Copal is a CLI application that uses AI to process natural language commands and execute them in the terminal.
        It works by taking your natural language input, sending it to a configured Large Language Model (LLM) via your chosen provider.
        The LLM interprets your request, and if necessary, uses available tools to gather information or perform tasks.
        Finally, the LLM generates the appropriate terminal command or response, which Copal executes and presents the result.
      </p>
    </section>
  );
}