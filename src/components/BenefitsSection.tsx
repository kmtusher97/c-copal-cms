export default function BenefitsSection() {
  return (
    <section className="max-w-4xl mx-auto mb-20 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">Benefits of Using C*Opal</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 text-left space-y-4">
        <li><strong>Increase Productivity:</strong> Execute complex tasks quickly with natural language commands.</li>
        <li><strong>Simplify Terminal Usage:</strong> Make the command line more accessible and intuitive for everyone.</li>
        <li><strong>Save Time:</strong> Automate repetitive tasks and reduce the need to remember complex syntax.</li>
        <li><strong>Enhance Code Exploration:</strong> Easily get summaries and explanations of code directly in your terminal.</li>
      </ul>
    </section>
  );
}