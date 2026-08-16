import { useEffect } from "react";
import socket from "../socket/socket";

const ChatWindow = () => {
  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("socket connected:", socket.id);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <section className="flex min-w-0 flex-1 flex-col bg-zinc-950 text-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400 font-semibold text-zinc-950">
              R
            </div>

            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-zinc-900 bg-green-400" />
          </div>

          <div>
            <h2 className="font-semibold">Rahul Sharma</h2>

            <p className="text-xs text-green-400">Online</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-white">
            🔍
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-white">
            ⋮
          </button>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto px-5 py-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-5">
          {/* Date */}
          <div className="flex justify-center">
            <span className="rounded-full bg-zinc-900 px-4 py-1.5 text-xs text-zinc-500">
              Today
            </span>
          </div>

          {/* Received Message */}
          <div className="flex items-end gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400 text-xs font-semibold text-zinc-950">
              R
            </div>

            <div className="max-w-[70%]">
              <div className="rounded-2xl rounded-bl-sm bg-zinc-800 px-4 py-3">
                <p className="text-sm">Hey! How are you doing?</p>
              </div>

              <p className="mt-1 px-1 text-[11px] text-zinc-600">10:24 AM</p>
            </div>
          </div>

          {/* Sent Message */}
          <div className="flex justify-end">
            <div className="max-w-[70%]">
              <div className="rounded-2xl rounded-br-sm bg-cyan-400 px-4 py-3 text-zinc-950">
                <p className="text-sm">I'm doing great! Working on ConvoX.</p>
              </div>

              <div className="mt-1 flex justify-end gap-1 px-1">
                <span className="text-[11px] text-zinc-600">10:25 AM</span>

                <span className="text-[11px] text-cyan-500">✓✓</span>
              </div>
            </div>
          </div>

          {/* Received Message */}
          <div className="flex items-end gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400 text-xs font-semibold text-zinc-950">
              R
            </div>

            <div className="max-w-[70%]">
              <div className="rounded-2xl rounded-bl-sm bg-zinc-800 px-4 py-3">
                <p className="text-sm">
                  That's awesome! Are you adding real-time messaging?
                </p>
              </div>

              <p className="mt-1 px-1 text-[11px] text-zinc-600">10:26 AM</p>
            </div>
          </div>

          {/* Sent Message */}
          <div className="flex justify-end">
            <div className="max-w-[70%]">
              <div className="rounded-2xl rounded-br-sm bg-cyan-400 px-4 py-3 text-zinc-950">
                <p className="text-sm">Yes! I'm using WebSockets for it.</p>
              </div>

              <div className="mt-1 flex justify-end gap-1 px-1">
                <span className="text-[11px] text-zinc-600">10:27 AM</span>

                <span className="text-[11px] text-cyan-500">✓✓</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Message Input */}
      <footer className="border-t border-zinc-800 bg-zinc-900/80 p-4">
        <div className="mx-auto flex max-w-4xl items-center gap-3">
          <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-zinc-400 hover:bg-zinc-800 hover:text-white">
            📎
          </button>

          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-cyan-400"
          />

          <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-semibold text-zinc-950 hover:bg-cyan-300">
            ➤
          </button>
        </div>
      </footer>
    </section>
  );
};

export default ChatWindow;
