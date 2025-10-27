import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold">QuoteApp</Link>
      <Link to="/favorites" className="hover:underline">Favorites</Link>
    </nav>
  );
}
