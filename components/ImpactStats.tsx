import React from 'react';

const stats = [
  { value: '£1800+', label: 'Raised' },
  { value: '70+', label: 'Tutoring Sessions' },
  { value: '100%', label: 'Proceeds Donated' },
];

const ImpactStats: React.FC = () => {
  return (
    <div className="bg-navy-light py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl font-bold text-white font-lato">{stat.value}</span>
              <span className="mt-2 text-lg text-accent">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
