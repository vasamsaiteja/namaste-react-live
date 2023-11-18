export const filterData = (serachInput, restaurants) => {
  return restaurants.filter((item) =>
    item?.info?.name.toLowerCase().includes(serachInput.toLowerCase())
  );
};
