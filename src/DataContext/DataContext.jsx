import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';


const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {

  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [pageCount, setPageCount] = useState(1);


  const BASE_URL = 'https://contact.mediusware.com/api/contacts/?format=json';

//   console.log(data, 'data');

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          page,
          search: searchQuery,
          pageCount
        }
      });
      setContacts(response.data.results);
      setPageCount(response.data.pageCount);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, searchQuery, pageCount]);

  return (
    <DataContext.Provider value={{ contacts, page, setPage, searchQuery, setSearchQuery, pageCount }}>
      {children}
    </DataContext.Provider>
  );
};
