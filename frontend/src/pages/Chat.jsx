import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import socket from "../socket/socket";
import { useAuth } from "../context/AuthContext";

const Chat = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      socket.connect();

      socket.on("connect", () => {
        console.log("socket connected:", socket.id);
      });
    }

    if (!user) {
      return () => {
        socket.disconnect();
      };
    }
  }, []);

  return (
    <main className="flex h-screen w-full bg-zinc-950 text-white">
      <Sidebar />

      <ChatWindow />
    </main>
  );
};

export default Chat;
