export const starLength = (star) =>{
  const stars = [];
  for (let i = 0; i < star; i++) {
    stars.push('⭐')
  }
  return stars;
}

export const formatDate = (dateStr) => {
  return dateStr?.slice(0, 10) || '';
};