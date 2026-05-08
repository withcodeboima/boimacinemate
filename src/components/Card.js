import React from 'react'
import { Link } from "react-router-dom";
import Backup from "../assets/image/backup.png"

const Card = ({ movie }) => {

  const { id, original_title, overview, poster_path } = movie;

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backup;

  return (

    <div className="w-full max-w-sm mt-20 mx-auto bg-neutral-primary-soft border border-default rounded-lg shadow-md overflow-hidden">

      <Link to={`/movies/${id}`}>
        <img
          className="w-full h-[450px] object-cover"
          src={image}
          alt={original_title}
        />
      </Link>

      <div className="p-4 text-center">

        <Link to={`/movies/${id}`}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>

        <p className="text-sm text-gray-700 dark:text-gray-400 line-clamp-3">
          {overview}
        </p>

      </div>

    </div>

  )
}

export default Card