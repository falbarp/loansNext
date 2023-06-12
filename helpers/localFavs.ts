
 const toggleFavorite = (loanId:string) => {
    
    if (typeof window !== 'undefined') {
      const favorites = getFavorites();
      const updatedFavorites = favorites.includes(loanId)
        ? favorites.filter((id: string) => id !== loanId)
        : [...favorites, loanId];
      localStorage.setItem('favs', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    }
    return [];
  };
  
const existInFavorites = ( id: string ): boolean => {

    if ( typeof window === 'undefined' ) return false;
    
    const favs: string[] = JSON.parse( localStorage.getItem('favs') || '[]' );

    return favs.includes( id );
}


const loans = (): string[] => {
    return JSON.parse( localStorage.getItem('favs') || '[]' );
}

const getFavorites = () => {
    if (typeof window !== 'undefined') {

      const favoritesJson = localStorage.getItem('favs');
      if (favoritesJson) {
        return JSON.parse(favoritesJson);
      }
    }
  
    // Return an empty array if no favorites are found
    return [];
  };


export default {
    existInFavorites,
    toggleFavorite,
    loans,
    getFavorites
}