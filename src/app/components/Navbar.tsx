export default function Navbar() {
  return (
    <div className="flex flex-row">
      <div>
        <h1>Brice</h1>
      </div>
      <div className="flex flex-row">
        <ul>
          <li className="text-red-500">
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
