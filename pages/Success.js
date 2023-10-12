import React from 'react';
import Link from 'next/link';

const Success = ({}) => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-6xl font-bold pb-20 text-white">
        Thank you for your purchase!
      </h1>

      <Link
        href="/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Success;
