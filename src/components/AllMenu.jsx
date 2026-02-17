import { FaTimes, FaChevronRight, FaUserCircle } from "react-icons/fa";

function AllMenu(showAllDropdown) {

  return (
    <div className="relative text-black">
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ${
          showAllDropdown ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="bg-gray-800 text-white flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <FaUserCircle size={22} />
            <span className="font-semibold text-lg">Hello, sign in</span>
          </div>

          <FaTimes
            className="cursor-pointer"
            size={18}
          />
        </div>

        <div className="overflow-y-auto h-[calc(100%-64px)] p-4 space-y-6">

          <div>
            <h2 className="font-bold text-lg mb-2">Trending</h2>
            <p className="menu-item ml-2 mb-2">Bestsellers</p>
            <p className="menu-item ml-2 mb-2">New Releases</p>
            <p className="menu-item ml-2 mb-2">Movers and Shakers</p>
          </div>

          <hr />

          <div>
            <h2 className="font-bold text-lg mb-2">
              Digital Content and Devices
            </h2>
            <MenuArrow text="Echo & Alexa" />
            <MenuArrow text="Fire TV" />
            <MenuArrow text="Kindle E-Readers & eBooks" />
            <MenuArrow text="Audible Audiobooks" />
            <MenuArrow text="Amazon Prime Video" />
            <MenuArrow text="Amazon Prime Music" />
          </div>

          <hr />

          <div>
            <h2 className="font-bold text-lg mb-2">Shop by Category</h2>
            <MenuArrow text="Mobiles, Computers" />
            <MenuArrow text="TV, Appliances, Electronics" />
            <MenuArrow text="Men's Fashion" />
            <MenuArrow text="Women's Fashion" />
          </div>

          <hr />
          <div>
            <h2 className="font-bold text-lg mb-2">Programs & Features</h2>
            <MenuArrow text="Gift Cards & Mobile Recharges" />
            <p className="menu-item ml-2 mb-2">Amazon Launchpad</p>
            <p className="menu-item ml-2 mb-2">Amazon Business</p>
            <p className="menu-item ml-2 mb-2">Handloom and Handicrafts</p>
          </div>

          <hr />

          <div>
            <h2 className="font-bold text-lg mb-2">Help & Settings</h2>
            <p className="menu-item ml-2 mb-2">Your Account</p>
            <p className="menu-item ml-2 mb-2">Customer Service</p>
            <p className="menu-item ml-2 mb-2">Sign in</p>
          </div>

        </div>
      </div>
    </div>
  );
}

function MenuArrow({ text }) {
  return (
    <div className="flex justify-between items-center py-2 cursor-pointer hover:bg-gray-100 px-2 rounded">
      <span>{text}</span>
      <FaChevronRight size={14} />
    </div>
  );
}

export default AllMenu;
