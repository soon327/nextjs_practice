import React, { useState, useEffect } from 'react';
import Home from './Home';
import About from './About';
import styled from 'styled-components';
import Icon from './icon.png';

const Container = styled.div`
  background-color: #aaaaaa;
  border: 1px solid blue;
`;

const fetchUsername = () => {
  const usernames = ['kwon', 'soon', 'ki'];
  const result = new Promise((resolve) => {
    const username = usernames[Math.floor(Math.random() * 3)];
    setTimeout(() => resolve(username), 100);
  });
  console.log('fetched username ', result);
  return result;
};

export default function App({ initialPage }) {
  const [page, setPage] = useState(initialPage);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    window.onpopstate = (event) => {
      setPage(event.state);
    };
    fetchUsername().then((data) => setUsername(data));
  }, []);

  const onChangePage = (e) => {
    const newPage = e.target.dataset.page;
    window.history.pushState(newPage, '', `/${newPage}`);
    setPage(newPage);
  };

  const PageComponent = page === 'home' ? Home : About;

  return (
    <Container>
      <button data-page="home" onClick={onChangePage}>
        Home
      </button>
      <button data-page="about" onClick={onChangePage}>
        About
      </button>
      <PageComponent username={username} />
      <img src={Icon} width={300} height={300} />
    </Container>
  );
}
