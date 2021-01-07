import React from "react";
import IssuesList from './IssuesList';
import {IssueProvider} from '../contexts/IssuesContext';
import AddIssue from "./AddIssue";
import styled, { createGlobalStyle } from 'styled-components';

const IssuesPageGlobal = createGlobalStyle`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
`

const IssuesListStyle = styled.div`
  display:flex;
  flex-direction:column;

`
const AddIssueStyle = styled.div`
  display:flex;
  flex-direction:column;
`
function IssuesPage () {
  return (
    <>
    <IssuesPageGlobal/>
    <IssueProvider>
      <div>
        <IssuesListStyle>
          <IssuesList/>
        </IssuesListStyle>
        <AddIssueStyle>
          <AddIssue/>
        </AddIssueStyle>
      </div>
    </IssueProvider>
    </>
  )
}

export default IssuesPage