import { useState, useEffect } from "react";

const useContactsFetch = (searchTerm, page, endpoint) => {
    
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          `https://contact.mediusware.com/api/${endpoint}`
        );
        const data = await response.json();
        setContacts(data?.results);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, [searchTerm, page, endpoint]);

  return contacts;
};

export default useContactsFetch;
