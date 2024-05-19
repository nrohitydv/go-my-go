import { FaArrowRight } from "react-icons/fa";

import Link from "next/link";
const Home = () => {
  return (
    <main>
      <h1 className="text-slate-900 text-lg">Home</h1>

      <Link href="/dashboard">
        <p className="flex gap-3">
          Way to Dashboard
          <FaArrowRight />
        </p>
      </Link>
    </main>
  );
};

export default Home;
