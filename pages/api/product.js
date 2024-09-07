// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: "1",
      name: "Soulful Ragas",
      singer: "Arijit Singh",
      price: 9.99,
      type: "Top Album",
      relatedAlbums: ["Melodic Moods", "Bollywood Ballads", "Romantic Hits"],
    },
    {
      id: "2",
      name: "Classical Essence",
      singer: "Shreya Ghoshal",
      price: 8.99,
      type: "Latest Album",
      relatedAlbums: ["Golden Tunes", "Eternal Voices", "Timeless Melodies"],
    },
    {
      id: "3",
      name: "Hip Hop Desi",
      singer: "Badshah",
      price: 11.99,
      type: "Top Album",
      relatedAlbums: ["Urban Desi", "Party Anthems", "Rap Fever"],
    },
    {
      id: "4",
      name: "Jazz Fusion",
      singer: "Hariharan",
      price: 12.99,
      type: "Latest Album",
      relatedAlbums: ["Fusion Beats", "Rhythmic Bliss", "Classical Jazz"],
    },
    {
      id: "5",
      name: "Pop Magic",
      singer: "Neha Kakkar",
      price: 10.99,
      type: "Top Album",
      relatedAlbums: ["Dance Hits", "Bollywood Pop", "Top 40"],
    },
  ]);
}
