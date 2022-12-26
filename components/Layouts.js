import Head from 'next/head';
import Link from 'next/link';

export default function Layouts({children, title}) {
  return (
    <>
      <Head>
        <title>{title ? title + '- mystore' : 'mystore'}</title>
        <meta name="description" content="Ecommarce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between shadow-md items-center px-4">
            <Link href="/">
              <p className="text-lg font-bold"> E-market</p>
            </Link>
            <div>
              <Link href="/cart">
                <span className="p-2">Cart</span>
              </Link>
              <Link href="/login">
                <span className='p-2'>Login</span>
              </Link>
            </div>
          </nav>
        </header>

        <main className='container m-auto mt-4 px-4'>{children}
        </main>

        <footer className='flex h-10 justify-center items-center shadow-inner'>
            <p>Copyright @ 2022 E-market</p>
        </footer>
      </div>
    </>
  );
}
