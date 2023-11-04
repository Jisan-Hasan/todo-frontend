"use client";

import {
    AiOutlineCheckCircle,
    AiOutlineEdit,
    AiOutlineMinusCircle,
} from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { TbProgressBolt } from "react-icons/tb";

export default function Todo({ todo }: { todo: any }) {
    const { text, id, completed, color } = todo;

    const handleStatusChange = (todoId: any) => {
        // dispatch(toggled(todoId));
    };

    const handleColorChange = (todoId: any, color: any) => {
        // dispatch(colorSelected(todoId, color));
    };

    const handleDelete = (todoId: any) => {
        // dispatch(deleted(todoId));
    };

    return (
        <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div
                className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
                    completed &&
                    "border-green-500 focus-within:border-green-500"
                }`}
            >
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleStatusChange(id)}
                    className="opacity-0 absolute rounded-full"
                />
                {completed && (
                    <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                )}
            </div>

            <div
                className={`select-none flex-1 ${completed && "line-through"}`}
            >
                {text}
            </div>

            <AiOutlineMinusCircle
                className={`flex-shrink-0 h-5 w-5 ml-auto cursor-pointer hover:text-red-500 ${
                    color === "red" && "text-red-500"
                }`}
            />

            <TbProgressBolt
                className={`flex-shrink-0 h-5 w-5 ml-auto cursor-pointer hover:text-red-500 ${
                    color === "red" && "text-red-500"
                }`}
            />

            <AiOutlineCheckCircle
                className={`flex-shrink-0 h-5 w-5 ml-auto cursor-pointer hover:text-red-500 ${
                    color === "red" && "text-red-500"
                }`}
            />

            <AiOutlineEdit className="flex-shrink-0 w-5 h-5 ml-2 cursor-pointer" />

            <MdOutlineCancel className="flex-shrink-0 w-5 h-5 ml-2 cursor-pointer" />
        </div>
    );
}
