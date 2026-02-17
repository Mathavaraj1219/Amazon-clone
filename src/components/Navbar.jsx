import { HiOutlineLocationMarker } from "react-icons/hi";
import Location from "./Location";
import { useState } from "react";
import AccountDropdown from "./AccountDropdown";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import LanguageDropdown from "./LanguageDropdown";


function Navbar() {

    const [openModal, setOpenModal] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdownLanguage, setShowDropdownLanguage] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");
    const navigate = useNavigate();

  return (

    <div className="sticky top-0 z-50 bg-[#131921] text-white">
      <div className="flex items-center justify-between px-6 py-3">
        
        <h1 className="text-2xl font-bold text-yellow-400 cursor-pointer">
          amazon.clone
        </h1>

        <div 
        onClick={() => setOpenModal(true)}
        className="flex items-center gap-1 text-sm cursor-pointer hover:border border-gray-500 px-2 py-1 rounded">
          <span><HiOutlineLocationMarker className="text-xl" /></span>
          <div>
            <p className="text-xs">Delivering to Chennai</p>
            <p className="font-bold">Update Location</p>
          </div>
        </div>

        <Location
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />

        <div className="flex w-1/2">
          <input
            type="text"
            placeholder="Search Amazon.clone"
            className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
          />
          <button className="bg-yellow-400 px-4 rounded-r-md text-black font-semibold">
            Search
          </button>
        </div>

        <div className="flex gap-6 text-sm hover:border border-gray-500 px-1 py-1 rounded cursor-pointer"
            onMouseEnter={() => setShowDropdownLanguage(true)}
            onMouseLeave={() => setShowDropdownLanguage(false)}
        >
            <p>{selectedLanguage}</p>
            {showDropdownLanguage && <LanguageDropdown selectedLanguage={selectedLanguage} setSelectedLanguage= {setSelectedLanguage} />}
        </div>

      <div  onClick={() => navigate("/signin")}
        className="flex gap-6 text-sm hover:border border-gray-500 px-2 py-1 rounded cursor-pointer"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
        >
          <div>
            <p>Hello, Sign in</p>
            <p className="font-bold">Account & Lists</p>
          </div>
          {showDropdown && <AccountDropdown />}
        </div>

      <div className="text-sm hover:border border-gray-500 px-2 py-1 rounded cursor-pointer">
            <p>Returns</p>
            <p className="font-bold">& Orders</p>
      </div>

      <div
        className="relative flex items-center cursor-pointer hover:border border-white px-2 py-1 rounded"
      >
        <FaShoppingCart className="text-2xl" />
        <p className="ml-2 font-bold text-sm">Cart</p>
      </div>
     </div>
    </div>
  );
}

export default Navbar;
