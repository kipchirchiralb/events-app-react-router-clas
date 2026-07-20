import { useEffect, useState } from "react";
import UserCard from "./UserCard";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
       
        setUsers(data);
      });
  }, []);

  return (
    <>
      <h1>Home page</h1>
      <h2>Users</h2>
      <div styles={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </>
  );
}
