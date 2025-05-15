import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="text-center mb-20">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">C*Opal: Your AI-Powered <span className="text-blue-600">CLI Assistant</span></h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">Interpret natural language commands, execute tasks, and boost your productivity in the terminal with the power of AI.</p>
      {/* Enhanced Button Styling */}
      <button className="mt-10 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg text-xl shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">Get Started</button>
    </section>
  );
}