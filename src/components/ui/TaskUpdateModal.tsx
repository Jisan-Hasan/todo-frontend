/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useAppDispatch } from "@/redux/app/hooks";
import {
    useGetTaskQuery,
    useUpdateTaskMutation,
} from "@/redux/features/api/todoApi";
import { unselectTask } from "@/redux/features/task/taskSlice";
import { Label, Modal, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PrimaryButton from "./PrimaryButton";

const TaskUpdateModal = ({ selectedTask }: { selectedTask: string | null }) => {
    
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useAppDispatch();

    function onCloseModal() {
        dispatch(unselectTask());
        setOpenModal(false);
    }

    const { data } = useGetTaskQuery(selectedTask, {
        refetchOnMountOrArgChange: true,
        skip: !!!selectedTask,
    });
    useEffect(() => {
        if (selectedTask) {
            setOpenModal(true);
        } else {
            setOpenModal(false);
        }
    }, [selectedTask]);

    // handle update task
    const { reset, register, handleSubmit, formState } = useForm();

    const [updateTask] = useUpdateTaskMutation();
    const handleUpdateTask: SubmitHandler<any> = (data: any) => {
        toast.loading("Updating task...", { duration: 500 });
        updateTask({ id: selectedTask, data: data })
            .unwrap()
            .then((res) =>
                toast.success(res?.message || "Task updated successfully")
            )
            .catch((err) =>
                toast.error(err?.data?.message || "Something went wrong")
            );
        dispatch(unselectTask());
        reset();
    };

    return (
        <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
                <form onSubmit={handleSubmit(handleUpdateTask)}>
                    <div className="space-y-6">
                        <div>
                            {" "}
                            <div className="mb-2 block">
                                <Label htmlFor="task" value="Your Task" />
                            </div>
                            <TextInput
                                id="task"
                                {...register("title", { required: true })}
                                defaultValue={data?.data?.title}
                                required
                            />
                        </div>

                        <PrimaryButton
                            type="submit"
                            classes="w-full px-8 py-2 mt-4 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
                        >
                            Update Your Task
                        </PrimaryButton>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default TaskUpdateModal;
