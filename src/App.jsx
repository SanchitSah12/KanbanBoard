
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/index.jsx'
import StatusPage from './Components/StatusPage/index.jsx'
import PriorityPage from './Components/PriorityPage/index.jsx'
import UserPage from './Components/UserPage/index.jsx'
function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [sorting, setSorting] = useState("title");
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'Status');
  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
  }, []);
  
  useEffect(() => {
    let sortedTickets = [...tickets];
    if (sorting === "title") {
      sortedTickets.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sorting === "priority") {
      sortedTickets.sort((a, b) => b.priority - a.priority);
    }
    setTickets(sortedTickets);
  }, [sorting]);


  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
    localStorage.setItem('grouping', newGrouping);
  };

  const groupByStatus = tickets.reduce((grouped, ticket) => {
    (grouped[ticket.status] = grouped[ticket.status] || []).push(ticket);
    return grouped;
  }, {});

  const groupByPriority = tickets.reduce((grouped, ticket) => {
    (grouped[ticket.priority] = grouped[ticket.priority] || []).push(ticket);
    return grouped;
  }, {});


  const groupByUser = tickets.reduce((grouped, ticket) => {
    (grouped[ticket.userId] = grouped[ticket.userId] || []).push(ticket);
    return grouped;
  }, {});

  return (
    <div>
      <Navbar sorting={sorting} setSorting={setSorting} grouping={grouping} setGrouping={handleGroupingChange} />
      {

        grouping == "Status" ? <StatusPage data={groupByStatus} />
          : grouping == "Priority" ? <PriorityPage data={groupByPriority} /> :
            <UserPage data={groupByUser} name={users} />

      }

    </div>
  )
}

export default App
