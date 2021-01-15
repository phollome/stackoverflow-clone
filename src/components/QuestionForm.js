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
    <div data-testid="question-form" className="w-full p-2">
      <div className="border p-2">
        <div>
          <label htmlFor="title-input">Title: </label>
          <input
            id="title-input"
            data-testid="title-input"
            ref={titleInput}
            className="border"
          />
        </div>
        <div>
          <label htmlFor="description-input">Description: </label>
          <textarea
            id="description-input"
            data-testid="description-input"
            ref={descriptionInput}
            className="border"
            rows="4"
            cols="50"
          />
        </div>
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
