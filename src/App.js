import { useEffect, useState } from "react";
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

  return (
    <div className="App">
      <header className="text-center">
        <h1 className="text-2xl">Stackoverflow clone</h1>
      </header>
      <main>
        <QuestionsList list={questions} />
      </main>
    </div>
  );
}

export default App;
