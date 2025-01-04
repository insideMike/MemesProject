import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router";
import "../../src/AddMemePage.css";

const AddMemePage = ({ addMeme }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && url) {
      const newMeme = {
        id: Date.now(),
        title,
        url,
        votes,
      };
      addMeme(newMeme);
      navigate("/"); // Przekierowanie na stronę główną
    } else {
      setError("Tytuł i URL są wymagane.");
    }
  };

  return (
    <div className="form-container">
      <h1>Dodaj Nowego Mema</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Tytuł</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="url">URL</label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="votes">Liczba Głosów</label>
          <input
            type="number"
            id="votes"
            value={votes}
            onChange={(e) => setVotes(Number(e.target.value))}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Dodaj Mema</button>
      </form>
    </div>
  );
};

AddMemePage.propTypes = {
  addMeme: PropTypes.func.isRequired,
};

export default AddMemePage;
