import { FaBars, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import AllMenu from "./AllMenu";
import { useNavigate } from "react-router-dom";


function SubNavbar() {
    const [showAllDropdown, setShowAllDropdown] = useState(false);
    const navigate = useNavigate();


  return (
    <div className="bg-gray-800 text-white text-sm">

      <div className="flex items-center gap-6 px-4 py-2 overflow-x-auto whitespace-nowrap">

        <div onClick={() => setShowAllDropdown(!showAllDropdown)}
          className="flex items-center gap-2 hover:border border-white px-2 py-1 cursor-pointer">
          <FaBars />
          <span className="font-semibold">All</span>
          {showAllDropdown && <AllMenu showAllDropdown={showAllDropdown}/>}
        </div>

        <p className="hover:border border-white px-2 py-1 cursor-pointer">Fresh</p>
        <p className="hover:border border-white px-2 py-1 cursor-pointer">MX Player</p>
        <p className="hover:border border-white px-2 py-1 cursor-pointer">Sell</p>
        <p className="hover:border border-white px-2 py-1 cursor-pointer">Bestsellers</p>
        <p className="hover:border border-white px-2 py-1 cursor-pointer">Today's Deals</p>
        <p className="hover:border border-white px-2 py-1 cursor-pointer">Mobiles</p>
        <p className="hover:border border-white px-2 py-1 cursor-pointer">Customer Service</p>
        <p className="hover:border border-white px-2 py-1 cursor-pointer">New Releases</p>
        <p className="hover:border border-white px-2 py-1 cursor-pointer">Fashion</p>

        <div className="flex items-center gap-1 hover:border border-white px-2 py-1 cursor-pointer">
          Prime
          <FaChevronDown size={10} />
        </div>

        <p className="hover:border border-white px-2 py-1 cursor-pointer">Amazon Pay</p>
        <p className="hover:border border-white px-2 py-1 cursor-pointer">Electronics</p>

        <p onClick={() => navigate("/code")}
        className="hover:border border-white px-2 py-1 cursor-pointer">
          Code
        </p>

      </div>
    </div>
  );
}

export default SubNavbar;
