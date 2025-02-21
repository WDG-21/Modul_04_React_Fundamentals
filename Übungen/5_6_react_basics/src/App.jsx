import Student from './components/Student';
import { students } from './utils/students';

function App() {
  // console.log(students);

  const testButton = () => {
    console.log('button was clicked');
    alert('hey, whats up?');
  };

  return (
    <>
      <button onClick={() => alert('button was clicked')}>ADD</button>
      <button onClick={testButton}>TEST AGAIN</button>
      <input type='text' onChange={(e) => console.log(e.target.value)} />
      <div className='students'>
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </div>
    </>
  );
}

export default App;
