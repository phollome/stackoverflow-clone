import PropTypes from "prop-types";

function AnswersList(props) {
  const { list, questions } = props;

  const enhancedList = list
    .map((item) => {
      const question =
        questions.find((elem) => elem.id === item.questionId) || {};
      return { ...item, questionTitle: question.title };
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // sort descendant
    .slice(0, 5); // limit 5 (TODO: make request to get only ${amount} of answers)

  return (
    <div>
      <h3>Recent answers</h3>
      {enhancedList.map((item) => (
        <div key={item.id} data-testid="answers-list-item">
          <p className="text-base">{item.text}</p>
          <p className="text-sm">Answer to:{item.questionTitle}</p>
          <p className="text-xs">
            asked by {item.author} on{" "}
            {new Date(item.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}

AnswersList.propTypes = {
  list: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
};
AnswersList.defaultProps = {
  list: [],
  questions: [],
};

export default AnswersList;