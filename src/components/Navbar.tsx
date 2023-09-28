export default function Navbar() {
  return (
    <div className="flex flex-row justify-between px-6 max-w-5xl w-full py-2">
      <div className="">
        <h1 className="text-white">Brice</h1>
      </div>
      <div className="">
        <ul className="flex flex-row gap-x-6 justify-evenly">
          <li>
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
