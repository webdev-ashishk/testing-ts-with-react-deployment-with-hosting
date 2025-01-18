const AdminInfo = ({ id, name, email, isAdmin }: _AdminInfo) => {
  return (
    <section>
      <h1>admin Info!</h1>
      <ul>
        <li>{id}</li>
        <li>{name}</li>
        <li>{email}</li>
        <li>{isAdmin}</li>
      </ul>
    </section>
  );
};
export default AdminInfo;
