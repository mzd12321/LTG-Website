import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';
import { TEAM_MEMBERS } from '../constants';

const MeetTheTeamPage: React.FC = () => {
  return (
    <div className="bg-navy py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-lato">Meet Our Team</h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-accent">
            The passionate students behind our mission to make education accessible for all.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              title={member.title}
              bio={member.bio}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeamPage;
