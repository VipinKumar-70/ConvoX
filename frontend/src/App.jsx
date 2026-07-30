import { useEffect, useState } from "react";
import { api } from "./api/api";
import socket from "./socket/socket";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  // Test API connection
  useEffect(() => {
    async function testConnection() {
      try {
        const data = await api("/test");
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    testConnection();
  }, []);

  // Socket connection and message listener
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("message", (message) => {
      setChatMessages((previousMessages) => [...previousMessages, message]);
    });

    return () => {
      socket.off("connect");
      socket.off("message");
    };
  }, []);

  function sendMessage() {
    socket.emit("message", inputMessage);

    setInputMessage("");
  }

  return (
    <section className="p-5">
      <h1>Testing Connection....</h1>

      <div>
        <input
          type="text"
          placeholder="Enter your message"
          className="border-2 p-2"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />

        <button className="p-2 bg-blue-500 mx-2 border-2" onClick={sendMessage}>
          Submit
        </button>
      </div>

      <div className="message-container">
        {chatMessages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </section>
  );
}

export default App;
