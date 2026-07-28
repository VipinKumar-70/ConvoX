import { useEffect, useState } from "react";
import { api } from "./api/api";

function App() {
  const [form, setform] = useState();
  const [message, setmessage] = useState();

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

  return (
    <>
      <section id="center" className="p-5">
        <h1>Testing Connection....</h1>
        <div>
          <input
            type="text"
            placeholder="Enter your message"
            className="message-box border-2 p-2"
          />
          <button className="message-sent-btn p-2 bg-blue-500 mx-2 border-2">
            Submit
          </button>
        </div>
        <div className="message-container"></div>
      </section>
    </>
  );
}

export default App;
