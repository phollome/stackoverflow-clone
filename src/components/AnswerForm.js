import { useRef } from "react";
import PropTypes from "prop-types";

function AnswerForm(props) {
  const { questionId, submit, currentUser } = props;

  const input = useRef(null);

  const handleSubmit = () => {
    const text = input.current?.value || "";
    const author = currentUser;
    const createdAt = new Date().toUTCString();
    submit({ text, author, createdAt, questionId });
  };
  return (
    <>
      <label htmlFor="answer-input">Answer</label>
      <input
        id="answer-input"
        data-testid="answer-input"
        ref={input}
        className="border"
      />
      <button
        type="submit"
        data-testid="answer-submit-button"
        className="py-1 px-4 border-2 rounded-lg bg-gray-500 text-white text-sm"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </>
  );
}

AnswerForm.propTypes = {
  questionId: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
};

AnswerForm.defaultProps = {
  submit: (item) => console.log(item),
  currentUser: { id: 999, name: "anonymous" },
};

export default AnswerForm;
