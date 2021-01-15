import { render, screen } from "@testing-library/react";
import QuestionsList from "../components/QuestionsList";

const data = {
  questions: [
    {
      id: 1,
      title: "The Question!",
      description:
        "The answer to the ultimate question of life, the universe and everything",
      createAt: "Fri Jan 15 2021 10:12:19 GMT+0100",
      author: "peter",
    },
  ],
  answers: [{ id: 1, text: "42!", author: "sookie", question: 1 }],
};

test("show list with amount of questions", () => {
  render(<QuestionsList list={data.questions} />);
  const listItems = screen.getAllByTestId("list-item");
  expect(listItems.length).toBe(data.questions.length);
});

// TODO: Test answers are showing
