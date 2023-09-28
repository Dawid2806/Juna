import { Arrow } from "../../Atoms/SVG/Arrow";
import { useState } from "react";
import { useSignOut, useUserData } from "@nhost/react";

export const ProfilComponent = () => {
  const [isOpen, setIsOpen] = useState(false); // lokalny stan przechowujący informację, czy dropdown jest otwarty
  const userData = useUserData();
  const { signOut } = useSignOut();
  return (
    <div className="flex items-center mr-10 lg:ml-0 relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)} // zmienia stan dropdown po kliknięciu
        className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        id="options-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span className="flex items-center justify-between w-full">
          <span className="flex items-center justify-between min-w-0 space-x-3">
            <img
              className="flex-shrink-0 object-cover bg-gray-300 rounded-full w-7 h-7"
              src={userData?.avatarUrl}
              alt=""
            />
          </span>
          <Arrow />
        </span>
      </button>
      {/* Dropdown menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full left-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu-button"
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap "
            role="menuitem"
          >
            Your Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};
