import React from 'react';
import styled from 'styled-components';

const IssueCardStyle = styled.div`

`

const IssueCard = (props) => {
    const {issue} = props

    return (
        <>
        <IssueCardStyle>
            <h3>{issue.name}</h3>
            <p>{issue.description}</p>
        </IssueCardStyle>

        </>
    )
}

export default IssueCard