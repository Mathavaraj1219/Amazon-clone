import { useState } from "react";
import { IoClose } from "react-icons/io5";

function LocationModal({ isOpen, onClose }) {

  const [pincode, setPincode] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={onClose}
      ></div>

      <div className="relative bg-white w-[400px] rounded-lg shadow-lg z-50">
        
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg text-black font-semibold">Choose your location</h2>
          <IoClose
            className="text-2xl text-black cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="px-6 py-4">
          <p className="text-sm text-gray-600 mb-4">
            Select a delivery location to see product availability and delivery options
          </p>

          <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-full font-medium mb-4">
            Sign in to see your addresses
          </button>

          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">
              or enter an Indian pincode
            </span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter pincode"
              className="flex-1 text-black Sborder rounded-md px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="border px-4 rounded-full text-black bg-gray-200 hover:bg-gray-400">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationModal;
