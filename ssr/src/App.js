import React, { useState, useEffect } from 'react';
import Home from './Home';
import About from './About';

export default function App({ initialPage }) {
  const [page, setPage] = useState(initialPage);
  useEffect(() => {
    window.onpopstate = (event) => {
      setPage(event.state);
    };
  }, []);

  const onChangePage = (e) => {
    const newPage = e.target.dataset.page;
    window.history.pushState(newPage, '', `/${newPage}`);
    setPage(newPage);
  };

  const PageComponent = page === 'home' ? Home : About;

  return (
    <div className="container">
      <button data-page="home" onClick={onChangePage}>
        Home
      </button>
      <button data-page="about" onClick={onChangePage}>
        About
      </button>
      <PageComponent />
    </div>
  );
}
