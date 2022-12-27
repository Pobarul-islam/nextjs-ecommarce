import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import Layouts from '../components/Layouts';
import { HiOutlineXCircle } from 'react-icons/hi';
import { Store } from '../utils/Store';
export default function CartScreen() {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return (
    <Layouts title="Shopping Cart">
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {cartItems.leangth === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go Shipping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="m-w-full">
              <thead className="border-b">
                <tr>
                  <th className="px-5 text-left">Item</th>
                  <th className="px-5 text-right">Quantity</th>
                  <th className="px-5 text-right">Price</th>
                  <th className="px-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr className="border-b" key={item.slug}>
                    <td>
                      <Link href={`/product/${item.slug}`}>
                        <span className="flex items-center">
                          <Image
                            src={item.image}
                            alt="image name"
                            width={50}
                            height={50}
                          ></Image>
                          &nbsp;
                          {item.name}
                        </span>
                      </Link>
                    </td>
                    <td className="p-5 text-right">{item.quantity}</td>
                    <td className="p-5 text-right">{item.price}</td>
                    <td className="p-5 text-center">
                      <button>
                        <HiOutlineXCircle></HiOutlineXCircle>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Layouts>
  );
}
