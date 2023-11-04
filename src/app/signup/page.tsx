"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Spinner from "@/components/ui/Spinner";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SignupPage = () => {
    const [loading, setLoading] = useState(false);
    const { register, formState, reset } = useForm();
    const { errors } = formState;

    const onSubmit: SubmitHandler<any> = (data) => {
        console.log(data);
    };
    return (
        <div className="max-w-lg mx-auto mt-10  md:mt-14 lg:mt-20 bg-gray-100 px-12 py-14 rounded-xl divide-y-2">
            <h3 className="text-3xl font-bold mb-5 text-center">Sign Up</h3>
            <Form submitHandler={onSubmit}>
                <FormInput name="name" label="Name" required />
                <FormInput name="email" label="Email" required />
                <FormInput name="password" type="password" label="Password" required />
                
                {/* Signup button */}
                <PrimaryButton
                    type="submit"
                    classes="w-full px-8 py-3 mt-4 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
                >
                    {loading ? <Spinner /> : "Sign Up"}
                </PrimaryButton>

                <div className="mt-2 mb-3">
                    <div className="mb-2 text-sm block">
                        Already have any account?{" "}
                        <Link href="/signin" className="text-sm text-blue-500">
                            Sign In
                        </Link>
                    </div>
                </div>
            </Form>
            <div>
                <h4 className="mt-3 text-center text-green-400">
                    Sign In With Social Account
                </h4>
                <div className="flex justify-center gap-12 mt-4">
                    <FaGoogle size={25} />
                    <FaFacebook size={25} />
                    <FaGithub size={25} />
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
