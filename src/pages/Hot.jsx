import PropTypes from "prop-types";
import MemeList from "../components/MemeList";

const Hot = ({ memes, vote }) => {
  return (
    <>
      <h1>Hot Memes</h1>
      <MemeList memes={memes} vote={vote} path="/hot" />
    </>
  );
};
Hot.propTypes = {
  memes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    })
  ).isRequired,
  vote: PropTypes.func.isRequired,
};
export default Hot;
