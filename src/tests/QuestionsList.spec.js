const { render, screen } = require("@testing-library/react");
const { default: QuestionsList } = require("../components/QuestionsList");

const data = {
  questions: [
    {
      id: 1,
      title: "The Question!",
      description:
        "The answer to the ultimate question of life, the universe and everything",
      date: "Fri Jan 15 2021 10:12:19 GMT+0100",
      author: "peter",
    },
  ],
};

test("show list with amount of questions", () => {
  render(<QuestionsList list={data.questions} />);
  const listItems = screen.getAllByTestId("list-item");
  expect(listItems.length).toBe(data.questions.length);
});
