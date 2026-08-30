import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api";
import { useAuth } from "../context/AuthContext";

const Sidebar = ({ allUsers, selectedUser, isLoading, onlineUsers }) => {
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();

      setUser(null);

      navigate("/login");
    } catch (error) {
      console.log("failed to logout.", error);
    }
  };

  return (
    <aside className="flex h-full w-full flex-col border-r border-zinc-800 bg-zinc-900">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3 sm:px-5 sm:py-4">
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

      <div className="border-b border-zinc-800 p-3 sm:p-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400 font-semibold uppercase text-zinc-950">
              {user?.username?.[0]}
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="truncate text-sm font-semibold capitalize">
              {user?.username}
            </h2>

            <p className="text-xs text-green-400">Online</p>
          </div>
        </div>
      </div>

      {/* Search */}

      <div className="px-3 py-3 sm:px-4 sm:py-4">
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
          {allUsers.length}
        </span>
      </div>

      {/* User List */}

      {isLoading ? (
        <div className="flex flex-1 items-start justify-start overflow-y-auto px-3 sm:px-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800 text-xl">
              💬
            </div>

            <h4 className="text-sm font-medium text-zinc-300">
              Loading users...
            </h4>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 items-start justify-start overflow-y-auto px-6">
          <div className="w-full">
            {allUsers.map((otherUser) => {
              const isSelected = selectedUser?._id === otherUser._id;

              const isOnline = onlineUsers.includes(String(otherUser._id));
              return (
                <div
                  key={otherUser._id}
                  onClick={() => navigate(`/chatWindow/${otherUser._id}`)}
                  className={`flex cursor-pointer items-center gap-3 border-b border-zinc-800 p-3 transition ${
                    isSelected ? "bg-zinc-800" : "hover:bg-zinc-800/70"
                  }`}
                >
                  {/* Avatar */}

                  <div className="relative shrink-0">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400 font-semibold uppercase text-zinc-950">
                      {otherUser.username?.[0]}
                    </div>
                  </div>

                  {/* User */}

                  <div className="min-w-0 flex-1">
                    <h2 className="truncate text-left text-sm font-semibold capitalize">
                      {otherUser.username}
                    </h2>

                    <p
                      className={`text-left text-xs ${
                        isOnline ? "text-green-400" : "text-zinc-500"
                      }`}
                    >
                      {isOnline ? "Online" : "Offline"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Footer */}

      <div className="border-t border-zinc-800 p-3">
        <div className="flex flex-col gap-2">
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-zinc-800">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800">
              ⚙
            </div>

            <div>
              <p className="text-sm font-medium">Settings</p>

              <p className="text-xs text-zinc-500">Account & preferences</p>
            </div>
          </button>

          <button
            className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-red-600 p-2 text-white transition hover:bg-red-800"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
