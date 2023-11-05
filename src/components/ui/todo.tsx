"use client";

import { useAppDispatch } from "@/redux/app/hooks";
import {
    useDeleteTaskMutation,
    useUpdateTaskMutation,
} from "@/redux/features/api/todoApi";
import { selectTask } from "@/redux/features/task/taskSlice";
import toast from "react-hot-toast";
import {
    AiOutlineCheckCircle,
    AiOutlineEdit,
    AiOutlineMinusCircle,
} from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { TbProgressBolt } from "react-icons/tb";

export default function Todo({ todo }: { todo: any }) {
    const dispatch = useAppDispatch();
    const { title, _id: id, status } = todo;
    const color =
        status == "pending"
            ? "text-yellow-500"
            : status === "in-progress"
            ? "text-orange-500"
            : "text-green-500";

    const [deleteTask] = useDeleteTaskMutation();
    const [updateTask] = useUpdateTaskMutation();

    // update task status
    const handleUpdateStatus = (todoId: string, updatedStatus: string) => {
        // check if task is already in the same status
        if (status === updatedStatus) {
            toast.error(`Task already in ${status}`);
            return;
        }
        toast.loading("Updating task...", { duration: 500 });
        // update task
        updateTask({ id: todoId, data: { status: updatedStatus } })
            .unwrap()
            .then((res) => toast.success(res.message))
            .catch((err) =>
                toast.error(err?.data?.message || "Something went wrong")
            );
    };

    // delete task
    const handleDelete = (todoId: any) => {
        toast.loading("Deleting task...", { duration: 500 });
        deleteTask(todoId)
            .unwrap()
            .then((res) => toast.success(res.message))
            .catch((err) =>
                toast.error(err?.data?.message || "Something went wrong")
            );
    };

    // task status icon
    const icon =
        status === "pending" ? (
            <AiOutlineMinusCircle
                className={`flex-shrink-0 h-5 w-5 ml-auto cursor-pointer  ${color}`}
            />
        ) : status === "in-progress" ? (
            <TbProgressBolt
                className={`flex-shrink-0 h-5 w-5 ml-auto cursor-pointer  ${color}`}
            />
        ) : (
            <AiOutlineCheckCircle
                className={`flex-shrink-0 h-5 w-5 ml-auto cursor-pointer  ${color}`}
            />
        );

    return (
        <div>
            <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
                {icon}

                <div
                    className={`select-none flex-1 ${
                        status === "done" && "line-through"
                    }`}
                >
                    {title}
                </div>

                <AiOutlineMinusCircle
                    className={`flex-shrink-0 h-5 w-5 ml-auto cursor-pointer  hover:text-yellow-500`}
                    title="Mark as pending"
                    onClick={() => handleUpdateStatus(id, "pending")}
                />

                <TbProgressBolt
                    className={`flex-shrink-0 h-5 w-5 ml-auto cursor-pointer  hover:text-orange-500`}
                    title="Mark as in-progress"
                    onClick={() => handleUpdateStatus(id, "in-progress")}
                />

                <AiOutlineCheckCircle
                    className={`flex-shrink-0 h-5 w-5 ml-auto cursor-pointer  hover:text-green-500`}
                    title="Mark as done"
                    onClick={() => handleUpdateStatus(id, "done")}
                />

                <AiOutlineEdit
                    className="flex-shrink-0 w-5 h-5 ml-2 cursor-pointer hover:text-red-700"
                    title="Edit"
                    onClick={() => dispatch(selectTask(id))}
                />

                <MdOutlineCancel
                    className="flex-shrink-0 w-5 h-5 ml-2 cursor-pointer hover:text-red-700"
                    title="Delete"
                    onClick={() => handleDelete(id)}
                />
            </div>
        </div>
    );
}
