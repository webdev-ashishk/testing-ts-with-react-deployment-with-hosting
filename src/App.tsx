import AdminInfo from './components/AdminInfo';
import StudentInfo from './components/StudentInfo';

export default function App() {
  return (
    <section>
      <h1>home page rendered!</h1>
      {/* <UserList /> */}
      <StudentInfo id={100} name="khushi" email="khushi.myorpur@gmail.com" />
      <hr />
      <AdminInfo
        id={200}
        name="ashishk"
        email="webdev.ashishk@gmail.com"
        isAdmin={true}
      />
    </section>
  );
}
