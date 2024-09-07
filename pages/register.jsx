import Link from "next/link";
import { useAuth } from './context/AuthContext';
import { useRouter } from 'next/router';
import { useState } from 'react';
export default function Register() {
    const { register } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous errors

        if (password !== confirmPassword) {
            setError('Passwords do not match.'); // Set error if passwords don't match
            return;
        }
        try {
            await register(email, password);
            router.push('/login'); // Redirect to login page after successful registration
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="bg-gray-800 p-10 w-96 rounded-lg">
                    <h1 className="text-3xl font-bold mb-6">Register</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-lg font-medium">Email</label>
                            <input
                                type="email"
                                className="bg-gray-700 text-white rounded px-6 py-3 w-full"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-lg font-medium">Password</label>
                            <input
                                type="password"
                                className="bg-gray-700 text-white rounded px-6 py-3 w-full"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-lg font-medium">Confirm Password</label>
                            <input
                                type="password"
                                className="bg-gray-700 text-white rounded px-6 py-3 w-full"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <span style={{ color: 'red' }}>{error}</span>}
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-12 py-4 rounded hover:bg-green-400 w-full"
                        >
                            Register
                        </button>
                    </form>
                    <p className="mt-4 text-center">
                        Already have an account? &nbsp;
                        <Link href="/login" className="text-green-400 hover:underline" >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
