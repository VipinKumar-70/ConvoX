import { useEffect, useState } from "react";
import socket from "../socket/socket";

const ChatWindow = ({ selectedUser, onBack }) => {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleMessage = (message) => {
      console.log("Received Message:", message);

      setMessages((prevMessages) => [...prevMessages, message]);
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

    if (!inputMessage.trim()) return;

    socket.emit("message", inputMessage.trim());

    setInputMessage("");
  };

  return (
    <section className="flex h-full min-h-0 min-w-0 flex-1 flex-col bg-zinc-950 text-white">
      {selectedUser ? (
        <>
          {/* HEADER*/}

          <header className="flex shrink-0 items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-3 py-3 sm:px-5 sm:py-4">
            {/* Selected User */}

            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
              {/* Back button */}

              <button
                onClick={onBack}
                type="button"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xl text-zinc-400 transition hover:bg-zinc-800 hover:text-white md:hidden"
                title="Back"
              >
                ←
              </button>

              {/* Avatar */}

              <div className="relative shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 font-semibold uppercase text-zinc-950 sm:h-11 sm:w-11">
                  {selectedUser.username?.[0]}
                </div>

                {/* Dynamic presence dot */}

                <span
                  className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-zinc-900 sm:h-3 sm:w-3  bg-green-400`}
                />
              </div>

              {/* Username */}

              <div className="min-w-0">
                <h2 className="truncate text-sm font-semibold capitalize sm:text-base">
                  {selectedUser.username}
                </h2>

                <p className={`text-xs text-green-400`}>online</p>
              </div>
            </div>

            {/* Header Actions */}

            <div className="flex shrink-0 items-center gap-1 sm:gap-2">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-800 hover:text-white sm:h-10 sm:w-10"
                title="Search"
              >
                🔍
              </button>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-800 hover:text-white sm:h-10 sm:w-10"
                title="More"
              >
                ⋮
              </button>
            </div>
          </header>

          {/* MESSAGES */}

          <main className="min-h-0 flex-1 overflow-y-auto px-3 py-4 sm:px-5 sm:py-6">
            {messages.length === 0 ? (
              <div className="flex h-full items-center justify-center">
                <div className="px-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 text-2xl">
                    👋
                  </div>

                  <h2 className="text-base font-semibold text-zinc-300 sm:text-lg">
                    Start a conversation
                  </h2>

                  <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-zinc-600 sm:text-sm">
                    Send a message to {selectedUser.username} and start
                    chatting.
                  </p>
                </div>
              </div>
            ) : (
              <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 sm:gap-5">
                {messages.map((message, index) => (
                  <div
                    key={message.id || message.createdAt || index}
                    className="flex w-full justify-end"
                  >
                    <div className="max-w-[85%] sm:max-w-[70%]">
                      <div className="rounded-2xl rounded-br-sm bg-cyan-400 px-4 py-3 text-zinc-950">
                        <p className="break-words text-sm">{message.text}</p>
                      </div>

                      <div className="mt-1 flex justify-end gap-1 px-1">
                        <span className="text-[11px] text-zinc-600">
                          {message.createdAt
                            ? new Date(message.createdAt).toLocaleTimeString(
                                [],
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                },
                              )
                            : ""}
                        </span>

                        <span className="text-[11px] text-cyan-500">✓</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>

          {/* MESSAGE INPUT */}

          <footer className="shrink-0 border-t border-zinc-800 bg-zinc-900/90 p-2 sm:p-4">
            <form onSubmit={handleSubmit}>
              <div className="mx-auto flex w-full max-w-4xl items-center gap-2 sm:gap-3">
                {/* Attachment */}

                <button
                  type="button"
                  className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-zinc-800 hover:text-white sm:flex"
                  title="Attach file"
                >
                  📎
                </button>

                {/* Input */}

                <input
                  type="text"
                  value={inputMessage}
                  onChange={handleChange}
                  placeholder={`Message ${selectedUser.username}...`}
                  className="min-w-0 flex-1 rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400 sm:px-4"
                />

                {/* Send */}

                <button
                  type="submit"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-semibold text-zinc-950 transition hover:bg-cyan-300 active:scale-95"
                  title="Send message"
                >
                  ➤
                </button>
              </div>
            </form>
          </footer>
        </>
      ) : (
        /* NO USER SELECTED */

        <main className="hidden flex-1 items-center justify-center md:flex">
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
