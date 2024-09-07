import Link from "next/link";
import { useAuth } from './context/AuthContext';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
        router.push('/'); // Redirect to the home page after successful login
    };

    return (
        <>  <div className=" h-screen flex justify-center items-center">
            <div className="bg-gray-800 p-10 w-96 rounded-lg">
                <h1 className="text-3xl font-bold mb-6">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-lg font-medium">Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-700 text-white rounded px-6 py-3 w-full" placeholder="Email" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium">Password</label>
                        <input type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} className="bg-gray-700 text-white rounded px-6 py-3 w-full" placeholder="Password" />
                    </div>

                    <button onClick={(e) => { handleSubmit }} className="bg-green-500 text-white px-12 py-4 rounded hover:bg-green-400 w-full">
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account? &nbsp;
                    <Link href="/register" className="text-green-400 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
        </>
    );
}
