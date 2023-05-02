import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { photosFetch } from './api';
import { IPhotos } from '../types/types';
import s from './style.module.scss';

export const ListFotos = () => {
  const [photos, setPhotos] = useState<IPhotos[]>([]);
  const [loadingPhotos, setLoadingPhotos] = useState(true);
  const [params] = useSearchParams();
  const albumId = params.get('albumId');

  useEffect(() => {
    photosFetch(albumId)
      .then(setPhotos)
      .then(() => setLoadingPhotos(false));
  }, [albumId]);

  if (loadingPhotos) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.photos}>
      {photos.map((photo) => (
        <div key={photo.id} className={s.photos__item}>
          <div>{photo.url}</div>
          <img srcSet={photo.thumbnailUrl} alt="" />
        </div>
      ))}
    </div>
  );
};
