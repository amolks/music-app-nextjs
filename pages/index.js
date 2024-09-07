import AlbumCard from "@/components/AlbumCard";
import MediaControls from "@/components/MediaControls";
import Footer from "@/components/Footer";
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Home() {
  const [albums, setAlbums] = useState([]);
  const router = useRouter();
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlbums(data);
      });
  }, []);

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
  console.log(albums);
  return (
    <>
      <div className="bg-black text-white">
        <main className="container mx-auto p-8 ">
          <Link href="/cart" className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-300 ml-2">
            Cart
          </Link>
          <section className="mb-12 mt-12">
            <h2 className="text-3xl text-green-400 mb-4">Top Albums</h2>

            <div className="grid grid-cols-5 gap-4">
              {albums
                .filter((album) => album.type === "Top Album")
                .map((album, index) => (
                  <AlbumCard key={index} album={album} />
                ))}
            </div>
          </section>
          <section>
            <h2 className="text-3xl text-green-400 mb-4">Latest Albums</h2>
            <div className="grid grid-cols-5 gap-4">
              {albums
                .filter((album) => album.type === "Latest Album")
                .map((album, index) => (
                  <AlbumCard key={index} album={album} />
                ))}
            </div>
          </section>
        </main>
        <Footer></Footer>
        <MediaControls></MediaControls>
      </div>
    </>
  );
}
