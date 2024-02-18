
import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  // problem 1 state
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState("active");
  //problem 2 state
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [country, setCountry]=useState('')
  const [searchQuery, setSearchQuery] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [onlyEven, setOnlyEven] = useState(false);


  const handleShowModalA = () => {
    setShowModalA(true);
  };

  const handleShowModalB = () => {
    setShowModalB(true);
    setCountry("/country-contacts/bangladesh")
    setShowModalA(false);
  };

  const handleCloseModal = () => {
    setShowModalA(false);
    setShowModalB(false);
  };

  const handleToggleEven = () => {
    setOnlyEven((prevState) => !prevState);
  };



  // Effect to filter tasks based on the current filter
  useEffect(() => {
    if (filter === "active") {
      setFilteredTasks(tasks.filter((task) => task.status === "Active"));
    } else if (filter === "completed") {
      setFilteredTasks(tasks.filter((task) => task.status === "Completed"));
    } else {
      setFilteredTasks(tasks);
    }
  }, [tasks, filter]);

  const ContextValue = {
    handleShowModalA,
    handleShowModalB,
    handleCloseModal,
    showModalA,
    showModalB,
    onlyEven,
    handleToggleEven,
    contacts: onlyEven
      ? contacts.filter((contact) => contact.id % 2 === 0)
      : contacts,
    tasks,
    setTasks,
    filteredTasks,
    filter,
    setFilter,
  };

  return (
    <DataContext.Provider value={ContextValue}>{children}</DataContext.Provider>
  );
};
