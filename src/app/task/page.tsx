"use client";

import AddTodoForm from "@/components/ui/AddTodoForm";
import PaginationComponent from "@/components/ui/Pagination";
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

    // get filter data from redux store
    const { searchTerm, status, limit, page } = useAppSelector(
        (state) => state.filter
    );

    // prepare search query
    const query: Record<string, any> = {};
    if (!!searchTerm) {
        query["searchTerm"] = searchTerm;
    }
    if (!!status) {
        query["status"] = status;
    }
    if (!!limit) {
        query["limit"] = limit;
    }
    if (!!page) {
        query["page"] = page;
    }

    const { data } = useGetTasksQuery({ ...query });
    const todos = data?.data || [];
    const meta = data?.meta || { total: 1, limit: 10, page: 1 };

    const totalPages = Math.ceil(meta?.total / meta?.limit) || 1;

    const { selectedTask } = useAppSelector((state) => state.task);

    return (
        <div className="w-full max-w-3xl mx-auto mt-6 shadow-lg rounded-lg p-6 bg-white">
            {/* Add task form */}
            <AddTodoForm />

            {/* task filter */}
            <TaskFilterSection />

            <hr className="mt-4" />

            {/* Task List Start */}
            <div className="mt-2 text-gray-700 text-sm max-h-[700px] overflow-y-auto">
                {todos.map((todo: any) => (
                    <Todo key={todo._id} todo={todo} />
                ))}
            </div>
            {/* Task List End */}

            <hr className="mt-4" />

            {/* Pagination  */}
            <PaginationComponent total={totalPages} />

            {/* Task Update Modal */}
            {selectedTask && <TaskUpdateModal selectedTask={selectedTask} />}
        </div>
    );
};

export default dynamic(() => Promise.resolve(TaskPage), { ssr: false });
