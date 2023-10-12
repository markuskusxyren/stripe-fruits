'use client';

import Image from 'next/image';
import checkout from '../Checkout.js';

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-center p-24">
      <header className="mb-32">
        <h1 className="text-6xl font-bold text-center">Welcome to my store</h1>
        <p className="mt-3 text-center text-gray-500">Buy my fruit</p>
      </header>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <button
          onClick={() => {
            checkout({
              lineItems: [
                {
                  price: 'price_1O02SyKGX3ntx2l1yHNxyQrO',
                  quantity: 1,
                },
              ],
            });
          }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <div className="flex flex-col items-center justify-center m-5">
            <Image
              src="/images/apple.jpg"
              alt="apple"
              width={300}
              height={300}
            />
          </div>
          <p className={`text-center text-sm opacity-50`}>Buy my apple</p>
        </button>

        <button
          onClick={() => {
            checkout({
              lineItems: [
                {
                  price: 'price_1O02UBKGX3ntx2l167vLtK6c',
                  quantity: 1,
                },
              ],
            });
          }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        >
          <div className="flex flex-col items-center justify-center m-5">
            <Image
              src="/images/orange.jpg"
              alt="orange"
              width={300}
              height={300}
            />
          </div>
          <p className={`text-center text-sm opacity-50`}>Buy my orange</p>
        </button>
      </div>
    </main>
  );
}
