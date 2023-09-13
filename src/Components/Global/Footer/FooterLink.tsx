import Link from "next/link";
import React from "react";

export const FooterLink = () => {
  return (
    <li>
      <Link
        className="text-gray-700 transition hover:text-gray-700/75"
        href="/"
      >
        About
      </Link>
    </li>
  );
};
