import React, { FC } from 'react'
import RepositoryCard from './RepositoryCard'

interface ListRepositoriesProps {
    repos: any[];
    searchTerm: string;
    handleAddFavorite: (repo: any) => void;
    favorites: boolean;
}

const ListRepositories: FC<ListRepositoriesProps> = ({repos, searchTerm, handleAddFavorite, favorites}) => {

    let gridClasses = '';
    if (repos.length === 1) {
        gridClasses = 'grid-cols-1';
    } else if (repos.length === 2) {
        gridClasses = 'grid-cols-2';
    } else if (repos.length === 3) {
       gridClasses = 'grid-cols-3';
    } else {
       gridClasses = 'grid-cols-4';
    }

  return (
    <div className={`grid ${gridClasses} gap-4`}>
        {repos && repos.filter(repo => repo.name.includes(searchTerm) && repo.favorite === favorites).map((repo , index) => (
          <RepositoryCard key={index} repo={repo} handleAddFavorite={handleAddFavorite} favorites={favorites}/>
        ))}
      </div>
  )
}

export default ListRepositories