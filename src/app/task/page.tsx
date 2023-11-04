"use client";

import AddTodoForm from "@/components/ui/AddTodoForm";
import Todo from "@/components/ui/todo";
import { useAppSelector } from "@/redux/app/hooks";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { MdDoneAll } from "react-icons/md";

const TaskPage = () => {
    const router = useRouter();
    // check if user is logged in
    const { token } = useAppSelector((state) => state.auth);
    // if not, redirect to login page
    if (!token) {
        router.push("/signin");
    }

    // temp data
    const color = "red";
    const completed = false;
    const text = "This is a todo item";

    return (
        <div className="w-full max-w-3xl mx-auto mt-6 shadow-lg rounded-lg p-6 bg-white">
            {/* Header Start */}
            <AddTodoForm />

            <div className="flex justify-between my-4 text-xs text-gray-500">
                <div
                    className="flex space-x-1 cursor-pointer"
                    // onClick={completeHadler}
                >
                    <MdDoneAll className="w-4 h-4" />
                    <span>Complete All Tasks</span>
                </div>
                <div
                    className="cursor-pointer"
                    // onClick={clearHeandler}
                >
                    Clear completed
                </div>
            </div>
            {/* Header End */}

            <hr className="mt-4" />

            {/* Task List Start */}
            <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
                {/* TODO 1 */}
                <Todo todo={{ text: "test", completed: true, color: "red" }} />
                <Todo todo={{ text: "test", completed: true, color: "red" }} />
                <Todo todo={{ text: "test", completed: true, color: "red" }} />
                <Todo todo={{ text: "test", completed: true, color: "red" }} />
                <Todo todo={{ text: "test", completed: true, color: "red" }} />
                {/* TODO 2 */}
                {/* TODO 3 */}
            </div>
            {/* Task List End */}
        </div>
    );
};

export default dynamic(() => Promise.resolve(TaskPage), { ssr: false });
