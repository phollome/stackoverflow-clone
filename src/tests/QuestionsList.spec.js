import { render, screen } from "@testing-library/react";
import QuestionsList from "../components/QuestionsList";
import data from "./testData.json";

test("show list with amount of questions", () => {
  render(<QuestionsList list={data.questions} />);
  const listItems = screen.getAllByTestId("list-item");
  expect(listItems.length).toBe(data.questions.length);
});

// TODO: Test answers are showing
