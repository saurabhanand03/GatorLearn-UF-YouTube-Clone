import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { QUESTIONS_DATA, GPT_API_KEY } from "../../../constant";

const QuestionItem = ({ info }) => {
  const [answerVisibility, setAnswerVisibility] = useState(false);

  return (
    <div className="p-2 flex items-start gap-2 cursor-default">
      <h1 className="h-8 w-8 flex justify-center items-center border-2 border-redMain rounded-full">
        {info?.author.slice(0, 1)}
      </h1>

      <div className="flex-grow w-fit">
        <p className="text-sm">
          @{info?.author}
          <span className="px-2 text-xs opacity-80">{info?.postedAt}</span>
        </p>

        <p className="py-1 break-all">{info?.question}</p>

        {info.answers.length > 0 && (
          <p
            className="text-sm"
            onClick={() => setAnswerVisibility(!answerVisibility)}
          >
            {info?.answers.length > 1
              ? info?.answers.length + " answers"
              : info?.answers.length + " answer"}
            <FontAwesomeIcon
              className="ml-2 text-xs text-redMain"
              icon={answerVisibility ? faChevronUp : faChevronDown}
            />
          </p>
        )}

        <div className="border-l-2 border-blackSecondary">
          {answerVisibility &&
            info?.answers.map((answer) => {
              return <AnswerItem key={answer.id} info={answer} />;
            })}
        </div>
      </div>
    </div>
  );
};

const AnswerItem = ({ info }) => {
  const [answerVisibility, setAnswerVisibility] = useState(false);

  return (
    <div className="p-2 flex items-start gap-2 cursor-default">
      <h1 className="h-8 w-8 flex justify-center items-center border-2 border-redMain rounded-full">
        {info?.author.slice(0, 1)}
      </h1>

      <div className="flex-grow w-fit">
        <p className="text-sm">
          @{info?.author}
          <span className="px-2 text-xs opacity-80">{info?.postedAt}</span>
        </p>
        <p className="py-1 break-all">{info?.answer}</p>
      </div>
    </div>
  );
};

export default function QuestionsBox() {
  const [questionText, setQuestionText] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestionsData();
  }, []);

  const getQuestionsData = () => {
    setQuestions(QUESTIONS_DATA);
  };

  const addQuestion = async () => {
    const questionInfo = {
      id: Math.floor(Math.random() * (200 - 150 + 1) + 150),
      author: "BingBong",
      question: questionText,
      answers: [],
      postedAt: "Now",
    };

    questions.unshift(questionInfo);
    setQuestionText("");
    console.log(questions);

    const chatGPTAnswer = await processMessageToChatGPT(questionText);

    const answerInfo = {
      id: Math.floor(Math.random() * (200 - 150 + 1) + 150),
      author: "ChatGPT",
      answer: chatGPTAnswer,
      postedAt: "Now",
    };

    questions[0].answers.push(answerInfo);
    console.log(questions);
    setQuestions(questions);
    console.log(questions);
  };

  async function processMessageToChatGPT(questionText) {

    const systemMessage = {
      "role": "system",
      "content": "Speak like a college professor. Explain all concepts in the simplest way possible. Keep your answer to one or two sentences.",
    }

    const userQuestion = {
      role: "user",
      content: questionText,
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [systemMessage, userQuestion]
    }

    return fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + GPT_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      console.log(data.choices[0].message.content);
      return data.choices[0].message.content;
    });
  };

  return (
    <div className="m-1 p-2">
      <h1 className="text-lg">{questions.length + " Questions"}</h1>

      <div className="py-4 flex flex-col gap-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addQuestion();
          }}
        >
          <input
            className="w-full p-2 bg-transparent border-b-[1px] border-blackSecondary focus:outline-0"
            type="text"
            placeholder="Ask a question"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
        </form>

        {questionText !== "" && (
          <div className="flex items-center gap-2 self-end">
            <button
              className="p-2 text-sm bg-blackSecondary hover:bg-blackSecondary/80 rounded-full"
              onClick={() => setQuestionText("")}
            >
              Cancel
            </button>

            <button
              className="p-2 text-sm bg-redMain hover:bg-redMain/80 rounded-full"
              onClick={() => addQuestion()}
            >
              Post Question
            </button>
          </div>
        )}
      </div>

      <div className="w-full p-2 overflow-y-scroll">
        {questions.map((question) => {
          return <QuestionItem key={question.id} info={question} />;
        })}
      </div>
    </div>
  );
}
