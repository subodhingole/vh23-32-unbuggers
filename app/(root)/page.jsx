"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchUser } from "../../lib/actions/user.actions";

function Home({ searchParams }) {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    setUser({
      id: 1,
      name: "Subodh",
    });
  }, []);

  if (!user) return null;

  const games = [
    { name: "Game 1", url: "/game1" },
    { name: "Game 2", url: "/game2" },
    { name: "Game 3", url: "/game3" },
    { name: "Game 4", url: "/game4" },
    { name: "Game 5", url: "/game5" },
  ];

  // ... (rest of your component)

  return (
    <div className="text-white">
      <h1>Welcome, Player!</h1>
      <p>Here you can start playing the game you like.</p>
      <div className="mt-4 flex gap-4">
        {games.map((game) => (
          <Link href={game.url} key={game.name}>
            <div className="game-card p-4 cursor-pointer border border-gray-300 transform transition-transform hover:scale-105 hover:shadow-lg">
              <h2>{game.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
