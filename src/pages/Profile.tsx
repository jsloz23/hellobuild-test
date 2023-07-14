import { useProfileViewModel } from '../viewModels/useProfileViewModel'
import ListRepositories from '../components/ListRepositories';



const Profile = () => {
  const {repos, user, handleSearch, searchTerm, handleAddFavorite, favoriteFlag} = useProfileViewModel();

  // Determine the number of columns based on the number of elements
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
    <>
      <div>
        <h1>Repositories of {user}</h1>
      </div>
      <div>
        <input type='text' id='reponame' name='reponame' className='w-full py-2 my-4 rounded-md' onChange={(e) => handleSearch(e.target.value)}/>
      </div>
      {favoriteFlag && (
        <div className='my-4'>
          <h3 className='text-3xl my-2'>Favorites</h3>
          <ListRepositories repos={repos} handleAddFavorite={handleAddFavorite} searchTerm={searchTerm} favorites={true}/>
      </div>
      )}
      <div>
        <h3 className='text-3xl my-2'>My Repositories</h3>
        <ListRepositories repos={repos} handleAddFavorite={handleAddFavorite} searchTerm={searchTerm} favorites={false}/>
      </div>
    </>
  )
}

export default Profile