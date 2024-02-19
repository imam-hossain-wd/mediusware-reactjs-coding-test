
import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState("active");
  //problem 2 state

  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [contactData, setContactData]= useState([])
  
  const handleShowModalA = () => {
    setShowModalA(true);
  };

  const handleShowModalB = () => {
    setShowModalB(true);
    setShowModalA(false);
  };

  const handleCloseModal = () => {
    setShowModalA(false);
    setShowModalB(false);
  };

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
    tasks,
    setTasks,
    filteredTasks,
    filter,
    setFilter,
    handleShowModalA,
    handleShowModalB,
    handleCloseModal,
    showModalA,
    showModalB,
    contactData, 
    setContactData
  };

  return (
    <DataContext.Provider value={ContextValue}>{children}</DataContext.Provider>
  );
};

