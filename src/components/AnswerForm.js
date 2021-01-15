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
    <div className="py-2 flex justify-between">
      <input
        id="answer-input"
        data-testid="answer-input"
        aria-label="answer text"
        ref={input}
        className="flex-1 border p-2 mr-2"
        placeholder="Answer"
      />
      <button
        type="submit"
        data-testid="answer-submit-button"
        className="py-2 px-4 border-2 rounded-lg bg-gray-500 text-white text-sm"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
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
