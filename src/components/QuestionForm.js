import PropTypes from "prop-types";
import { useRef } from "react";

function QuestionForm(props) {
  const { submit, currentUser } = props;

  const titleInput = useRef(null);
  const descriptionInput = useRef(null);

  const handleSubmit = () => {
    const title = titleInput.current?.value || "";
    const description = descriptionInput.current?.value || "";
    const author = currentUser;
    const createdAt = new Date().toUTCString();
    submit({ title, description, author, createdAt });
  };

  return (
    <div data-testid="question-form" className="w-3/4 p-2">
      <div className="border p-2 bg-blue-100">
        <h2 className="py-2 text-lg font-bold">Ask question</h2>
        <input
          id="title-input"
          data-testid="title-input"
          aria-label="title of question"
          ref={titleInput}
          className="mb-2 w-full border p-2"
          placeholder="Title"
        />
        <textarea
          id="description-input"
          data-testid="description-input"
          aria-label="description of question"
          ref={descriptionInput}
          rows="4"
          cols="50"
          className="w-full border p-2 resize-y"
          placeholder="Description"
        />
        <div className="flex justify-end">
          <button
            data-testid="submit-button"
            type="submit"
            onClick={handleSubmit}
            className="py-2 px-4 border-2 rounded-lg bg-blue-500 text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

QuestionForm.propTypes = {
  submit: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
};

QuestionForm.defaultProps = {
  submit: (item) => console.log(item),
  currentUser: { id: 999, name: "anonymous" },
};

export default QuestionForm;
