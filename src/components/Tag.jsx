import PropTypes from "prop-types";
import "../sassStyles/components/tag.scss";

function Tag({ content }) {
  return (
    <div className="tag">
      {content}
    </div>
  );
}

Tag.propTypes = {
  content: PropTypes.string.isRequired
};

export default Tag;
