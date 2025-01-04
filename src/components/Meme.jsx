import PropTypes from "prop-types";
const Meme = ({ id, title, url, votes, vote }) => {
  return (
    <div className="card">
      <p className="title">{title}</p>
      <img src={url} alt={title} />
      <div>
        <span>
          <button onClick={() => vote(id, "upvote")}>Up</button>
          <span>{votes}</span>
          <button onClick={() => vote(id, "downvote")}>Down</button>
        </span>
      </div>
    </div>
  );
};
Meme.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  vote: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
export default Meme;
