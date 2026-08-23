import { useState } from "react";
import { getAllUser, getCurrentUser } from "../api";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const Sidebar = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const displayUser = async () => {
    try {
      const response = await getAllUser();
      const data = response.userData;
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log("failed to load users.", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    displayUser();
  }, []);

  return (
    <aside className="flex h-full w-full max-w-sm flex-col border-r border-zinc-800 bg-zinc-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Convo<span className="text-cyan-400">X</span>
          </h1>

          <p className="mt-0.5 text-xs text-zinc-500">Messages</p>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-xl font-semibold text-zinc-950 transition hover:bg-cyan-300"
          title="New conversation"
        >
          +
        </button>
      </div>

      {/* Current User */}
      <div className="border-b border-zinc-800 p-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-11 w-11 items-center uppercase justify-center rounded-full bg-cyan-400 font-semibold text-zinc-950">
              {/* change this to get only current / login user  */}
              {users[0]?.username[0]}
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="truncate text-sm font-semibold">
              {users[0]?.username}
            </h2>

            <p className="text-xs text-green-400">Online</p>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
            title="Settings"
          >
            ⚙
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 px-4 transition focus-within:border-cyan-400">
          <span className="text-zinc-500">🔍</span>

          <input
            type="text"
            placeholder="Search users..."
            className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-zinc-600"
          />
        </div>
      </div>

      {/* Conversations Heading */}
      <div className="flex items-center justify-between px-5 pb-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Conversations
        </h3>

        <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-500">
          {users.length > 0 ? users.length : 0}
        </span>
      </div>

      {/* Empty User List */}
      {isLoading ? (
        <div className="flex flex-1 items-center justify-center px-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800 text-xl">
              💬
            </div>

            <h4 className="text-sm font-medium text-zinc-300">
              No Conversation
            </h4>

            <p className="mt-1 text-xs leading-relaxed text-zinc-600">
              Search for someone to start a new conversation.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 items-start justify-start px-6">
          <div className=" w-full text-center">
            {users.map((user) => {
              return (
                <div
                  className="flex items-center gap-3 border-b border-b-gray-800"
                  key={user._id}
                >
                  <div className="relative">
                    <div className="flex h-11 w-11 items-center uppercase justify-center rounded-full bg-cyan-400 font-semibold text-zinc-950">
                      {user.username[0]}
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm text-left font-semibold">
                      <h2 className="py-1 px-2  capitalize my-1">
                        {user.username}
                        <p className="text-xs text-green-400">Online</p>
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* Sidebar Footer */}
      <div className="border-t border-zinc-800 p-3">
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-zinc-800">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800">
            ⚙
          </div>

          <div>
            <p className="text-sm font-medium">Settings</p>

            <p className="text-xs text-zinc-500">Account & preferences</p>
          </div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
