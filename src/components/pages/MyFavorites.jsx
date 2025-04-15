import React from 'react';
// import FavNavbar from '../MyfavComponents/FavNavbar';
import FavCard from '../MyfavComponents/FavCard';
import { useFavorite } from '../common/FavoriteContext';

const MyFavorites = () => {
  const { favorites } = useFavorite();

  return (
    <div>
      {/* <FavNavbar/> */}
      {/* {favorites.length > 0 ? (
        favorites.map(property => (
          <FavCard key={property.id} {...property} />
        ))
      ) : (
        <div className="empty-state">
          <p>No favorites added yet</p>
        </div>
      )} */}
        <FavCard {...favorites} />
    </div>
  );
};

export default MyFavorites;