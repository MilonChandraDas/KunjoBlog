import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage, slug }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-200 rounded-xl p-3" key={slug}>
        <div className="w-full justify-center mb-4">
          <img
            src={service.getImagePreview(featuredImage)}
            alt={title}
            className="rounded-xl h-48 w-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
