// App.js
import React, { useState } from 'react';
import TeamList from './teamList';
import EmployeeList from './employeeList';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState(allEmployees);
  const [teamMembers, setTeamMembers] = useState([]);

  const addToTeam = (employee) => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === employee.id ? { ...emp, added: true } : emp
    );
    setEmployees(updatedEmployees);
    setTeamMembers([...teamMembers, employee]);
  };

  const removeFromTeam = (employee) => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === employee.id ? { ...emp, added: false } : emp
    );
    setEmployees(updatedEmployees);
    setTeamMembers(teamMembers.filter((member) => member.id !== employee.id));
  };

  const sortByAge = () => {
    const sortedTeam = [...teamMembers].sort((a, b) => a.age - b.age);
    setTeamMembers(sortedTeam);
  };

  return (
    <div className='container'>
      <EmployeeList employees={employees} onAddToTeam={addToTeam} />
      <TeamList
        teamMembers={teamMembers}
        onRemoveFromTeam={removeFromTeam}
        onSortByAge={sortByAge}
      />
    </div>
  );
};

const allEmployees = [
  { id: 1, name: 'John', age: 30, added: false },
  { id: 2, name: 'Alice', age: 25, added: false },
  { id: 3, name: 'Kenny', age: 35, added: false },
  { id: 4, name: 'Lenny', age: 35, added: false },
  { id: 5, name: 'Cheeny', age: 31, added: false },
  { id: 6, name: 'Don', age: 33, added: false },
  { id: 7, name: 'Roman', age: 34, added: false },
  { id: 8, name: 'Charley', age: 28, added: false },
  { id: 9, name: 'Delta', age: 29, added: false },
  { id: 10, name: 'Gama', age: 30, added: false },
  
];

export default App;
