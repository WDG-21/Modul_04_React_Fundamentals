import { studentData } from '../utils/studentData';

const Grade = () => {
  const gpa = studentData.gpa;
  let grade;

  if (gpa >= 90) {
    grade = 'A';
  } else if (gpa >= 80) {
    grade = 'B';
  } else if (gpa >= 70) {
    grade = 'C';
  } else if (gpa >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  return <span>{grade}</span>;
};

export default Grade;

// export const Grade = () => {
//   const gpa = studentData.gpa;

//   if (gpa >= 97) {
//     return 'A+';
//   } else if (gpa >= 93) {
//     return 'A';
//   } else if (gpa >= 90) {
//     return 'A-';
//   } else if (gpa >= 87) {
//     return 'B+';
//   } else if (gpa >= 83) {
//     return 'B';
//   } else if (gpa >= 80) {
//     return 'B-';
//   } else if (gpa >= 77) {
//     return 'C+';
//   } else if (gpa >= 73) {
//     return 'C';
//   } else if (gpa >= 70) {
//     return 'C-';
//   } else if (gpa >= 67) {
//     return 'D+';
//   } else if (gpa >= 63) {
//     return 'D';
//   } else if (gpa >= 60) {
//     return 'D-';
//   } else {
//     return 'F';
//   }
// };

// export const Grade = () => {
//   const gpa = studentData.gpa;
//   let grade;

//   switch (true) {
//     case gpa >= 97:
//       grade = 'A+';
//       break;
//     case gpa >= 93:
//       grade = 'A';
//       break;
//     case gpa >= 90:
//       grade = 'A-';
//       break;
//     case gpa >= 87:
//       grade = 'B+';
//       break;
//     case gpa >= 83:
//       grade = 'B';
//       break;
//     case gpa >= 80:
//       grade = 'B-';
//       break;
//     case gpa >= 77:
//       grade = 'C+';
//       break;
//     case gpa >= 73:
//       grade = 'C';
//       break;
//     case gpa >= 70:
//       grade = 'C-';
//       break;
//     case gpa >= 67:
//       grade = 'D+';
//       break;
//     case gpa >= 63:
//       grade = 'D';
//       break;
//     case gpa >= 60:
//       grade = 'D-';
//       break;
//     default:
//       grade = 'F';
//   }

//   return grade;
// };
