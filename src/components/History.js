import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const History = () => {
  const reduxHistory = useSelector((state) => state.history);

  const localStorageHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

  const combinedHistory = [...new Set([...reduxHistory, ...localStorageHistory])];

  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {combinedHistory.map((word, index) => (
          <li key={index}>
            <Link to={`/word/${word}`}>{word}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
