import Link from "next/link";
const Countries = () => {
  return (
    <>
      <div className="  min-h-screen space-y-6 bg-gradient-to-bl from-blue-900 to-purple-900 font-semibold text-purple-200 flex flex-col items-center py-20 text-center">
        <h3 className="text-4xl font-bold mb-12 uppercase tracking-wider">
          Countries List
        </h3>

        <ul className="space-y-4">
          <li className="hover:text-white transform hover:scale-105 transition duration-300">
            <Link href="/country/pakistan">Pakistan</Link>
          </li>
          <li className="hover:text-white transform hover:scale-105 transition duration-300">
            <Link href="/country/bangladesh">Bangladesh</Link>
          </li>
          <li className="hover:text-white transform hover:scale-105 transition duration-300">
            <Link href="/country/england">England</Link>
          </li>
          <li className="hover:text-white transform hover:scale-105 transition duration-300">
            <Link href="/country/australia">Australia</Link>
          </li>
          <li className="hover:text-white transform hover:scale-105 transition duration-300">
            <Link href="/country/china">China</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Countries;
