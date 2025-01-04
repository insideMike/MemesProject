import PropTypes from "prop-types";
import MemeList from "../components/MemeList";

const Regular = ({ memes, vote }) => {
  return (
    <>
      <h1>Regular Memes</h1>
      <MemeList memes={memes} vote={vote} />
    </>
  );
};
Regular.propTypes = {
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
export default Regular;
