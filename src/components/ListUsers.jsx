import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { usersFetch } from './api';
import s from './style.module.scss';

export const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    usersFetch()
      .then(setUsers)
      .then(() => setLoadingUsers(false));
  }, []);

  if (loadingUsers) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <table className={s.table}>
        <tbody>
          <tr>
            <td className={s.table__title}>Name</td>
            <td className={s.table__title}>User Name</td>
            <td className={s.table__title}>Email</td>
            <td className={`${s.table__itemButton} ${s.table__itemButton_color}`}></td>
          </tr>

          {users.map((user) => (
            <tr key={user.id}>
              <td className={s.table__item}>{user.name}</td>
              <td className={s.table__item}>{user.username}</td>
              <td className={s.table__item}>{user.email}</td>
              <td className={s.table__itemButton}>
                <Link to={`/listAlbums?userId=${user.id}`} value={user.id} className={s.table__button}>
                  Albums
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
