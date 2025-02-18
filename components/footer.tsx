import React from "react";
import Link from "next/link"; // For Next.js routing

export default function Footer() {

  return (
    <footer className="px-4 mb-10 text-center text-gray-500">
      <small className="block mt-5 mb-2 text-xs">
        Made with 💛 by Ram| &copy; {new Date().getFullYear()} Ram. All rights
        reserved.
      </small>
    </footer>
  );
}
