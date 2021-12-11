import React from 'react';

export default function Home({ username }) {
  return (
    <div>
      <h3>This is home page</h3>
      {username && <p>{`${username}님 안녕하세요`}</p>}
    </div>
  );
}
