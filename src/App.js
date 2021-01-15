import { useEffect, useState } from "react";
import QuestionForm from "./components/QuestionForm";
import QuestionsList from "./components/QuestionsList";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function makeRequest() {
      const res = await fetch("http://localhost:3001/questions");
      const json = await res.json();
      setQuestions(json);
    }
    makeRequest();
  }, []);

  const onSubmit = (item) => {
    const {
      author: { name: author },
      ...rest
    } = item;
    const id = questions.length + 1;
    setQuestions([...questions, { id, author, ...rest }]);
  };

  console.log(questions);

  return (
    <div className="App">
      <header className="text-center">
        <h1 className="text-2xl">Stackoverflow clone</h1>
      </header>
      <main>
        <QuestionForm submit={onSubmit} />
        <QuestionsList list={questions} />
      </main>
    </div>
  );
}

export default App;
