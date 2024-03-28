
import React from 'react';
import './App.css';

const EmployeeList = ({ employees, onAddToTeam }) => {
  return (
    <div className='employee-list'>
      <h2 >All Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <span style={{ color: employee.added ? 'gray' : 'black' }}>
              {employee.name} - Age: {employee.age}
            </span>
            {!employee.added && (
              <button onClick={() => onAddToTeam(employee)}>Add</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
