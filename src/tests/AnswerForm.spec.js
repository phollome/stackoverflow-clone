import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import AnswerForm from "../components/AnswerForm";

test("submit empty answer", () => {
  const testQuestionId = 1;
  const submit = jest.fn((item) => {
    const { questionId, text, author } = item;
    expect(questionId).toBe(testQuestionId);
    expect(text).toBe("");
    expect(author.name).toBe("anonymous");
  });

  render(<AnswerForm questionId={testQuestionId} submit={submit} />);

  const submitButton = screen.getByTestId("answer-submit-button");

  user.click(submitButton);
  expect(submit).toBeCalled();
});

test("submit answer", () => {
  const testQuestionId = 1;
  const testText = "Test Text";
  const testAuthor = {
    name: "Test User",
  };
  const submit = jest.fn((item) => {
    const { questionId, text, author } = item;
    expect(questionId).toBe(testQuestionId);
    expect(text).toBe(testText);
    expect(author.name).toBe(testAuthor.name);
  });

  render(
    <AnswerForm
      questionId={testQuestionId}
      submit={submit}
      currentUser={testAuthor}
    />
  );

  const input = screen.getByTestId("answer-input");
  const submitButton = screen.getByTestId("answer-submit-button");

  user.type(input, testText);

  user.click(submitButton);
  expect(submit).toBeCalled();
});
