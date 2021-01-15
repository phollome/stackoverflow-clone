import PropTypes from "prop-types";

function QuestionsList(props) {
  const { list, answers } = props;

  const enhancedList = list.map((item) => {
    const itemAnswers = answers.filter((elem) => elem.questionId === item.id);
    return { ...item, answers: itemAnswers };
  });

  return (
    <div className="m-2">
      {enhancedList.map((item) => (
        <div key={item.id} data-testid="list-item">
          <h2 className="text-lg">{item.title}</h2>
          <p className="text-base">{item.description}</p>
          <p className="text-sm">
            asked by {item.author} on{" "}
            {new Date(item.createdAt).toLocaleDateString()}
          </p>
          <div>
            {item.answers.map((elem) => (
              <div key={elem.id}>
                <p className="text-xs">{elem.text}</p>
                <p className="text-xs">
                  answered by {elem.author} on{" "}
                  {new Date(elem.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

QuestionsList.propTypes = {
  list: PropTypes.array.isRequired,
  answers: PropTypes.array.isRequired,
};

QuestionsList.defaultProps = {
  list: [],
  answers: [],
};

export default QuestionsList;
