import StudentProfile from './StudentProfile';

function Students() {
  const students = [
    { id: 1, name: 'Ramil' },
    { id: 2, name: 'Patrick' },
    { id: 3, name: 'Yannis' },
    { id: 4, name: 'Boban' },
    { id: 5, name: 'Felicia' },
  ];

  return (
    <>
      <div className='students'>
        <h2>Students.jsx</h2>
        {/* {students.map((student) => (
          <h2 key={student.id}>{student.name}</h2>
        ))} */}

        {students.map((student) => (
          <StudentProfile key={student.id} studentName={student.name} />
        ))}
      </div>
    </>
  );
}

export default Students;
