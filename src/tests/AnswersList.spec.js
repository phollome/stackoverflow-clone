import { render, screen } from "@testing-library/react";
import AnswersList from "../components/AnswersList";
import data from "./testData.json";

test("show list with amount of questions", () => {
  render(<AnswersList list={data.answers} />);
  const listItems = screen.getAllByTestId("answers-list-item");
  expect(listItems.length).toBe(data.answers.length);
});
