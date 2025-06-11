import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 4 }}
      className="w-full flex justify-between"
    >
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
    </motion.nav>
  );
}

export default Navbar;
