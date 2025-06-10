import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="w-full flex justify-between">
      <p>abhialuru</p>
      <ul className="flex gap-6 md:gap-20">
        <li>
          <Link href="mailto:alurabhi9346@gmail.com">Gmail</Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/abhialuru" target="_blank">
            Linkedin
          </Link>
        </li>
        <li>
          <Link href="https://x.com/abhialuru_07" target="_blank">
            X
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
