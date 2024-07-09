import React from 'react';
import useGetData from '../../hooks/useGetData';
import '../style/PagesStyle.scss';

const UsersDataPage = () => {
  const { userData, deleteItem } = useGetData();

  return (
    <div className='userPage'>
      {userData.map((user) => (
        <div className='userCard' key={user.id}>
          <span className='id'>{user.id}</span>
          <div className="userCard__name">
            <span className='label'>Name:</span>
            <span>{user.name}</span>
          </div>
          <div className="userCard__email">
            <span className='label'>Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="userCard__password">
            <span className='label'>Password:</span>
            <span>{user.password}</span>
          </div>
          <div className="userCard__buttons">
            <button onClick={() => deleteItem(user.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersDataPage;
