import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function UserDetails() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/data/${id}`)
      .then((res) => setUser(res.data));
  }, [id]);
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.price}</div>
    </div>
  );
}
export { UserDetails };
