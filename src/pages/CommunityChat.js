import React, { useState, useEffect } from "react";
import Navbar2 from "../layout/Navbar2";
import { useUser } from "../users/UserContext";
import axios from "axios";

const DiscussionComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [replies, setReplies] = useState("");
  const { userDetails } = useUser();
  const [newQuestion, setNewQuestion] = useState("");

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    console.log("rendersssssss");
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/questions/question`
      );
      const responseWithReply = await Promise.all(
        response.data.map(async (question) => {
          const reply = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/replies/${question.id}`
          );
          return {
            ...question,
            reply: reply.data,
          };
        })
      );
      console.log(responseWithReply);
      setQuestions(responseWithReply);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const postReplies = async (questionId, replies) => {
    console.log("redfdfdf");
    console.log(replies);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/replies`, {
        content: replies,
        user: { id: userDetails.id },
        question: { id: questionId },
      });
      const updatedQuestions = questions.map((q) => {
        if (q.id === questionId) {
          return { ...q, replyContent: "" };
        }
        return q;
      });
      setQuestions(updatedQuestions);
      fetchQuestions();
    } catch (error) {
      console.error(
        `Error fetching replies for question ${questionId}:`,
        error
      );
    }
  };

  const postQuestion = async () => {
    console.log("render");
    if (newQuestion) {
      console.log(newQuestion);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/api/questions`,
          {
            content: newQuestion,
            user: {
              id: userDetails.id,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
          fetchQuestions();
        if (response.ok) {
          const savedQuestion = await response.json();
          setQuestions([savedQuestion, ...questions]);
          setNewQuestion("");
        } else {
          console.error("Error posting question:", response.statusText);
        }
      } catch (error) {
        console.error("Error posting question:", error);
      }
    }
  };

  return (
    <div>
      <Navbar2 />
      <div>
        <div className="welcome-message">Welcome to the Community !!</div>

        <div className="discussion-container">
          <div className="action-buttons">
            <input
              type="text"
              id="new-question"
              placeholder="Ask a question..."
              value={newQuestion}
              // disabled={!newQuestion.trim()}
              onChange={(e) => setNewQuestion(e.target.value)}
            />
            <button onClick={() => postQuestion()}>Post</button>
            {/* <button onClick={() => search()}>Search</button> */}
          </div>
          <div style={{ height: "100vh", width: "90%" }}>
            {questions
              .slice()
              .reverse()
              .map((question) => (
                <div
                  style={{
                    padding: "10px",
                    backgroundColor: "whitesmoke",
                    border: "2px solid black",
                    margin: "10px",
                  }}
                >
                  <label style={{ display: "inline-block", marginRight: "5px" }}>Name: {question.user.name}</label>
    {question.user.role === "teacher" && (
        <span style={{ color: "blue", display: "inline", marginLeft: "5px" }} title="Teacher">&#x2713;</span>
    )}
    <br />
                  <label>question:{question.content}</label>
                  <textarea
                    style={{ width: "100%" }}
                    value={question.replyContent}
                    onChange={(e) => {
                      // Update replyContent state for the specific question
                      const updatedQuestions = questions.map((q) => {
                        if (q.id === question.id) {
                          return { ...q, replyContent: e.target.value };
                        }
                        return q;
                      });
                      setQuestions(updatedQuestions);
                    }}
                  />
                  <button
                    onClick={() =>
                      postReplies(question.id, question.replyContent)
                    }
                    // disabled={!question.replyContent.trim()}
                  >
                    reply
                  </button>
                  {question.reply &&
                    question.reply
                      .slice()
                      .reverse()
                      .map((rep) => (
                        <div
                          style={{
                            backgroundColor: "white",
                            padding: "5px",
                            margin: "5px",
                          }}
                        >
                          <label style={{ display: "inline-block", marginRight: "5px" }}>Name: {rep.user.name}</label>{rep.user.role === "teacher" && (
        <span style={{ color: "blue", display: "inline", marginLeft: "5px" }} title="Teacher">&#x2713;</span>
    )}
                          <label>Reply Content: {rep.content}</label>
                        </div>
                      ))}
                </div>
              ))}
          </div>
          <div id="discussion">{/* Render questions and replies here */}</div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionComponent;
