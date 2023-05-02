const SERVER_URL_USERS = 'https://jsonplaceholder.typicode.com/users';
const SERVER_URL_ALBUMS = 'https://jsonplaceholder.typicode.com/albums?userId=';
const SERVER_URL_PHOTOS = 'https://jsonplaceholder.typicode.com/photos?albumId=';

export const usersFetch = async () => {
  try {
    const users = await fetch(SERVER_URL_USERS);
    return await users.json();
  } catch (error) {
    console.log('Fetch error: ', error);
  }
};

export const albumsFetch = async (url:string|null) => {
  try {
    const albums = await fetch(SERVER_URL_ALBUMS + url);
    return await albums.json();
  } catch (error) {
    console.log('Fetch error: ', error);
  }
};

export const photosFetch = async (url:string|null) => {
  try {
    const photos = await fetch(SERVER_URL_PHOTOS + url);
    return await photos.json();
  } catch (error) {
    console.log('Fetch error: ', error);
  }
};
