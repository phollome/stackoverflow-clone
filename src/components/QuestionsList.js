import PropTypes from "prop-types";

function QuestionsList(props) {
  const { list } = props;
  return (
    <div className="m-2">
      {list.map((item) => (
        <div key={item.id} data-testid="list-item">
          <h2 className="text-lg">{item.title}</h2>
          <p className="text-base">{item.description}</p>
          <p className="text-sm">
            asked by {item.author} on{" "}
            {new Date(item.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}

QuestionsList.propTypes = {
  list: PropTypes.array.isRequired,
};

QuestionsList.defaultProps = {
  list: [],
};

export default QuestionsList;
