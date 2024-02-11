import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Choose Project</h1>
      <ul className="grid grid-cols-4">
        <li>
          <Link href="/steps">Steps</Link>
        </li>
        <li>
          <Link href="/header">Header</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
