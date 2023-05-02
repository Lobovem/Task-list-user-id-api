import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { albumsFetch } from './api';
import s from './style.module.scss';
import { IAlbums } from '../types/types';

export const ListAlbums = () => {
  const [albums, setAlbums] = useState<IAlbums[]>([]);
  const [loadingAlbums, setLoadingAlbums] = useState(true);
  const [params] = useSearchParams();
  const userId = params.get('userId');

  useEffect(() => {
    albumsFetch(userId)
      .then(setAlbums)
      .then(() => setLoadingAlbums(false));
  }, [userId]);

  if (loadingAlbums) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.albums}>
      {albums.map((album) => (
        <div key={album.id} className={s.albums__item}>
          {album.title}
          <Link to={`/listFotos?albumId=${album.id}`} value={album.id} className={s.table__button}>
            Photos
          </Link>
        </div>
      ))}
    </div>
  );
};
