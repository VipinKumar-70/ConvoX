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
    <main className="flex h-screen w-full bg-zinc-950 text-white">
      <Sidebar selectedUser={selectedUser} onSelectedUser={setSelectedUser} />

      <ChatWindow selectedUser={selectedUser} />
    </main>
  );
};

export default Chat;
