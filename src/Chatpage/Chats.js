import React from 'react';

const Chats = () => {
  return (
    <div className="chats">
      <div className='userChat'>
        <img src="https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2.svg"></img>
        <div className="userChatInfo">
          <span>Jiya</span>
          <p>hii</p>
        </div>
      </div>
      <div className='userChat'>
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"></img>
        <div className="userChatInfo">
          <span>aayushman</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}

export default Chats;
