import PropTypes from "prop-types";
import { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import memesData from "./data/memesData";
import Hot from "./pages/Hot";
import Regular from "./pages/Regular";

function App() {
  const [memes, setMemes] = useState(memesData);

  const vote = (id, type) => {
    setMemes((prevMemes) =>
      prevMemes.map((meme) => {
        if (meme.id === id) {
          const newVotes = type === "upvote" ? meme.votes + 1 : meme.votes - 1;
          return { ...meme, votes: newVotes };
        }
        return meme;
      })
    );
  };

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              Regular
            </NavLink>
          </li>
          <li>
            <NavLink to="/hot" activeclassname="active">
              Hot
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Regular memes={memes} vote={vote} />} />
        <Route path="/hot" element={<Hot memes={memes} vote={vote} />} />
      </Routes>
    </BrowserRouter>
  );
}
Regular.propTypes = {
  path: PropTypes.string.isRequired,
};
export default App;
