import React from 'react';
import NavBar from "@/components/NavBar";

// Mock data for the purpose of this example
const posts = [
  { id: 1, title: 'My First Reflection', content: 'This is the content of my first reflection...', imageUrl: 'url-to-image1.jpg' },
  { id: 2, title: 'My Second Reflection', content: 'This is the content of my second reflection...', imageUrl: 'url-to-image2.jpg' },
  // Add more posts here
];

const Reflections = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="max-w-4xl p-5 mx-auto">
        <h1 className="my-10 text-4xl font-bold text-center">Reflections</h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {posts.map(post => (
            <div key={post.id} className="overflow-hidden bg-white rounded-lg shadow-md">
              <img src={post.imageUrl} alt={post.title} className="w-full h-auto" />
              <div className="p-5">
                <h2 className="mb-2 text-2xl font-bold">{post.title}</h2>
                <p className="text-gray-700">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reflections;
