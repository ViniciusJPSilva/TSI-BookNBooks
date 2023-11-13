import React, { useState } from 'react';
import PAGES from './constants/constants';
import Header from './components/header';
import Footer from './components/footer';
import Welcome from './components/welcome';
import Search from './components/search';
import Book from './components/book';

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);
  const [searchResult, setSearchResult] = useState('');

  const renderContent = () => {
    switch (currentPage) {
      case PAGES.HOME:
        return <Welcome setCurrentPage={setCurrentPage}/>;
      case PAGES.SEARCH:
        return <Search setCurrentPage={setCurrentPage} searchResult={searchResult}/>;
      case PAGES.BOOK:
        return <Book setCurrentPage={setCurrentPage}/>;
      default:
        return null;
    };
  };

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} setSearchResult={setSearchResult}/>
      {renderContent()}
      <Footer/>
    </div>
  );
}

export default App;
