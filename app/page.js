import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-center p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
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
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
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
        </a>
      </div>
    </main>
  );
}
