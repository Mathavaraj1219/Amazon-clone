function AccountDropdown() {
  return (
    <div className="absolute right-0 mt-12 w-[500px] bg-white text-black rounded-md shadow-xl border z-50">

      <div className="p-4 border-b text-center">
        <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-full font-medium w-full">
          Sign in
        </button>
        <p className="text-sm mt-2">
          New customer?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Start here.
          </span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 p-6">

        <div>
          <h3 className="font-semibold mb-3">Your Lists</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="hover:text-orange-500 cursor-pointer">Create a Wish List</li>
            <li className="hover:text-orange-500 cursor-pointer">Wish from Any Website</li>
            <li className="hover:text-orange-500 cursor-pointer">Baby Wishlist</li>
            <li className="hover:text-orange-500 cursor-pointer">Discover Your Style</li>
            <li className="hover:text-orange-500 cursor-pointer">Explore Showroom</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Your Account</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="hover:text-orange-500 cursor-pointer">Your Account</li>
            <li className="hover:text-orange-500 cursor-pointer">Your Orders</li>
            <li className="hover:text-orange-500 cursor-pointer">Your Wish List</li>
            <li className="hover:text-orange-500 cursor-pointer">Keep shopping for</li>
            <li className="hover:text-orange-500 cursor-pointer">Your Recommendations</li>
            <li className="hover:text-orange-500 cursor-pointer">Your Prime Membership</li>
            <li className="hover:text-orange-500 cursor-pointer">Your Prime Video</li>
            <li className="hover:text-orange-500 cursor-pointer">Your Subscribe & Save Items</li>
            <li className="hover:text-orange-500 cursor-pointer">Memberships & Subscriptions</li>
            <li className="hover:text-orange-500 cursor-pointer">Your Seller Account</li>
            <li className="hover:text-orange-500 cursor-pointer">Manage Your Content and Devices</li>
            <li className="hover:text-orange-500 cursor-pointer">Register for a free Business Account</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default AccountDropdown;
