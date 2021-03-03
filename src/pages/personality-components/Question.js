import React, { useState } from "react";
import TestButton from "./TestButton";
import questions from "./questions";
import SubmitButtton from "./SubmitButton";
import { useHistory } from "react-router-dom";

function Question(props) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [answers, setAnswers] = useState({});
  const history = useHistory();

  const results = {
    extrovert: ["false", "false", "true", "false", "true"],
    introvert: ["true", "true", "false", "true", "false"],
    omnivert: ["neutral", "neutral", "neutral", "neutral", "neutral"],
  };

  function getArray(arr) {
    let introvert = 0;
    let extrovert = 0;
    let omnivert = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].answer === results.introvert[i]) {
        introvert++;
      } else if (arr[i].answer === results.extrovert[i]) {
        extrovert++;
      } else if (arr[i].answer === results.omnivert[i]) {
        omnivert++;
      }
    }
    if (introvert === 5) {
      props.setResult("Introvert");
    } else if (extrovert === 5) {
      props.setResult("Extrovert");
    } else if (omnivert === 5) {
      props.setResult("Omnivert");
    }
  }

  return (
    <div>
      {questions.map((question, index) => {
        return (
          <div>
            <li key={index}>{question.question}</li>
            <button
              key={index}
              //   className={buttonClicked ? "buttonTrue" : "buttonFalse"}
              className={
                answers[question.id] === "false" ? "buttonTrue" : "buttonFalse"
              }
              onClick={(e) => {
                question.answer = e.target.value;
                setAnswers((answers) => {
                  return {
                    ...answers,
                    [question.id]: e.target.value,
                  };
                });
                setButtonClicked(true);
              }}
              value="false"
            >
              FALSE
            </button>
            <button
              key={index}
              //   className={buttonClicked ? "buttonTrue" : "buttonFalse"}
              className={
                answers[question.id] === "neutral"
                  ? "buttonTrue"
                  : "buttonFalse"
              }
              onClick={(e) => {
                question.answer = e.target.value;
                setAnswers((answers) => {
                  return {
                    ...answers,
                    [question.id]: e.target.value,
                  };
                });
                setButtonClicked(true);
              }}
              value="neutral"
            >
              NEUTRAL
            </button>
            <button
              key={index}
              //   className={buttonClicked ? "buttonTrue" : "buttonFalse"}
              className={
                answers[question.id] === "true" ? "buttonTrue" : "buttonFalse"
              }
              onClick={(e) => {
                question.answer = e.target.value;
                setAnswers((answers) => {
                  return {
                    ...answers,
                    [question.id]: e.target.value,
                  };
                });
                setButtonClicked(true);
              }}
              value="true"
            >
              TRUE
            </button>
          </div>
        );
      })}
      <button onClick={() => getArray(questions)}>SUBMIT</button>
    </div>
  );
}

export default Question;
