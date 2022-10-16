import React from 'react'

type Props = {
    rating: number
}

const MovieRating = ({rating}: Props) => {
  return (
    <p className="flex gap-1 text-sm font-light" aria-label="Rating"><span className="text-yellow-500" aria-hidden="true">★</span>{`${rating}/5`}</p>
  )
}

export default MovieRating