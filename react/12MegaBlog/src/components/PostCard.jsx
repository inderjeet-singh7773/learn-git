import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredimage }) {
  // Agar image nahi hai to placeholder use karo
  const imageUrl = featuredimage
    ? appwriteService.getFilePreview(featuredimage)
    : "https://via.placeholder.com/800x400.png?text=No+Image";

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full flex justify-center mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-xl max-h-60 object-cover"
          />
        </div>
        <h2 className="text-xl font-bold text-center">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
