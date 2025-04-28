import React, { useState, useEffect } from 'react';
import './App.css'
function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-600 p-4">
      <div className="text-white font-bold text-xl">Ryan Adidaru</div>
    </nav>
  );
}

function Card({ title, body, image }) {
  return (
    <div className="border rounded-2xl shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
        <p className="text-gray-700 text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function CounterDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`Counter reached a multiple of 10: ${count}`);
    }
  }, [count]);

  return (
    <div className="flex items-center space-x-4 p-4">
      <button onClick={() => setCount(count - 1)} className="px-4 py-2 rounded-2xl shadow-md hover:bg-red-600 bg-red-500 text-white">-</button>
      <span className="text-2xl font-mono">{count}</span>
      <button onClick={() => setCount(count + 1)} className="px-4 py-2 rounded-2xl shadow-md hover:bg-green-600 bg-green-500 text-white">+</button>
      <button onClick={() => setCount(0)} className="px-4 py-2 rounded-2xl shadow-md hover:bg-gray-600 bg-gray-500 text-white">Reset</button>
    </div>
  );
}

export default function App() {
  const data = [
    { userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto", image: "https://picsum.photos/500" },
    { userId: 1, id: 2, title: "qui est esse", body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla", image: "https://picsum.photos/500" },
    { userId: 1, id: 3, title: "ea molestias quasi exercitationem repellat qui ipsa sit aut", body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut", image: "https://picsum.photos/500" },
    { userId: 1, id: 4, title: "eum et est occaecati", body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit", image: "https://picsum.photos/500" },
    { userId: 1, id: 5, title: "nesciunt quas odio", body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque", image: "https://picsum.photos/500" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <CounterDemo />
      <div className="grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map(item => (
          <Card key={item.id} title={item.title} body={item.body} image={item.image} />
        ))}
      </div>
    </div>
  );
}

