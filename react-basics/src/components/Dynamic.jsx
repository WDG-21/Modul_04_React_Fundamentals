import StudentProfile from './StudentProfile';

function Dynamic() {
  const students = [
    { id: 1, name: 'Patrick' },
    { id: 2, name: 'Felicia' },
    { id: 3, name: 'Boban' },
    { id: 4, name: 'Yannis' },
    { id: 5, name: 'Ramil' },
  ];

  return (
    <div>
      <h2>Student List</h2>

      {/* {students.map((student) => (
        <h2 key={student.id}>{student.name}</h2>
      ))} */}

      {students.map((student) => (
        <StudentProfile key={student.id} studentName={student.name} />
      ))}
    </div>
  );
}

export default Dynamic;
