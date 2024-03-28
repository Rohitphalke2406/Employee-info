// TeamList.js
import React from 'react';

const TeamList = ({ teamMembers, onRemoveFromTeam, onSortByAge }) => {
  const calculateAverageAge = () => {
    const totalAge = teamMembers.reduce((acc, curr) => acc + curr.age, 0);
    return teamMembers.length === 0 ? 0 : totalAge / teamMembers.length;
  };

  return (
    <div className='team-list'>
      <h2>Team Members</h2>
      <button onClick={onSortByAge}>Sort by Age</button>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            {member.name} - Age: {member.age}
            <button onClick={() => onRemoveFromTeam(member)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Average Age: {calculateAverageAge()}</p>
    </div>
  );
};

export default TeamList;
