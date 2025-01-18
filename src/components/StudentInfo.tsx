import { _StudentInfo } from '../types';

const StudentInfo = ({ id, name, email }: _StudentInfo) => {
  return (
    <div>
      <h1>student info</h1>
      <ul>
        <li>{id}</li>
        <li>{name}</li>
        <li>{email}</li>
      </ul>
    </div>
  );
};

export default StudentInfo;
