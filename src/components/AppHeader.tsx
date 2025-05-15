import Link from 'next/link';

export default function AppHeader() {
  // Define key sections for primary navigation
  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'what-is-copal', name: 'What is Copal' },
    { id: 'how-it-works', name: 'How it Works' },
    { id: 'key-features', name: 'Features' },
    { id: 'getting-started', name: 'Get Started' },
    { id: 'docs-community', name: 'Docs' },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            {/* You can add your logo or site title here */}
            <span className="text-xl font-bold text-gray-900">Copal</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {sections.map((section) => (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile menu button/icon could go here */}
        </div>
      </div>
    </header>
  );
}
