import React from 'react'

type Props = {
    title: string
}

const MovieTitle = ({title}: Props) => {
  return (
    <h3 className='font-semibold'>{title}</h3>
  )
}

export default MovieTitle