import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import socket from "../socket/socket";
import { useAuth } from "../context/AuthContext";

const Chat = () => {
  const { user } = useAuth();
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    if (!user) {
      return () => {
        socket.disconnect();
      };
    }

    if (user) {
      socket.connect();

      socket.on("connect", () => {
        console.log("socket connected:", socket.id);
      });
    }
  }, [user]);

  return (
    <main className="flex h-[100dvh] w-full overflow-hidden bg-zinc-950 text-white">
      <div
        className={`h-full w-full md:block md:w-80 lg:w-96 ${
          selectedUser ? "hidden" : "block"
        }`}
      >
        <Sidebar selectedUser={selectedUser} onSelectedUser={setSelectedUser} />
      </div>

      <div
        className={`h-full min-w-0 flex-1 md:block ${
          selectedUser ? "block" : "hidden"
        }`}
      >
        <ChatWindow
          selectedUser={selectedUser}
          onBack={() => setSelectedUser(null)}
        />
      </div>
    </main>
  );
};

export default Chat;
