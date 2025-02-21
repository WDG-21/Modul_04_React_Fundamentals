import { studentData } from '../utils/studentData';
import Grade from './Grade';

const Student2 = () => {
  return (
    <div className='student-card'>
      <img
        src={studentData.picture}
        alt=''
        width='20%'
        className='student-picture'
        draggable={false}
      />
      <h2>
        {studentData.firstName} {studentData.lastName}
      </h2>
      <p>Age: {studentData.age}</p>
      <p>Course: 🖥️ {studentData.course}</p>
      <p>City: {studentData.city}</p>
      <p>
        Grade: <Grade />
      </p>
      <p>Status: {studentData.graduate ? 'Graduate' : 'Student'}</p>
    </div>
  );
};

export default Student2;
