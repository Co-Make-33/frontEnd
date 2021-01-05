import React, { useState } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';

const MeetTheTeamGlobal = createGlobalStyle`
* {
    color:white;
}
body {
    background-color:#242943;
}
`;

//once the data is being displayed for each teamMember, begin styling the github profile cards
const styledTeam = styled.div`
  display: flex;
`;

function MeetTheTeam() {
  //array of github usernames to be plugged into the axios call loop
  const teamMembers = [
    'aprilissy',
    'ruizaj13',
    'oscfig',
    'Plofland',
    'emilyr027'
  ];

  //the state that will hold all the info from each teamMember loop iteration
  //once it is full of each team member's data, it is to be used in a loop in the return statement to create each team member card
  const [teamState, setTeamState] = useState([]);

  //loop over the teamMembers array, use the axios call to set the state by adding the data object to the teamState array
  teamMembers.forEach((eachMember) => {
    axios
      .get(`https://api.github.com/users/${eachMember}`)
      .then((result) => {
        // console.log(result);
        setTeamState([...teamState, result.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  console.log(teamState);
  //once the teamState has been set with the data from each teamMember, use a loop in here to create each profile card
  return (
    <>
      <MeetTheTeamGlobal />
      <styledTeam>
        <div className="githubCards">
          <img
            src="https://avatars2.githubusercontent.com/u/11523076?v=4"
            alt="gitHub avatar"
          ></img>
          <div className="profileInfo">
            <h2>April</h2>
            <div className="userInfo">
              <p>Bio: placeholder</p>
              <p>Username: placeholder</p>
              <p>Followers: number</p>
              <p>Following: number</p>
              <a href="https://github.com/aprilissy">GitHub Profile</a>
            </div>
          </div>
        </div>
      </styledTeam>
    </>
  );
}

export default MeetTheTeam;
