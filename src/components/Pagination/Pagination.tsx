import _ from "lodash";
import { useEffect, useState } from "react";
import twx from "tailwindcssx";

const SIZE_OF_BLOCK = 3;

export const Pagination = ({ currentPage, numberOfPages, setCurrentPage }) => {
    const [pageNumber, setPageNumber] = useState(currentPage);

    useEffect(() => {
        setPageNumber(currentPage);
    }, [currentPage]);

    let start = currentPage - 1;
    let end = currentPage + 1 + 1;

    if (currentPage <= 1) {
        start = currentPage;
        end += 1;
        if (end > numberOfPages) {
            end = numberOfPages + 1;
        }
    }
    if (currentPage >= numberOfPages) {
        end = numberOfPages + 1;
        start -= 1;
        if (start <= 0) {
            start = 1;
        }
    }
    return (
        <div className="inline-flex text-sm">
            <input
                className="px-2 w-10 h-7 border border-gray-200"
                type="text"
                value={pageNumber}
                onChange={(e) => setPageNumber(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        const value = parseInt(pageNumber);
                        if (isNaN(value)) {
                            setCurrentPage(1);
                        } else {
                            setCurrentPage(
                                pageNumber > numberOfPages
                                    ? numberOfPages
                                    : value < 1
                                    ? 1
                                    : value
                            );
                        }
                    }
                }}
            />
            {currentPage > 1 && (
                <button
                    className={twx({
                        "": [
                            "inline-flex",
                            "justify-center",
                            "items-center",
                            "mx-1",
                            "px-2",
                            "h-7",
                            "bg-gray-100",
                            "cursor-pointer",
                            "rounded-sm",
                        ],
                        hover: ["bg-gray-200"],
                        focus: ["bg-gray-200"],
                    })}
                    onClick={() =>
                        setCurrentPage(
                            currentPage <= 1 ? currentPage : currentPage - 1
                        )
                    }
                >
                    <i className="fas fa-chevron-left" />
                </button>
            )}
            {currentPage > SIZE_OF_BLOCK - 1 &&
                numberOfPages !== SIZE_OF_BLOCK && (
                    <button
                        className={twx({
                            "": [
                                "inline-flex",
                                "justify-center",
                                "items-center",
                                "mx-1",
                                "px-2",
                                "h-7",
                                "bg-gray-100",
                                "cursor-pointer",
                                "rounded-sm",
                                currentPage === 1 && [
                                    "bg-blue-600",
                                    "text-white",
                                    "shadow",
                                ],
                            ],
                            hover: ["bg-gray-200"],
                            focus: [
                                "bg-gray-200",
                                currentPage === 1 && [
                                    "bg-blue-600",
                                    "text-white",
                                    "shadow",
                                ],
                            ],
                        })}
                        onClick={() => setCurrentPage(1)}
                    >
                        {1}
                    </button>
                )}
            {currentPage > SIZE_OF_BLOCK &&
                numberOfPages !== SIZE_OF_BLOCK + 1 && (
                    <div
                        className={twx({
                            "": [
                                "inline-flex",
                                "justify-center",
                                "items-end",
                                "h-7",
                            ],
                        })}
                    >
                        ...
                    </div>
                )}
            {_.range(start, end).map((pageNumber) => (
                <button
                    key={pageNumber}
                    className={twx({
                        "": [
                            "inline-flex",
                            "justify-center",
                            "items-center",
                            "mx-1",
                            "px-2",
                            "h-7",
                            "bg-gray-100",
                            "cursor-pointer",
                            "rounded-sm",
                            currentPage === pageNumber && [
                                "bg-blue-600",
                                "text-white",
                                "shadow",
                            ],
                        ],
                        hover: ["bg-gray-200"],
                        focus: [
                            "bg-gray-200",
                            currentPage === pageNumber && [
                                "bg-blue-600",
                                "text-white",
                                "shadow",
                            ],
                        ],
                    })}
                    onClick={() => setCurrentPage(pageNumber)}
                >
                    {pageNumber}
                </button>
            ))}
            {currentPage + SIZE_OF_BLOCK <= numberOfPages &&
                numberOfPages !== SIZE_OF_BLOCK + 1 && (
                    <div
                        className={twx({
                            "": [
                                "inline-flex",
                                "justify-center",
                                "items-end",
                                "h-7",
                            ],
                        })}
                    >
                        ...
                    </div>
                )}
            {currentPage + SIZE_OF_BLOCK - 1 <= numberOfPages &&
                numberOfPages !== SIZE_OF_BLOCK && (
                    <button
                        className={twx({
                            "": [
                                "inline-flex",
                                "justify-center",
                                "items-center",
                                "mx-1",
                                "px-2",
                                "h-7",
                                "bg-gray-100",
                                "cursor-pointer",
                                "rounded-sm",
                                currentPage === numberOfPages && [
                                    "bg-blue-600",
                                    "text-white",
                                    "shadow",
                                ],
                            ],
                            hover: ["bg-gray-200"],
                            focus: [
                                "bg-gray-200",
                                currentPage === numberOfPages && [
                                    "bg-blue-600",
                                    "text-white",
                                    "shadow",
                                ],
                            ],
                        })}
                        onClick={() => setCurrentPage(numberOfPages)}
                    >
                        {numberOfPages}
                    </button>
                )}
            {currentPage < numberOfPages && (
                <button
                    className={twx({
                        "": [
                            "inline-flex",
                            "justify-center",
                            "items-center",
                            "mx-1",
                            "px-2",
                            "h-7",
                            "bg-gray-100",
                            "cursor-pointer",
                            "rounded-sm",
                        ],
                        hover: ["bg-gray-200"],
                        focus: ["bg-gray-200"],
                    })}
                    onClick={() =>
                        setCurrentPage(
                            currentPage >= numberOfPages
                                ? currentPage
                                : currentPage + 1
                        )
                    }
                >
                    <i className="fas fa-chevron-right" />
                </button>
            )}
        </div>
    );
};
