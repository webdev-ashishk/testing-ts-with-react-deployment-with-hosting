import { useEffect, useState } from 'react';
import UserListPrinted from './UserListPrinted';
type GEO = {
  lat: number;
  lng: number;
};
type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: GEO;
};
type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
export type DataFetchingType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone: number;
  website?: string;
  company?: Company;
};
const UserList = () => {
  const [data, setData] = useState<DataFetchingType[]>([]);
  async function dataFetching() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    setData(result);
  }
  useEffect(() => {
    dataFetching();
  }, []);
  console.log(data);
  return (
    <section>
      <h3>api call component</h3>
      <hr />
      {data.length === 0 ? <p>loading</p> : <p>loaded successfully</p>}
      <UserListPrinted data={data} />
    </section>
  );
};
export default UserList;
