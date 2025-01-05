import { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import MemesPage from "./components/MemesPage";
import memesData from "./data/memesData";
import AddMemePage from "./pages/AddMemePage";

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

  const addMeme = (newMeme) => {
    setMemes((prevMemes) => [newMeme, ...prevMemes]);
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
          <li>
            <NavLink to="/add-meme" activeclassname="active">
              Dodaj Mema
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <MemesPage
              memes={memes}
              vote={vote}
              filter={(meme) => meme.votes < 5}
              title="Regular Memes"
            />
          }
        />
        <Route
          path="/hot"
          element={
            <MemesPage
              memes={memes}
              vote={vote}
              filter={(meme) => meme.votes >= 5}
              title="Hot Memes"
            />
          }
        />
        <Route path="/add-meme" element={<AddMemePage addMeme={addMeme} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
