 export const filteredData = (searchText) => {
    const filterData = allRestaurent.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    return filterData;
  };