import { useEffect, useState } from 'react';
import Header from '../components/Header';
import './App.css';
import Main from '../components/Main';

function App() {
  const [groupBy, setGroupBy] = useState(() => {
    const savedState = localStorage.getItem('groupby');
    return savedState ? JSON.parse(savedState) : "status";
  });
  
  const [orderBy, setOrderBy] = useState(() => {
    const savedState = localStorage.getItem('orderby');
    return savedState ? JSON.parse(savedState) : "priority";
  });
  
  useEffect(() => {
    if (groupBy) {
      localStorage.setItem('groupby', JSON.stringify(groupBy));
    }
  }, [groupBy]);
  
  useEffect(() => {
    if (orderBy) {
      localStorage.setItem('orderby', JSON.stringify(orderBy));
    }
  }, [orderBy]);
  

  return (
    <>
      <Header sortTickets={setOrderBy} groupTickets={setGroupBy} groupby={groupBy} orderby={orderBy} />
      <div style={{ backgroundColor: "rgba(244,245,249,255)", width: "100%" }}>
        <Main groupBy={groupBy} orderBy={orderBy} />
      </div>
    </>
  );
}

export default App;
