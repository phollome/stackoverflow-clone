import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import QuestionForm from "../components/QuestionForm";

// TODO: Prevent submitting empty question
test("submit empty question", () => {
  const submit = jest.fn((item) => {
    const { title, description, author } = item;
    expect(title).toBe("");
    expect(description).toBe("");
    expect(author.name).toBe("anonymous");
  });

  render(<QuestionForm submit={submit} />);

  const submitButton = screen.getByTestId("submit-button");

  user.click(submitButton);
  expect(submit).toBeCalled();
});

test("submit question", () => {
  const testTitle = "Test Title";
  const testDescription = "Test Description";
  const testAuthor = {
    name: "Test User",
  };
  const submit = jest.fn((item) => {
    const { title, description, author } = item;
    expect(title).toBe(testTitle);
    expect(description).toBe(testDescription);
    expect(author.name).toBe(testAuthor.name);
  });

  render(<QuestionForm submit={submit} currentUser={testAuthor} />);

  const titleInput = screen.getByTestId("title-input");
  const descriptionInput = screen.getByTestId("description-input");
  const submitButton = screen.getByTestId("submit-button");

  user.type(titleInput, testTitle);
  user.type(descriptionInput, testDescription);

  user.click(submitButton);
  expect(submit).toBeCalled();
});
