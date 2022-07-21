import React from "react";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-[50%] translate-x-[-50%] p-6 text-sm text-gray-600 whitespace-nowrap">
      <p> Copyright &copy; {new Date().getFullYear()} Sahand Ghavidel</p>
    </footer>
  );
}
