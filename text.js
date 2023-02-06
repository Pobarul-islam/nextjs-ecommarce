// password: xe4cCCgxr4RnxbH5
// name: nextjs-ecommarce
<nav className="flex h-12 navbar bg-base-100  justify-between shadow-md items-center px-4">
  <Link href="/">
    <p className="text-lg font-bold"> E-market</p>
  </Link>
  <span>
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
    {status === 'loading' ? (
      'Loading'
    ) : session?.user ? (
      <Menu as="div" className="relative inline-block">
        <Menu.Button className="text-blue-600">{session.user.name}</Menu.Button>
        <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
          <Menu.Item>
            <DropdownLink className="dropdown-link" href="/profile">
              Profile
            </DropdownLink>
          </Menu.Item>
          <Menu.Item>
            <DropdownLink className="dropdown-link" href="/order-history">
              Order History
            </DropdownLink>
          </Menu.Item>
          <Menu.Item>
            <a className="dropdown-link" href="#" onClick={logoutClickHandler}>
              Logout
            </a>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    ) : (
      <Link href="/login">
        <span className="p-2">Login</span>
      </Link>
    )}
  </span>
</nav>;
