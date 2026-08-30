import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import socket from "../socket/socket";
import { useAuth } from "../context/AuthContext";
import { getAllUser } from "../api";

const Chat = () => {
  const { user } = useAuth();
  const { userId } = useParams();

  const navigate = useNavigate();

  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (!user) return;
    const displayUser = async () => {
      try {
        const response = await getAllUser();
        const data = response.userData;

        // i want to remove login user from the all user list
        const filterUser = data.filter((item) => item._id !== user?._id);

        setAllUsers(filterUser);
        console.log("All User:", filterUser);
      } catch (error) {
        console.log("failed to load users.", error);
      } finally {
        setIsLoading(false);
      }
    };
    displayUser();
  }, [user]);

  // FIND SELECTED USER FROM URL
  const selectedUser = allUsers.find((item) => item._id === userId);

  // SOCKET CONNECTION + PRESENCE
  useEffect(() => {
    if (!user) {
      return;
    }

    const handleConnect = () => {
      console.log("Socket connected:", socket.id);
    };

    // Listen for onlineUsers
    const handleOnlineUsers = (users) => {
      console.log("Online users:", users);

      setOnlineUsers(users);
    };

    socket.on("connect", handleConnect);

    // Listen for online users
    socket.on("onlineUsers", handleOnlineUsers);

    socket.connect();

    return () => {
      socket.off("connect", handleConnect);
      socket.off("onlineUsers", handleOnlineUsers);
      socket.disconnect();
    };
  }, [user]);

  const handleBack = () => {
    navigate("/chatWindow");
  };

  return (
    <main className="flex h-[100dvh] w-full overflow-hidden bg-zinc-950 text-white">
      <div
        className={`h-full w-full md:block md:w-80 lg:w-96 ${
          selectedUser ? "hidden" : "block"
        }`}
      >
        <Sidebar
          allUsers={allUsers}
          selectedUser={selectedUser}
          isLoading={isLoading}
          onlineUsers={onlineUsers}
        />
      </div>

      <div
        className={`h-full min-w-0 flex-1 md:block ${
          selectedUser ? "block" : "hidden"
        }`}
      >
        <ChatWindow
          selectedUser={selectedUser}
          onBack={handleBack}
          onlineUsers={onlineUsers}
        />
      </div>
    </main>
  );
};

export default Chat;
