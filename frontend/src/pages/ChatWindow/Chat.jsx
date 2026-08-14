import Sidebar from "../../components/Sidebar";
import ChatWindow from "../../components/ChatWindow";

const Chat = () => {
  return (
    <main className="flex h-screen w-full bg-zinc-950 text-white">
      <Sidebar />

      <ChatWindow />
    </main>
  );
};

export default Chat;
