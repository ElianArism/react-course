export const getGifs = async (category) => {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=8rj1Z0ObHhAAc1swK451kQkAp5lPUqLx&q=${category}&limit=10`;
  const { data } = await (await fetch(apiUrl)).json();
  return data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));
};
