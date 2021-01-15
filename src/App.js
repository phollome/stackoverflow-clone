import { useEffect, useState } from "react";
import AnswersList from "./components/AnswersList";
import QuestionForm from "./components/QuestionForm";
import QuestionsList from "./components/QuestionsList";

async function sendData(url, data) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await fetch(url, options);
}

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function makeRequest() {
      const res = await fetch("http://localhost:3001/questions");
      const json = await res.json();
      setQuestions(json);
    }
    makeRequest();
  }, []);

  useEffect(() => {
    async function makeRequest() {
      const res = await fetch("http://localhost:3001/answers");
      const json = await res.json();
      setAnswers(json);
    }
    makeRequest();
  }, []);

  const onSubmit = async (item) => {
    const {
      author: { name: author },
      ...rest
    } = item;
    const id = questions.length + 1;
    const data = { id, author, ...rest };
    // TODO: handle errors
    await sendData("http://localhost:3001/questions", data);
    setQuestions([...questions, data]);
  };

  const onSubmitAnswer = async (item) => {
    const {
      author: { name: author },
      ...rest
    } = item;
    const id = answers.length + 1;
    const data = { id, author, ...rest };
    // TODO: handle errors
    await sendData("http://localhost:3001/answers", data);
    setAnswers([...answers, data]);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="m-auto min-w-min max-w-5xl text-gray-900">
        <header className="m-4 text-center">
          <h1 className="text-2xl font-bold">Stack Overflow Clone</h1>
        </header>
        <main className="m-2 w-full flex flex-wrap flex-row">
          <QuestionsList
            list={questions}
            answers={answers}
            submitAnswer={onSubmitAnswer}
          />
          <AnswersList list={answers} questions={questions} />
          <QuestionForm submit={onSubmit} />
        </main>
      </div>
    </div>
  );
}

export default App;
