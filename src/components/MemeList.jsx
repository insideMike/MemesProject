import PropTypes from "prop-types";
import { useMemo } from "react";
import Meme from "./Meme";

const MemeList = ({ memes, vote }) => {
  const filterMemes = useMemo(() => {
    if (location.pathname === "/hot") {
      return memes.filter((meme) => meme.votes >= 5);
    } else {
      return memes.filter((meme) => meme.votes < 5);
    }
  }, [memes]);

  return (
    <>
      {filterMemes.map((meme) => (
        <Meme
          key={meme.id}
          title={meme.title}
          url={meme.url}
          id={meme.id}
          votes={meme.votes}
          vote={vote}
        />
      ))}
    </>
  );
};
MemeList.propTypes = {
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

export default MemeList;
