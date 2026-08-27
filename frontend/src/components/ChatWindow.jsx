import { useEffect, useState } from "react";
import socket from "../socket/socket";

const ChatWindow = ({ selectedUser }) => {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleMessage = (message) => {
      console.log("Received Message:", message);
      setMessages((prevMessage) => [...prevMessage, message]);
    };
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  const handleChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    socket.emit("message", inputMessage);
    setInputMessage("");
  };

  return (
    <section className="flex min-w-0 flex-1 flex-col bg-zinc-950 text-white">
      {/* Header - */}
      {selectedUser && (
        <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-5 py-4">
          {/* Selected User */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400 font-semibold uppercase text-zinc-950">
                {selectedUser.username?.[0]}
              </div>

              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-zinc-900 bg-green-400" />
            </div>

            <div>
              <h2 className="font-semibold capitalize">
                {selectedUser.username}
              </h2>

              <p className="text-xs text-green-400">Online</p>
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-2">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
              title="Search"
            >
              🔍
            </button>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
              title="More"
            >
              ⋮
            </button>
          </div>
        </header>
      )}

      {/* Chat Content */}
      {selectedUser ? (
        <>
          {/* Messages */}
          <main className="flex-1 overflow-y-auto px-5 py-6">
            <div className="mx-auto flex max-w-4xl flex-col gap-5">
              {messages.map((message) => (
                <div
                  key={message.id || message.createdAt}
                  className="flex justify-end"
                >
                  <div className="max-w-[70%]">
                    <div className="rounded-2xl rounded-br-sm bg-cyan-400 px-4 py-3 text-zinc-950">
                      <p className="text-sm">{message.text}</p>
                    </div>

                    <div className="mt-1 flex justify-end gap-1 px-1">
                      <span className="text-[11px] text-zinc-600">
                        {new Date(message.createdAt).toLocaleTimeString()}
                      </span>

                      <span className="text-[11px] text-cyan-500">✓</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* Message Input */}
          <footer className="border-t border-zinc-800 bg-zinc-900/80 p-4">
            <form action="" onSubmit={handleSubmit}>
              <div className="mx-auto flex max-w-4xl items-center gap-3">
                {/* Attachment */}
                <button
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
                  title="Attach file"
                  type="button"
                >
                  📎
                </button>

                {/* Message Input */}
                <input
                  type="text"
                  className="flex-1 rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                  value={inputMessage}
                  placeholder={`Message ${selectedUser.username}...`}
                  onChange={handleChange}
                />

                {/* Send Button */}
                <button
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-semibold text-zinc-950 transition hover:bg-cyan-300"
                  title="Send message"
                  type="submit"
                >
                  ➤
                </button>
              </div>
            </form>
          </footer>
        </>
      ) : (
        /* No User Selected */
        <main className="flex flex-1 items-center justify-center">
          <div className="px-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 text-3xl">
              💬
            </div>

            <h2 className="text-lg font-semibold text-zinc-300">
              No conversation selected
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-zinc-600">
              Select a user from the sidebar to start a new conversation.
            </p>
          </div>
        </main>
      )}
    </section>
  );
};

export default ChatWindow;
