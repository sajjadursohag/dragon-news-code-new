import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaRegEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details, tags } =
    news;

  const publishedDate = new Date(news.author.published_date).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm">
      {/* Author + Actions */}
      <div className="flex bg-base-200 items-center justify-between px-5 pt-5">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">{author.name}</h3>

            <p className="text-sm text-gray-400">{publishedDate}</p>
          </div>
        </div>

        <div className="flex gap-4 text-gray-500">
          <button className="hover:text-primary">
            <FaRegBookmark />
          </button>

          <button className="hover:text-primary">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold leading-8 text-gray-800">{title}</h2>

        {/* Image */}
        <figure className="mt-4">
          <img
            src={thumbnail_url}
            alt={title}
            className="h-52 w-full rounded-lg object-cover"
          />
        </figure>

        {/* Details */}
        <div className="mt-4">
          <p className="text-sm leading-6 text-gray-500">
            {details.length > 220 ? `${details.slice(0, 220)}...` : details}
          </p>

          <button className="mt-1 text-sm font-medium text-orange-500 hover:underline">
            Read More
          </button>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <span key={tag} className="badge badge-outline badge-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-base-200 px-5 py-4">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={
                index < rating.number ? "text-orange-400" : "text-gray-300"
              }
            />
          ))}

          <span className="ml-2 text-sm text-gray-500">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaRegEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
