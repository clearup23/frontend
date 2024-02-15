import Navbar2 from "../layout/Navbar2";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import { useUser } from "../users/UserContext";

const ChatsPage = (props) => {
  const { userDetails, setUserData } = useUser();
  const name = userDetails.name;
  const pass = userDetails.password;

  console.log(name, pass);
  return (
    <div>
      <Navbar2 />
      <div style={{ height: "100vh", width: "100vw" }}>
        {userDetails.role === "teacher" ? (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "35px",
              }}
            >
              <button
                style={{ backgroundColor: "#1589FF", color: "white" }}
                onClick={() =>
                  (window.location.href = "https://meet.google.com")
                }
              >
                Schedule Meet
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
        <PrettyChatWindow
          projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
          username={name} // adam
          secret={pass} // pass1234
          style={{ height: "100%" }}
        />
      </div>
    </div>
  );
};

export default ChatsPage;
