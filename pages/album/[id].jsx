import { useRouter } from "next/router";
import Link from "next/link";
import HeroDetail from "@/components/HeroDetail";
import { addItemsinCart } from "../../Store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import SingleAlbumCard from "@/components/SingleAlbumCard";

const albums = [
    {
        id: "1",
        name: "Soulful Ragas",
        singer: "Arijit Singh",
        price: 9.99,
        type: "Top Album",
        relatedAlbums: [
            "Melodic Moods",
            "Bollywood Ballads",
            "Romantic Hits",
        ],
    },
    {
        id: "2",
        name: "Classical Essence",
        singer: "Shreya Ghoshal",
        price: 8.99,
        type: "Latest Album",
        relatedAlbums: [
            "Golden Tunes",
            "Eternal Voices",
            "Timeless Melodies",
        ],
    },
    {
        id: "3",
        name: "Hip Hop Desi",
        singer: "Badshah",
        price: 11.99,
        type: "Top Album",
        relatedAlbums: [
            "Urban Desi",
            "Party Anthems",
            "Rap Fever",
        ],
    },
    {
        id: "4",
        name: "Jazz Fusion",
        singer: "Hariharan",
        price: 12.99,
        type: "Latest Album",
        relatedAlbums: [
            "Fusion Beats",
            "Rhythmic Bliss",
            "Classical Jazz",
        ],
    },
    {
        id: "5",
        name: "Pop Magic",
        singer: "Neha Kakkar",
        price: 10.99,
        type: "Top Album",
        relatedAlbums: [
            "Dance Hits",
            "Bollywood Pop",
            "Top 40",
        ],
    },
];

export default function AlbumDetail() {
    const router = useRouter();
    const { id } = router.query;

    const album = albums.find((album) => album.id === id);

    if (!album) {
        return <p>Album not found.</p>;
    }

    const relatedAlbums = album.relatedAlbums.map((relalbum, index) => (
        <SingleAlbumCard title={relalbum} album={album} ></SingleAlbumCard>
    ));

    return (<><HeroDetail album={album}></HeroDetail>
    <div class="container mx-auto p-8 mt-4">
      <h2 class="text-2xl font-bold">Songs</h2>
      <ul class="divide-y divide-gray-700">
        <li class="py-2 flex justify-between items-center">
          <button
            class="material-icons text-green-400 hover:text-green-300 text-lg mx-1"
          >
            play_arrow
          </button>
          <div class="flex-grow text-left ml-4">
            <span class="text-md">Song Title 1</span><br />
            <span class="text-xs text-gray-400">By Singer {album.singer}</span>
          </div>
          <span class="text-xs text-gray-400">3:45</span>
        </li>
      </ul>
</div>
 <div class="container mx-auto p-8 mt-4">
    <h2 class="text-2xl font-bold mb-4">Related Albums</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
   {relatedAlbums}
    
    </div>
  </div>
  </>
    );
}
