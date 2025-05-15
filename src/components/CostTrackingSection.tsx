import React from 'react';

export default function CostTrackingSection() {
  return (
    <section className="max-w-4xl mx-auto text-center mb-20 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cost Tracking</h2>
      <p className="text-lg text-gray-700 mb-6">
        The application tracks approximate costs for API usage based on token consumption. This gives you an idea of the cost of your commands across different providers and models.
      </p>
      <p className="text-sm text-gray-500 italic">
        Note that cost estimates may not be completely accurate but provide a helpful reference for managing your API usage.
      </p>
    </section>
  );
}