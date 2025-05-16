import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="hero" className="text-center mb-20 animate-fadeIn">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 animate-slideInUp animate-delay-200">C*Opal: Your AI-Powered <span className="text-blue-600">CLI Assistant</span></h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto animate-slideInUp animate-delay-400">Interpret natural language commands, execute tasks, and boost your productivity in the terminal with the power of AI.</p>
      {/* Enhanced Button Styling */}
      <div className="animate-slideInUp animate-delay-600">
        <Link href="#getting-started">
          <button className="mt-10 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg text-xl shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out transform hover:scale-105">Get Started</button>
        </Link>
      </div>
    </section>
  );
}