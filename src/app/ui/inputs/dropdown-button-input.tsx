
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, QrCodeIcon } from '@heroicons/react/24/outline';

export default function DropdownButtonInput() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative inline-block text-left">
            {/* Button */}
            <button
                onClick={toggleDropdown}
                className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300"
            >
                <QrCodeIcon className="w-6 h-6 text-gray-400" />
                <span className="mx-2">E-Wallet</span>
                <ChevronDownIcon
                    className={`w-5 h-5 text-gray-400 transform ${isOpen ? 'rotate-180' : ''
                        } transition-transform`}
                />
            </button>

            {/* Dropdown List */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg z-10"
                >
                    <ul className="p-2">
                        <li className="p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                            Option 1
                        </li>
                        <li className="p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                            Option 2
                        </li>
                        <li className="p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                            Option 3
                        </li>
                    </ul>
                </motion.div>
            )}
        </div>
  )
}

