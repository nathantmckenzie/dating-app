import React, { useState } from "react";
import Question from "./personality-components/Question";
import ResultsPage from "./personality-components/ResultsPage";

export default function PersonalityQuiz() {
  const [result, setResult] = useState("FINISH THE TEST");

  return (
    <div>
      <Question result={result} setResult={setResult} />
      <ResultsPage result={result} setResult={setResult} />
    </div>
  );
}
