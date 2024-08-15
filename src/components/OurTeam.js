import React from 'react';


const teamMembers = [
  { name: "Tusar Gupta", role: "Partner", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAyngo303KsaY5YxXpJpQUQxPhh-09A4Xdw&s" },
  { name: "Rinky Sengar", role: "Managing Partner", imageUrl: "https://www.shutterstock.com/image-photo/team-diverse-partners-mature-latin-600nw-2346448085.jpg" },
  { name: "Jatin Garg", role: "Managing Partner", imageUrl: "https://assets.entrepreneur.com/content/3x2/2000/20160520174625-co-founders-partnership-coworkers-meeting-office.jpeg" },
  { name: "Rachit Jain", role: "Associate Member", imageUrl: "https://nextluxury.com/wp-content/uploads/Wedding-Mens-Formal-Wear-2.jpg" },
];

const TeamSection = () => {
  return (
    <div className="py-12 bg-white">
      <h1 className="text-center text-3xl font-semibold mb-10">Our Team</h1>
      <div className="flex justify-center items-center flex-wrap gap-8 px-5">
        {teamMembers.map(member => (
          <div key={member.name} className="text-center">
            <div className="w-28 h-28 rounded-full overflow-hidden mx-auto shadow">
              <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-medium mt-3">{member.name}</h2>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;

