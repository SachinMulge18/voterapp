import React, { useState } from "react";
import "./Voter.css";

const allVotes = [
  {
    id: Math.random(),
    timestamp: 1657935237702,
    voter: "Ricky",
    points: 95,
    option: "Trailer Park Boys",
  },
  {
    id: Math.random(),
    timestamp: 1658735267163,
    voter: "anonymas",
    points: 90,
    option: "The Office",
  },
  {
    id: Math.random(),
    timestamp: 1658935247702,
    voter: "Donkey",
    points: 100,
    option: "Shrek",
  },
  {
    id: Math.random(),
    timestamp: 1658935257952,
    voter: "Donkey",
    points: 110,
    option: "Shrek",
  },
];

const Voter = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredRating, setEnteredRating] = useState("");
  const [enteredOption, setOption] = useState("");
  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const ratingHander = (e) => {
    if (e.target.value < 100) {
      setEnteredRating(e.target.value);
    } else {
      return false;
    }
  };

  const optionHander = (e) => {
    setOption(e.target.value);
  };

  const sumbitHandler = (e) => {
    e.preventDefault();

    const voterData = {
      id: Math.random(),
      timestamp: Date.now(),
      voter: enteredName,
      points: enteredRating,
      option: enteredOption,
    };
    allVotes.push(voterData);
    console.log(voterData);
    setEnteredName("");
    setEnteredRating("");
    setOption("");
  };
  return (
    <>
      <div className="main-div">
        <form className="form-fields" onSubmit={sumbitHandler}>
          <span className="heading">Voting Boot</span>
          <label>Your Name </label>
          <input
            type="text"
            value={enteredName}
            onChange={nameHandler}
            autoFocus
            required
          />

          <label>Points(1-100)</label>
          <input
            type="number"
            value={enteredRating}
            onChange={ratingHander}
            maxLength={1}
            required
          />
          <label>Option</label>

          <select onChange={optionHander} required>
            <option value="">Select</option>
            <option value="The Office">The Office </option>
            <option value="Trailer Park Boys">Trailer Park Boys </option>
            <option value="Shrek"> Shrek</option>
            <option value="Rick And Morty"> Rick And Morty</option>
            <option value="Brooklyn 99"> Brooklyn 99</option>
            <option value="Parks and Recreation">Parks and Recreation </option>
            <option value="F.R.I.E.N.D.S">F.R.I.E.N.D.S </option>
            <option value="Bojack Horseman">Bojack Horseman </option>
          </select>
          <button type="submit"> Give Points </button>
        </form>
      </div>

      {/* LeaderBoard */}
      <section className="leader-board">
        <h1>LeaderBoard</h1>
        <div className="Leaderboard_Div">
          {allVotes
            ?.sort((a, b) => b.points - a.points)
            .map((votes) => (
              <tr key={votes.id} className="score-board">
                <td className="table-data">#{votes.voter}</td>
                <td className="table-data">#{votes.points}</td>
              </tr>
            ))}
        </div>
      </section>

      <div className="All_votes">
        <h1 className="heading">All votes</h1>
        <div className="table">
          <table className="table-row">
            <thead>
              <tr>
                <th className="table-heading">Date</th>
                <th className="table-heading">Voter</th>
                <th className="table-heading">Option</th>
                <th className="table-heading">Points</th>
              </tr>
            </thead>
            <tbody>
              {allVotes?.map((votes) => (
                <tr key={votes.id}>
                  <td className="table-data">{votes.timestamp}</td>
                  <td className="table-data">{votes.voter}</td>
                  <td className="table-data">{votes.option}</td>
                  <td className="table-data">{votes.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Voter;
