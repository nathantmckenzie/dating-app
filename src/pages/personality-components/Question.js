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
    <div class="container">
      <h2>Questionaire</h2>
      <br />

      {questions.map((question) => {
        return (
          <div>
            <h4 key={question.id}>{question.question}</h4>
            <label className="lab-up">Agree</label>
            <input
              type="button"
              name="3"
              className={
                answers[question.id] === "strong-agree"
                  ? "strong-agree-clicked"
                  : "strong-agree"
              }
              value="strong-agree"
              onClick={(e) => {
                question.answer = e.target.value;
                setAnswers((answers) => {
                  return {
                    ...answers,
                    [question.id]: e.target.value,
                  };
                });
              }}
            />
            <span style={{ margin: "10px" }}></span>
            <input
              type="button"
              name="3"
              className="agree"
              value="agree"
              className={
                answers[question.id] === "agree" ? "agree-clicked" : "agree"
              }
              value="agree"
              onClick={(e) => {
                question.answer = e.target.value;
                setAnswers((answers) => {
                  return {
                    ...answers,
                    [question.id]: e.target.value,
                  };
                });
              }}
            />
            <span style={{ margin: "10px" }}></span>
            <input
              type="button"
              name="3"
              className={
                answers[question.id] === "intermediate"
                  ? "intermediate-clicked"
                  : "intermediate"
              }
              value="intermediate"
              onClick={(e) => {
                question.answer = e.target.value;
                setAnswers((answers) => {
                  return {
                    ...answers,
                    [question.id]: e.target.value,
                  };
                });
              }}
            />
            <span style={{ margin: "10px" }}></span>
            <input
              type="button"
              name="3"
              className={
                answers[question.id] === "disagree"
                  ? "disagree-clicked"
                  : "disagree"
              }
              value="disagree"
              onClick={(e) => {
                question.answer = e.target.value;
                setAnswers((answers) => {
                  return {
                    ...answers,
                    [question.id]: e.target.value,
                  };
                });
              }}
            />
            <span style={{ margin: "10px" }}></span>
            <input
              type="button"
              name="3"
              className={
                answers[question.id] === "strong-disagree"
                  ? "strong-disagree-clicked"
                  : "strong-disagree"
              }
              value="strong-disagree"
              onClick={(e) => {
                question.answer = e.target.value;
                setAnswers((answers) => {
                  return {
                    ...answers,
                    [question.id]: e.target.value,
                  };
                });
              }}
              checked
            />
            <label className="lab-up">Disagree</label>
          </div>
        );
      })}
    </div>
  );
}

export default Question;
