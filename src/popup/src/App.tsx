import React, { useState, useEffect } from 'react';
import './assets/main.css';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('');

  useEffect(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, async tabs => {
      setCurrentTab((tabs[0] && tabs[0].title) || '');
    });
  }, [currentTab]);

  const onClick = async () => {
    // chrome.identity.getAuthToken({ interactive: true }, function(token) {
    //   alert('TOKEN : ' + token);
    // });
    // chrome.tabs.query({ currentWindow: true, active: true }, async tabs => {
    //   let tab = tabs[0];
    //   let myHeaders = new Headers({
    //     'Content-Type': 'application/json',
    //     Authorization:
    //       'Bearer TOKEN',
    //   });
    //   await fetch('https://api.booklog.link/api/v1/bookmarks', {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: JSON.stringify({ name: tab.title, url: tab.url }),
    //   });
    //   alert('Saved...');
    // });
  };

  return (
    <div className="w-full max-w-sm">
      {currentTab || 'No Tab'}
      <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Tags"
          aria-label="Tag"
        />
        <button
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={onClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default App;
