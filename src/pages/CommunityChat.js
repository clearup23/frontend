import React, { useState, useEffect } from "react";
import Navbar2 from "../layout/Navbar2";
import { useUser } from "../users/UserContext";
import axios from "axios";
import "./CommunityChat.css"; // Import CSS file

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
        "http://localhost:8082/api/questions/question"
      );
      const responseWithReply = await Promise.all(
        response.data.map(async (question) => {
          const reply = await axios.get(
            `http://localhost:8082/api/replies/${question.id}`
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
      const response = await axios.post("http://localhost:8082/api/replies", {
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
          "http://localhost:8082/api/questions",
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
              className="question-input"
              placeholder="Ask a question..."
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
            />
            <button className="post-button" onClick={() => postQuestion()}>
              Post
            </button>
          </div>
          <div style={{ height: "100vh", width: "90%" }}>
            {questions
              .slice()
              .reverse()
              .map((question) => (
                <div
                  className="question-thread"
                  style={{
                    margin: "10px",
                  }}
                >
                  {question.user && (
                    <label>
                      {userDetails.role === "teacher" ? (
                        <>
                          User: {question.user.name}{" "}
                          {<span className="emoji">✔</span>}
                        </>
                      ) : (
                        <>User: {question.user.name}</>
                      )}
                    </label>
                  )}
                  <label>Question: {question.content}</label>
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
                  >
                    Reply
                  </button>
                  {question.reply &&
                    question.reply
                      .slice()
                      .reverse()
                      .map((rep) => (
                        <div className="reply-thread">
                          <label>User: {rep.user.name}</label>
                          <label>Reply: {rep.content}</label>
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
