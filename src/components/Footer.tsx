import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full text-center py-8 text-gray-600 text-sm">
      <p>© {currentYear} Optimizely. All rights reserved.</p>
    </footer>
  );
}