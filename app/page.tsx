import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <h1 className="text-6xl font-bold text-center">Welcome to NextJS</h1>
      <p className="text-2xl text-center">
        Get started by editing <code className="text-sm">pages/index.js</code>
      </p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
    </div>
  );
}
