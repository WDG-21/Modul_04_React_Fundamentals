const Student = () => {
  const studentData = {
    firstName: 'Testy',
    lastName: 'McTest',
    age: 42,
    course: 'Web Development',
    city: 'Berlin',
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
  };

  return (
    <div>
      <img src={studentData.picture} alt='' width='20%' />
      <h2>
        {studentData.firstName} {studentData.lastName}
      </h2>
      <p>Age: {studentData.age}</p>
      <p>Course: 🖥️ {studentData.course}</p>
      <p>City: {studentData.city}</p>
    </div>
  );
};

export default Student;
