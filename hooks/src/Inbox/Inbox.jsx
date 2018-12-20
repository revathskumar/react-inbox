import React, { useState, useEffect } from "react";

const Inbox = () => {
  const [uiState, setUiState] = useState("");
  const [mails, setMails] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    console.log('useEffect', uiState)
    if (uiState !== "") {
      return;
    }

    fetch("http://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then(mails => {
        setUiState("SUCCESS");
        setMails(mails);
      }).catch(err => {
        setUiState("FAILURE");
        setError(err)
      })
  }, [uiState]);

  if (uiState === "") {
    return <div>Loading...</div>
  }
  if (uiState === "FAILURE") {
    return <div>{error.message}</div>
  }


  if (uiState === "SUCCESS") {
    return (
      <ul>
        {mails.map(mail => <li>{mail.title}</li>)}
      </ul>
    )
  }

  return <div>Inbox</div>;
};

export default Inbox;
