import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "./Pagination";

export default {
    title: "Design System V2/Pagination",
} as Meta;

const PaginationExample = ({ numberOfPages }) => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div>
            <div className="w-10 inline-flex">{numberOfPages}</div>
            <Pagination
                numberOfPages={numberOfPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export const Example: Story = () => {
    return (
        <div className="space-y-2">
            <div className="space-x-2">
                <PaginationExample numberOfPages={20} />
            </div>
            <div className="space-x-2">
                <PaginationExample numberOfPages={1} />
            </div>
            <div className="space-x-2">
                <PaginationExample numberOfPages={2} />
            </div>
            <div className="space-x-2">
                <PaginationExample numberOfPages={3} />
            </div>
            <div className="space-x-2">
                <PaginationExample numberOfPages={4} />
            </div>
            <div className="space-x-2">
                <PaginationExample numberOfPages={5} />
            </div>
            <div className="space-x-2">
                <PaginationExample numberOfPages={6} />
            </div>
        </div>
    );
};
