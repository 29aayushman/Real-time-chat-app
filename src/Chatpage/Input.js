import React from 'react';

const Input = () => {
  return (
    <div className="input">
      <input type="text"placeholder="Type something..."/>
      <div className="send">
        <img src="https://www.svgrepo.com//show/46196/attachment.svg" alt="" />
        <input type="file"style={{ display: "none" }} id="file"/>
        <label htmlFor="file">
          <img src="https://w7.pngwing.com/pngs/73/57/png-transparent-albums-computer-icons-others.png" alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Input;
