"use client";

import AddTodoForm from "@/components/ui/AddTodoForm";
import TaskFilterSection from "@/components/ui/TaskFilterSection";
import TaskUpdateModal from "@/components/ui/TaskUpdateModal";
import Todo from "@/components/ui/todo";
import { useAppSelector } from "@/redux/app/hooks";
import { useGetTasksQuery } from "@/redux/features/api/todoApi";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const TaskPage = () => {
    const router = useRouter();
    // check if user is logged in
    const { token } = useAppSelector((state) => state.auth);
    // if not, redirect to login page
    if (!token) {
        router.push("/signin");
    }

    const query: Record<string, any> = {};

    // get filter data from redux store
    const { searchTerm, status } = useAppSelector((state) => state.filter);

    if (!!searchTerm) {
        query["searchTerm"] = searchTerm;
    }
    if (!!status) {
        query["status"] = status;
    }

    // console.log(query);

    const { data } = useGetTasksQuery({ ...query });
    const todos = data?.data || [];

    // temp data
    const color = "red";
    const completed = false;
    const text = "This is a todo item";

    const { selectedTask } = useAppSelector((state) => state.task);

    return (
        <div className="w-full max-w-3xl mx-auto mt-6 shadow-lg rounded-lg p-6 bg-white">
            <AddTodoForm />

            <TaskFilterSection />

            <hr className="mt-4" />

            {/* Task List Start */}
            <div className="mt-2 text-gray-700 text-sm max-h-[700px] overflow-y-auto">
                {todos.map((todo: any) => (
                    <Todo key={todo._id} todo={todo} />
                ))}
            </div>
            {/* Task List End */}

            {/* Task Update Modal */}
            {selectedTask && <TaskUpdateModal selectedTask={selectedTask} />}
        </div>
    );
};

export default dynamic(() => Promise.resolve(TaskPage), { ssr: false });
