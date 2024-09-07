import Footer from "@/components/Footer";
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Settings() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [loading, user, router]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return null;
    }
    return (
        <>
            <div className="bg-black text-white">
                <main className="container mx-auto p-8 ">
                    <section className="mb-12 mt-12">
                        <h2 className="text-3xl text-green-400 mb-4">Settings</h2>
                    </section>
                </main>
                <Footer></Footer>
            </div>
        </>
    );
}
