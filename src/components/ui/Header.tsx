import { authKey } from '@/constants/storageKey';
import { useAppDispatch } from '@/redux/app/hooks';
import { clearToken } from '@/redux/features/auth/authSlice';
import { removeFromLocalStorage } from '@/utils/local-storage';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const Header = () => {
    const router = useRouter();
    // handle signout
    const dispatch = useAppDispatch();
    const handleSignout = () => {
        removeFromLocalStorage(authKey);
        dispatch(clearToken());
        router.push("/signin");
    };
    return (
        <div className="my-2 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-700">
                        Task Manager
                    </h1>
                    <p className="text-sm text-gray-500">
                        Manage your day to day tasks
                    </p>
                </div>
                <div>
                    <Button color="failure" size="sm" onClick={handleSignout}>
                        Signout
                    </Button>
                </div>
            </div>
    );
};

export default Header;