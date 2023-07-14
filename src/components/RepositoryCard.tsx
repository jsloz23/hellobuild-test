import React, { FC } from 'react'

interface RepositoryCardProps {
    repo: any
    handleAddFavorite: (repo: any) => void
    favorites: boolean
}

const RepositoryCard: FC<RepositoryCardProps> = ({repo, handleAddFavorite, favorites}) => {
  const dateObject = new Date(repo.lastUpdate);

  const month = dateObject.getMonth() + 1; 
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();


  const formattedDate = `${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}-${year}`;

  return (
    <div className='w-72 h-40 flex  flex-col items-center rounded-md bg-gray-600'>
        <h3 className='my-1'>{repo.name}</h3>
        <h4 className='my-1'>{repo.visibility}</h4>
        <p className='my-1'>{formattedDate}</p>
        {!favorites && (
          <button className='bg-green-500 my-1' onClick={() => handleAddFavorite(repo)}>Add to favorites</button>
        )}
    </div>
  )
}

export default RepositoryCard