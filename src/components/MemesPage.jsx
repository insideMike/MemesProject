import PropTypes from "prop-types";
import MemeList from "./MemeList";

const MemesPage = ({ memes, vote, filter, title }) => {
  const filteredMemes = memes.filter(filter);

  return (
    <>
      <h1>{title}</h1>
      <MemeList memes={filteredMemes} vote={vote} />
    </>
  );
};

MemesPage.propTypes = {
  memes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    })
  ).isRequired,
  vote: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default MemesPage;
