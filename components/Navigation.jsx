import { useSelector } from "react-redux";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from '../pages/context/AuthContext';
import { useRouter } from 'next/router';

const Navigation = () => {
    const [open, setOpen] = useState(false)
    const { logout, user } = useAuth();
    const albumsInCart = useSelector((state) => state.cart);
    const totalAlbumsInCart = albumsInCart.length;
    console.log("🚀 ~ Navigation ~ totalAlbumsInCart:", totalAlbumsInCart)
    const handleLogout = () => {
        logout();
        setOpen(!open)
    };
    return (<header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <Link href="/" className="mr-6"><h1 className="text-2xl">Music Store</h1></Link>


        {/* <!-- Profile Dropdown --> */}

        {user && (<div className="flex items-center">
            {/* <!-- Cart Icon --> */}
            <Link href="/cart" className="mr-6">
                <span className="material-icons"> shopping_cart </span>{totalAlbumsInCart}
            </Link><div className="relative inline-block text-left">
                <button onClick={() => { setOpen(!open) }} type="button" className="inline-flex items-center">
                    <span className="material-icons"> account_circle </span>
                    <span className="ml-2">Profile</span>
                    <span className="material-icons"> arrow_drop_down {open} </span>
                </button>
                {open && (<div
                    style={{ zIndex: 1 }}
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                >
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <Link
                            href="/profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                        >Your Profile</Link>
                        <Link
                            href="/settings"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                        >Settings</Link>
                        <button style={{
                            width: '100%',
                            textAlign: 'left'
                        }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => { handleLogout() }}
                        >Sign out</button>
                    </div>
                </div>)}
            </div> </div>)}


    </header>);
};

export default Navigation;
