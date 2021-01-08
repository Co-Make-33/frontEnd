import React from 'react';
import Upvote from './Upvote';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyleIssue = createGlobalStyle`

    button {
        margin-right:1%;
        margin-top:0%;
    }

    h6 {
        margin-bottom: 2%;
    }
`

const ContentBox = styled.div`
    border-radius:10px;
    margin:1%;
    padding-left:2%;
    width:50%;
    box-shadow:0px 0px 3px 0px black;
    padding-top:2%;

`

const Issue = ({ title, description }) => {
 

    return (
        <div>
            <GlobalStyleIssue/>
        <ContentBox>
            <h3>{title}</h3>
            <p>{description}</p>
            <span><Upvote /><button>Edit</button><button>Delete</button></span>
        </ContentBox>
        </div>
    );
}

export default Issue