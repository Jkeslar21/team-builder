import React, { useState } from 'react';
import TeamMemberList from './components/TeamMemberList'
import Form from './components/Form'
import './App.css';

function App() {
  const [members, setMembers] = useState([])
  const [update, setUpdate] = useState({})
  const [isUpdating, setIsUpdating] = useState(false)

  return (
    <div className="App">
      <h2>Welcome to the Jungle</h2>
      <Form setMembers={setMembers} members={members} update={update} isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
      <TeamMemberList members={members} setUpdate={setUpdate} setIsUpdating={setIsUpdating} />
    </div>
  );
}

export default App;
