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
    <div className="p-2 w-1/4">
      <div className="p-2 border">
        <h3 className="text-xl font-bold">Recent answers</h3>
        {enhancedList.map((item) => (
          <div key={item.id} data-testid="answers-list-item" className="p-2">
            <p className="text-base">{item.text}</p>
            <p className="text-sm">
              Answer to: <span className="font-bold">{item.questionTitle}</span>
            </p>
            <p className="text-xs italic">
              asked by {item.author} on{" "}
              {new Date(item.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
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
