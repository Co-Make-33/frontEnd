import React, { useState } from "react";
import { ActionButtons } from "../components/Style";

const Upvote = props => {
  const [upvotes, setUpvotes] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <h6>{upvotes} upvotes</h6>
      <ActionButtons
        onClick={() => {
          setUpvotes(upvotes + 1);
          setDisabled(true);
        }}
        disabled={disabled}
      > Upvote
      </ActionButtons>
    </div>
  );
};

export default Upvote;