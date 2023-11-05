import { useDebounced } from "@/hooks/debounce";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { setSearchTerm, setStatus } from "@/redux/features/filter/filterSlice";
import { TextInput } from "flowbite-react";
import { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { GoTasklist } from "react-icons/go";
import { TbProgressBolt } from "react-icons/tb";

const TaskFilterSection = () => {
    const dispatch = useAppDispatch();
    const { searchTerm, status } = useAppSelector((state) => state.filter);
    const [search, setSearch] = useState("");

    const debouncedTerm = useDebounced({
        searchQuery: search,
        delay: 600,
    });

    if (!!debouncedTerm) {
        dispatch(setSearchTerm(debouncedTerm));
    } else {
        dispatch(setSearchTerm(""));
    }

    return (
        <div className="flex justify-between items-center my-4 text-sm text-gray-500">
            <div
                className="flex items-center space-x-1 cursor-pointer"
                // onClick={completeHadler}
            >
                <div
                    className={`flex gap-1 items-center hover:text-purple-500 ${
                        status === "" && "text-purple-500"
                    }`}
                    onClick={() => dispatch(setStatus(""))}
                >
                    <GoTasklist className={`h-4 w-4 `} />
                    <span>All</span>
                </div>
                <span>|</span>
                <div
                    className={`flex gap-1 items-center hover:text-yellow-500 ${
                        status === "pending" && "text-yellow-500"
                    }`}
                    onClick={() => dispatch(setStatus("pending"))}
                >
                    <AiOutlineMinusCircle className={`h-4 w-4 `} />
                    <span>Pending</span>
                </div>
                <span>|</span>
                <div
                    className={`flex gap-1 items-center hover:text-orange-500 ${
                        status === "in-progress" && "text-orange-500"
                    }`}
                    onClick={() => dispatch(setStatus("in-progress"))}
                >
                    <TbProgressBolt className={`h-4 w-4 `} />
                    <span>In Progress</span>
                </div>
                <span>|</span>
                <div
                    className={`flex gap-1 items-center hover:text-green-500 ${
                        status === "done" && "text-green-500"
                    }`}
                    onClick={() => dispatch(setStatus("done"))}
                >
                    <AiOutlineCheckCircle className={`h-4 w-4 `} />
                    <span>Done</span>
                </div>
            </div>
            <div>
                <TextInput
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                />
            </div>
        </div>
    );
};

export default TaskFilterSection;
