import React from 'react';

interface TeamMemberCardProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, title, bio, imageUrl }) => {
  return (
    <div className="bg-navy-light rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img className="w-full h-56 object-cover object-center" src={imageUrl} alt={`Photo of ${name}`} />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-1 font-lato">{name}</h3>
        <p className="text-accent font-semibold mb-3">{title}</p>
        <p className="text-gray-300 text-base">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
