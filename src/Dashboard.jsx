import { useParams } from "react-router-dom";

export default function Dashboard() {
  const { adminID } = useParams();
  return (
    <>
      <h1>Admin {adminID} Dashboard</h1>
    </>
  );
}
