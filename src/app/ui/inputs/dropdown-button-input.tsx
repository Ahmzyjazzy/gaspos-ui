import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { DropdownSelectOption } from '@/types';
import { cn } from '@/lib/util';
import { iconLibrary } from '@/constants';

interface Props {
    options: DropdownSelectOption[];
    defaultValue: DropdownSelectOption;
    onSelect: (option: DropdownSelectOption) => void;
}

export default function DropdownButtonInput({ defaultValue, options, onSelect }: Props) {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<DropdownSelectOption>(defaultValue);

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (option: DropdownSelectOption) => {
        setSelectedOption(option);
        setIsOpen(false);
        if(onSelect && typeof onSelect === 'function') onSelect(option);
    };

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            {/* Button */}
            <button
                onClick={toggleDropdown}
                className="flex items-center justify-between px-4 py-2 bg-pos-input-light text-white rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300"
            >
                {iconLibrary[selectedOption?.value]}
                <span className="mx-2">{selectedOption?.name}</span>
                <ChevronDownIcon
                    className={cn(
                        `w-5 h-5 text-gray-400 transform transition-transform`,
                        isOpen && 'rotate-180'
                    )}
                />
            </button>

            {/* Dropdown List */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute right-0 mt-2 w-48 bg-pos-input-light text-white rounded-lg shadow-lg z-10"
                >
                    <ul className="p-2">
                        {options?.map((option: DropdownSelectOption) => (
                            <li
                                key={option.value}
                                onClick={() => handleSelect(option)}
                                className="p-2 rounded-md hover:bg-pos-input-dark transition-colors duration-200 cursor-pointer flex gap-2 items-center"
                            >
                                {iconLibrary[option?.value]}{option.name}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    )
}

