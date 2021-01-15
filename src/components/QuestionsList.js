import PropTypes from "prop-types";
import AnswerForm from "./AnswerForm";

function QuestionsList(props) {
  const { list, answers, submitAnswer } = props;

  const enhancedList = list
    .map((item) => {
      const itemAnswers = answers.filter((elem) => elem.questionId === item.id);
      return { ...item, answers: itemAnswers };
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // sort descendant

  return (
    <div className="p-2 w-3/4">
      <div className="border p-2 bg-gray-100">
        {enhancedList.map((item) => (
          <div key={item.id} data-testid="list-item" className="py-2">
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="text-base">{item.description}</p>
            <p className="text-sm italic text-right">
              asked by {item.author} on{" "}
              {new Date(item.createdAt).toLocaleDateString()}
            </p>
            <div className="mt-2 p-2 border bg-gray-200">
              {item.answers.length > 0 ? (
                item.answers.map((elem) => (
                  <div key={elem.id} className="border-b p-2">
                    <p className="text-xs">{elem.text}</p>
                    <p className="text-xs italic">
                      answered by {elem.author} on{" "}
                      {new Date(elem.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-xs italic">No answers</p>
              )}
              <AnswerForm questionId={item.id} submit={submitAnswer} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

QuestionsList.propTypes = {
  list: PropTypes.array.isRequired,
  answers: PropTypes.array.isRequired,
  submitAnswer: PropTypes.func.isRequired,
};

QuestionsList.defaultProps = {
  list: [],
  answers: [],
  submitAnswer: (item) => console.log(item),
};

export default QuestionsList;
