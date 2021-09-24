import { Link } from "react-router-dom";

function Users() {
  return (
    <div>
      <ul>
        {[1, 2, 3, 4].map((el) => (
          <li key={el}>
            <Link to={`/home/${el}`}>Products{el}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Users };
