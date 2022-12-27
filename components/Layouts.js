import Head from 'next/head';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';

export default function Layouts({ children, title }) {
    const {state, dispatch} = useContext(Store)
    const {cart} = state;
    const [cartItemsCount, setCartItemsCount] = useState(0);
    useEffect(()=>{
      setCartItemsCount(cart.cartItems.reduce((a, c)=>a + c.quantity, 0))
    },[cart.cartItems]);
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
                <span className="p-2">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </span>
              </Link>
              <Link href="/login">
                <span className="p-2">Login</span>
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright @ 2022 E-market</p>
        </footer>
      </div>
    </>
  );
}
