'use client';

import { cn } from '@/lib/util';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface Props {
    totalPages: number;
}

export default function Pagination({ totalPages }: Props) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    const renderPaginationButtons = () => {
        const buttons = [];
        const visiblePages = 7; // Limit the maximum visible buttons (including Prev & Next)

        const renderEllipsis = (targetPage: number) => (
            <Link
                key={`ellipsis-${targetPage}`}
                href={createPageURL(targetPage)}
                className="border border-gray-300 px-3 py-1 rounded-md mx-1"
            >
                ...
            </Link>
        );

        if (currentPage > 1) {
            buttons.push(
                <Link
                    key="prev"
                    href={createPageURL(currentPage - 1)}
                    className="border border-gray-300 px-3 py-1 rounded-md mr-2"
                >
                    Previous
                </Link>
            );
        }

        // Define range logic
        const range = [];
        if (totalPages <= visiblePages) {
            // If total pages are less than max visible, show all
            for (let i = 1; i <= totalPages; i++) range.push(i);
        } else if (currentPage <= 4) {
            // If near the beginning
            range.push(1, 2, 3, 4, '...');
        } else if (currentPage >= totalPages - 3) {
            // If near the end
            range.push('...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        } else {
            // If in the middle
            range.push('...', currentPage, currentPage + 1, currentPage + 2, '...');
        }

        let activePageIndex = 0;
        if (range.includes(currentPage)) {
            activePageIndex = range.indexOf(currentPage);
        }

        range.forEach((page, index) => {
            if (page === '...') {
                const targetPage = index === 0 ? currentPage - 2 : currentPage + (4 - activePageIndex);
                if (targetPage > 0 && targetPage <= totalPages) {
                    buttons.push(renderEllipsis(targetPage));
                }
            } else {
                buttons.push(
                    <Link
                        key={page}
                        href={createPageURL(page)}
                        className={cn(
                            'border border-gray-300 px-3 py-1 rounded-md mx-1',
                            page === currentPage && 'bg-blue-500 text-white'
                        )}
                    >
                        {page}
                    </Link>
                );
            }
        });

        // Handle Next Button
        if (currentPage < totalPages) {
            buttons.push(
                <Link
                    key="next"
                    href={createPageURL(currentPage + 1)}
                    className="border border-gray-300 px-3 py-1 rounded-md ml-2"
                >
                    Next
                </Link>
            );
        }

        return buttons;
    };

    return (
        <div className="py-5 flex justify-center space-x-2 sticky bottom-0 bg-black w-full">
            {renderPaginationButtons()}
        </div>
    );
}
