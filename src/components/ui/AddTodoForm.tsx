import { useAddTaskMutation } from "@/redux/features/api/todoApi";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiTask } from "react-icons/bi";
import { BsPlusCircle } from "react-icons/bs";

const AddTodoForm = () => {
    const { register, handleSubmit, reset } = useForm();

    const [addTask] = useAddTaskMutation();

    const onSubmit: SubmitHandler<any> = (data: any) => {
        toast.loading("Adding todo...", { duration: 500 });
        addTask(data)
            .unwrap()
            .then((res) => {
                toast.success(res?.message);
            })
            .catch((err) => {
                toast.error(err?.data?.message || "Something went wrong");
            });
        reset();
    };

    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={handleSubmit(onSubmit)}
            >
                <BiTask className="w-6 h-6" />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500 focus:ring-0"
                    {...register("title", { required: true })}
                    required
                />
                <button type="submit" className={`appearance-none w-8 h-8`}>
                    <BsPlusCircle className="w-6 h-6" />
                </button>
            </form>
        </div>
    );
};

export default AddTodoForm;
