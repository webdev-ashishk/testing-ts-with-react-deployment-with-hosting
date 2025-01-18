import { DataFetchingType } from './UserList';

type UserListPrintedProps = {
  data: DataFetchingType[];
};
export default function UserListPrinted({ data }: UserListPrintedProps) {
  return (
    <section>
      <ul>
        {data.map((element) => (
          <section key={element.id}>
            <li>{element.name}</li>
            <li>{element.email}</li>
            <hr />
          </section>
        ))}
      </ul>
    </section>
  );
}
