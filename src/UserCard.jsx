export default function UserCard({user}) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>
        Company phrase:
        <span style={{ fontStyle: "italic" }}>{user.company?.catchPhrase}</span>
      </p>
    </div>
  );
}
