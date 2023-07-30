import React from 'react';
import loginHero from '../../assets/content-hero.png';
import Logo from '../Logo';
import { toast } from 'react-hot-toast';
import uuid from '../util/uuid';

function Login({ set: setAuth }: { set: React.Dispatch<React.SetStateAction<string | undefined>> }) {

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const { username, password } = ((e.target as HTMLFormElement).elements as unknown as { [key: string]: HTMLInputElement });

        const user = username.value.trim();
        const pass = password.value.trim();

        if (!user || !pass) return toast.error("Enter username or password...");

        if (user !== import.meta.env.VITE_USERNAME || pass !== import.meta.env.VITE_PASSWORD) return toast.error("Username or password doesn't match.");

        setAuth(uuid());
    }

    return (
        <div className="flex w-full h-screen justify-center items-center">
            <form className="w-full max-w-5xl flex flex-nowrap gap-5 p-5 bg-[#fff7] backdrop-blur shadow-lg rounded-3xl" onSubmit={handleSubmit}>
                <div className="flex-1 max-w-xs">
                    <img src={loginHero} alt="Login Hero" className="rounded-3xl" />
                </div>
                <div className="flex-5 max-w-md mx-auto min-w-[300px]">
                    <div className="flex justify-center"><Logo /></div>
                    <fieldset className="my-10 w-full">
                        <legend className="mb-3 font-bold">Username</legend>
                        <input type="text" className="bg-white rounded shadow-lg w-full p-3" placeholder="Username" name="username" id="username" />
                    </fieldset>
                    <fieldset className="my-10 w-full">
                        <legend className="mb-3 font-bold">Password</legend>
                        <input type="password" className="bg-white rounded shadow-lg w-full p-3" placeholder="Password" name="password" id="password" />
                    </fieldset>
                    <div className="flex justify-center">
                        <button type="submit" className="rounded-lg bg-[#212029] hover:bg-black hover:shadow-[0_0_0_3px_#0ff] transition-all text-white px-20 py-3">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
