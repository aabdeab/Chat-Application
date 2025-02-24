import React, { useState } from "react";
import { 
  MessageSquare, 
  Users, 
  User, 
  Settings, 
  Search, 
  Send, 
  Image, 
  Paperclip, 
  MoreVertical,
  Phone,
  Video
} from "lucide-react";

// Mock data
const contacts = [
  { id: 1, name: "Alex Johnson", avatar: "/api/placeholder/32/32", status: "online", lastSeen: "Just now" },
  { id: 2, name: "Sarah Williams", avatar: "/api/placeholder/32/32", status: "offline", lastSeen: "2h ago" },
  { id: 3, name: "Michael Chen", avatar: "/api/placeholder/32/32", status: "online", lastSeen: "Just now" },
  { id: 4, name: "Emma Davis", avatar: "/api/placeholder/32/32", status: "away", lastSeen: "30m ago" },
  { id: 5, name: "James Wilson", avatar: "/api/placeholder/32/32", status: "online", lastSeen: "Just now" },
];

const groups = [
  { id: 1, name: "Design Team", avatar: "/api/placeholder/32/32", members: 8 },
  { id: 2, name: "Project Alpha", avatar: "/api/placeholder/32/32", members: 5 },
  { id: 3, name: "Coffee Lovers", avatar: "/api/placeholder/32/32", members: 12 },
];

const messages = [
  { id: 1, sender: "Alex Johnson", text: "Hey there! Did you check the latest designs?", time: "10:25 AM", isMine: false },
  { id: 2, sender: "You", text: "Yes, they look amazing! I especially like the new color palette.", time: "10:27 AM", isMine: true },
  { id: 3, sender: "Alex Johnson", text: "Great! The team worked hard on it. We have a meeting at 2 PM to discuss feedback.", time: "10:30 AM", isMine: false },
  { id: 4, sender: "You", text: "I'll be there. Do you need me to prepare anything specific?", time: "10:32 AM", isMine: true },
  { id: 5, sender: "Alex Johnson", text: "Just bring your ideas for the user flow. We'll handle the rest.", time: "10:35 AM", isMine: false },
];

const ChatApp = () => {
  const [activeTab, setActiveTab] = useState("messages");
  const [activeChatId, setActiveChatId] = useState(1);
  const [newMessage, setNewMessage] = useState("");
  const [activeMessages, setActiveMessages] = useState(messages);
  
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: activeMessages.length + 1,
        sender: "You",
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMine: true
      };
      setActiveMessages([...activeMessages, newMsg]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const activeContact = contacts.find(c => c.id === activeChatId);

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r flex flex-col">
        {/* User Profile */}
        <div className="p-4 border-b flex items-center">
          <img src="/api/placeholder/40/40" alt="Your profile" className="rounded-full" />
          <div className="ml-3">
            <h2 className="font-semibold">Your Name</h2>
            <p className="text-xs text-gray-500">Available</p>
          </div>
          <button className="ml-auto p-1 rounded-full hover:bg-gray-100">
            <Settings size={18} />
          </button>
        </div>
        
        {/* Search */}
        <div className="p-3 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-3 bg-gray-100 rounded-full text-sm focus:outline-none"
            />
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex border-b">
          <button
            className={`flex-1 py-3 text-center ${activeTab === "messages" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("messages")}
          >
            <MessageSquare size={18} className="mx-auto mb-1" />
            <span className="text-xs">Chats</span>
          </button>
          <button
            className={`flex-1 py-3 text-center ${activeTab === "contacts" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("contacts")}
          >
            <User size={18} className="mx-auto mb-1" />
            <span className="text-xs">Contacts</span>
          </button>
          <button
            className={`flex-1 py-3 text-center ${activeTab === "groups" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("groups")}
          >
            <Users size={18} className="mx-auto mb-1" />
            <span className="text-xs">Groups</span>
          </button>
        </div>
        
        {/* List Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "messages" && (
            <div>
              {contacts.map(contact => (
                <div
                  key={contact.id}
                  className={`p-3 flex items-center hover:bg-gray-100 cursor-pointer ${activeChatId === contact.id ? "bg-blue-50" : ""}`}
                  onClick={() => setActiveChatId(contact.id)}
                >
                  <div className="relative">
                    <img src={contact.avatar} alt={contact.name} className="rounded-full w-10 h-10" />
                    <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                      contact.status === "online" ? "bg-green-500" : 
                      contact.status === "away" ? "bg-yellow-500" : "bg-gray-500"
                    }`}></span>
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-sm">{contact.name}</h3>
                      <span className="text-xs text-gray-500">{contact.lastSeen}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">Last message preview...</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === "contacts" && (
            <div>
              {contacts.map(contact => (
                <div
                  key={contact.id}
                  className="p-3 flex items-center hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setActiveChatId(contact.id);
                    setActiveTab("messages");
                  }}
                >
                  <img src={contact.avatar} alt={contact.name} className="rounded-full w-10 h-10" />
                  <div className="ml-3">
                    <h3 className="font-medium text-sm">{contact.name}</h3>
                    <p className="text-xs text-gray-500">{contact.status === "online" ? "Online" : contact.lastSeen}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === "groups" && (
            <div>
              {groups.map(group => (
                <div
                  key={group.id}
                  className="p-3 flex items-center hover:bg-gray-100 cursor-pointer"
                >
                  <img src={group.avatar} alt={group.name} className="rounded-full w-10 h-10" />
                  <div className="ml-3">
                    <h3 className="font-medium text-sm">{group.name}</h3>
                    <p className="text-xs text-gray-500">{group.members} members</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Chat Header */}
        <div className="bg-white p-3 border-b flex items-center">
          {activeContact && (
            <>
              <div className="relative">
                <img src={activeContact.avatar} alt={activeContact.name} className="rounded-full w-10 h-10" />
                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                  activeContact.status === "online" ? "bg-green-500" : 
                  activeContact.status === "away" ? "bg-yellow-500" : "bg-gray-500"
                }`}></span>
              </div>
              <div className="ml-3">
                <h2 className="font-semibold">{activeContact.name}</h2>
                <p className="text-xs text-gray-500">
                  {activeContact.status === "online" ? "Online" : activeContact.lastSeen}
                </p>
              </div>
            </>
          )}
          
          <div className="ml-auto flex items-center space-x-3">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Phone size={18} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Video size={18} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search size={18} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <MoreVertical size={18} />
            </button>
          </div>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50">
          <div className="space-y-4">
            {activeMessages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.isMine ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-xs md:max-w-md rounded-2xl p-3 ${
                  msg.isMine ? "bg-blue-500 text-white rounded-tr-none" : "bg-white rounded-tl-none"
                }`}>
                  <p className="text-sm">{msg.text}</p>
                  <span className={`text-xs block text-right mt-1 ${
                    msg.isMine ? "text-blue-100" : "text-gray-500"
                  }`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Message Input */}
        <div className="bg-white border-t p-3">
          <div className="flex items-center bg-gray-100 rounded-full p-1">
            <button className="p-2 rounded-full hover:bg-gray-200">
              <Image size={18} className="text-gray-500" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200">
              <Paperclip size={18} className="text-gray-500" />
            </button>
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 bg-transparent border-none focus:outline-none py-2 px-3 resize-none h-10 max-h-32"
              rows="1"
            />
            <button
              onClick={handleSendMessage}
              className={`p-2 rounded-full ${
                newMessage.trim() ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"
              }`}
              disabled={!newMessage.trim()}
            >
              <Send size={18} className={newMessage.trim() ? "text-white" : "text-gray-500"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;