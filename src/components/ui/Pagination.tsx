"use client";

import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { setPage } from "@/redux/features/filter/filterSlice";
import { Pagination } from "flowbite-react";

const PaginationComponent = ({ total }: { total: number }) => {
    const dispatch = useAppDispatch();
    const { page } = useAppSelector((state) => state.filter);

    const onPageChange = (page: number) => dispatch(setPage(page));

    return (
        <div className="flex overflow-x-auto sm:justify-center mt-3">
            <Pagination
                currentPage={page}
                totalPages={total}
                onPageChange={onPageChange}
                showIcons
            />
        </div>
    );
};

export default PaginationComponent;
