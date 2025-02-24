import React, { useState } from "react";
import { 
  ArrowLeft, 
  Camera, 
  Edit, 
  Save, 
  X, 
  Bell, 
  Moon, 
  Shield, 
  HelpCircle, 
  LogOut 
} from "lucide-react";

const ProfileEdit = () => {
  const [profileData, setProfileData] = useState({
    name: "AABDANE ABDELKARIM",
    email: "aabdaneabdelkrim@example.com",
    phone: "+1 (555) 123-4567",
    bio: "software engineer interested in system design",
    status: "Available",
    theme: "light",
    notifications: true,
    privacy: "friends"
  });
  
  const [editing, setEditing] = useState(false);
  const [activeSection, setActiveSection] = useState("profile"); // profile, preferences, privacy, help
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleToggle = (field) => {
    setProfileData(prev => ({
      ...prev,
      [field]: field === "notifications" ? !prev[field] : 
               field === "theme" ? (prev[field] === "light" ? "dark" : "light") : prev[field]
    }));
  };
  
  const handleSave = () => {
    // Here you would save the profile data to your backend
    setEditing(false);
    // Show success toast or notification
  };
  
  const handleCancel = () => {
    // Reset changes
    setEditing(false);
  };
  
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-white border-r flex flex-col">
        <div className="p-4 border-b flex items-center">
          <img src="./static/profile.jpg" alt="Your profile" className="rounded-full max-h-20 w-auto" />
          <div className="ml-3">
            <h2 className="font-semibold">{profileData.name}</h2>
            <p className="text-xs text-gray-500">{profileData.status}</p>
          </div>
        </div>
        
        <div className="flex-1 py-4">
          <h3 className="px-4 text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Settings</h3>
          <button 
            onClick={() => setActiveSection("profile")}
            className={`w-full text-left px-4 py-2 flex items-center text-sm ${activeSection === "profile" ? "bg-blue-50 text-blue-500" : "text-gray-700 hover:bg-gray-100"}`}
          >
            <Edit size={16} className="mr-3" />
            Profile Information
          </button>
          <button 
            onClick={() => setActiveSection("preferences")}
            className={`w-full text-left px-4 py-2 flex items-center text-sm ${activeSection === "preferences" ? "bg-blue-50 text-blue-500" : "text-gray-700 hover:bg-gray-100"}`}
          >
            <Bell size={16} className="mr-3" />
            Preferences
          </button>
          <button 
            onClick={() => setActiveSection("privacy")}
            className={`w-full text-left px-4 py-2 flex items-center text-sm ${activeSection === "privacy" ? "bg-blue-50 text-blue-500" : "text-gray-700 hover:bg-gray-100"}`}
          >
            <Shield size={16} className="mr-3" />
            Privacy & Security
          </button>
          <button 
            onClick={() => setActiveSection("help")}
            className={`w-full text-left px-4 py-2 flex items-center text-sm ${activeSection === "help" ? "bg-blue-50 text-blue-500" : "text-gray-700 hover:bg-gray-100"}`}
          >
            <HelpCircle size={16} className="mr-3" />
            Help & Support
          </button>
        </div>
        
        <div className="p-4 border-t mt-auto">
          <button className="w-full flex items-center justify-center px-4 py-2 text-red-500 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
            <LogOut size={16} className="mr-2" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white p-4 border-b flex items-center">
          <button className="p-1 rounded-full hover:bg-gray-100 mr-2 md:hidden">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-semibold">
            {activeSection === "profile" && "Profile Settings"}
            {activeSection === "preferences" && "Preferences"}
            {activeSection === "privacy" && "Privacy & Security"}
            {activeSection === "help" && "Help & Support"}
          </h1>
          {activeSection === "profile" && !editing && (
            <button 
              onClick={() => setEditing(true)}
              className="ml-auto flex items-center px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Edit size={16} className="mr-1" />
              <span>Edit Profile</span>
            </button>
          )}
          {activeSection === "profile" && editing && (
            <div className="ml-auto flex space-x-2">
              <button 
                onClick={handleCancel}
                className="flex items-center px-3 py-1.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                <X size={16} className="mr-1" />
                <span>Cancel</span>
              </button>
              <button 
                onClick={handleSave}
                className="flex items-center px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Save size={16} className="mr-1" />
                <span>Save Changes</span>
              </button>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeSection === "profile" && (
            <div className="max-w-2xl">
              {/* Profile Picture */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative">
                  <img src="./static/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow" />
                  {editing && (
                    <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow hover:bg-blue-600 transition-colors">
                      <Camera size={18} />
                    </button>
                  )}
                </div>
                {!editing ? (
                  <h2 className="text-2xl font-bold mt-4">{profileData.name}</h2>
                ) : (
                  <div className="mt-2 text-sm text-gray-500">Click the camera icon to change your profile picture</div>
                )}
              </div>
              
              {/* Profile Form */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
                    {editing ? (
                      <input
                        type="text"
                        name="name"
                        value={profileData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="text-gray-900 py-2">{profileData.name}</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    {editing ? (
                      <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="text-gray-900 py-2">{profileData.email}</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    {editing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="text-gray-900 py-2">{profileData.phone}</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                    {editing ? (
                      <textarea
                        name="bio"
                        value={profileData.bio}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      ></textarea>
                    ) : (
                      <div className="text-gray-900 py-2">{profileData.bio}</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    {editing ? (
                      <select
                        name="status"
                        value={profileData.status}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="Available">Available</option>
                        <option value="Away">Away</option>
                        <option value="Busy">Busy</option>
                        <option value="Do Not Disturb">Do Not Disturb</option>
                        <option value="Offline">Appear Offline</option>
                      </select>
                    ) : (
                      <div className="flex items-center py-2">
                        <span className={`w-3 h-3 rounded-full mr-2 ${
                          profileData.status === "Available" ? "bg-green-500" : 
                          profileData.status === "Away" ? "bg-yellow-500" : 
                          profileData.status === "Busy" ? "bg-red-500" : 
                          profileData.status === "Do Not Disturb" ? "bg-red-600" : "bg-gray-500"
                        }`}></span>
                        <span className="text-gray-900">{profileData.status}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeSection === "preferences" && (
            <div className="max-w-2xl">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">App Preferences</h3>
                
                <div className="py-3 flex items-center justify-between border-b">
                  <div>
                    <h4 className="font-medium">Dark Mode</h4>
                    <p className="text-sm text-gray-500">Switch between light and dark themes</p>
                  </div>
                  <button 
                    onClick={() => handleToggle("theme")}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${profileData.theme === "dark" ? "bg-blue-500" : "bg-gray-200"}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${profileData.theme === "dark" ? "translate-x-6" : "translate-x-1"}`} />
                  </button>
                </div>
                
                <div className="py-3 flex items-center justify-between border-b">
                  <div>
                    <h4 className="font-medium">Push Notifications</h4>
                    <p className="text-sm text-gray-500">Receive notifications for new messages</p>
                  </div>
                  <button 
                    onClick={() => handleToggle("notifications")}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${profileData.notifications ? "bg-blue-500" : "bg-gray-200"}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${profileData.notifications ? "translate-x-6" : "translate-x-1"}`} />
                  </button>
                </div>
                
                <div className="py-3 flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Language</h4>
                    <p className="text-sm text-gray-500">Choose your preferred language</p>
                  </div>
                  <select className="px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="zh">Chinese</option>
                  </select>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
                
                <div className="py-3 flex items-center justify-between border-b">
                  <div>
                    <h4 className="font-medium">Direct Messages</h4>
                    <p className="text-sm text-gray-500">Notifications for private messages</p>
                  </div>
                  <select className="px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="all">All Messages</option>
                    <option value="mentions">Only Mentions</option>
                    <option value="none">None</option>
                  </select>
                </div>
                
                <div className="py-3 flex items-center justify-between border-b">
                  <div>
                    <h4 className="font-medium">Group Messages</h4>
                    <p className="text-sm text-gray-500">Notifications for group conversations</p>
                  </div>
                  <select className="px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="all">All Messages</option>
                    <option value="mentions">Only Mentions</option>
                    <option value="none">None</option>
                  </select>
                </div>
                
                <div className="py-3 flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Sound</h4>
                    <p className="text-sm text-gray-500">Play sound for new messages</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeSection === "privacy" && (
            <div className="max-w-2xl">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
                
                <div className="py-3 border-b">
                  <h4 className="font-medium mb-2">Who can see your profile</h4>
                  <div className="flex gap-3">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="privacy" 
                        value="everyone" 
                        checked={profileData.privacy === "everyone"} 
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Everyone
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="privacy" 
                        value="friends" 
                        checked={profileData.privacy === "friends"} 
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Friends only
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="privacy" 
                        value="private" 
                        checked={profileData.privacy === "private"} 
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Private
                    </label>
                  </div>
                </div>
                
                <div className="py-3 flex items-center justify-between border-b">
                  <div>
                    <h4 className="font-medium">Read Receipts</h4>
                    <p className="text-sm text-gray-500">Let others know when you've read their messages</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
                  </button>
                </div>
                
                <div className="py-3 flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Last Seen</h4>
                    <p className="text-sm text-gray-500">Show when you were last active</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1" />
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Security</h3>
                
                <div className="py-3 border-b">
                  <h4 className="font-medium mb-1">Two-Factor Authentication</h4>
                  <p className="text-sm text-gray-500 mb-3">Add an extra layer of security to your account</p>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Enable 2FA
                  </button>
                </div>
                
                <div className="py-3">
                  <h4 className="font-medium mb-1">Password</h4>
                  <p className="text-sm text-gray-500 mb-3">Change your password regularly for better security</p>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeSection === "help" && (
            <div className="max-w-2xl">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
                
                <div className="py-3 border-b">
                  <h4 className="font-medium mb-1">FAQs</h4>
                  <p className="text-sm text-gray-500 mb-3">Find answers to commonly asked questions</p>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    View FAQs
                  </button>
                </div>
                
                <div className="py-3 border-b">
                  <h4 className="font-medium mb-1">Contact Support</h4>
                  <p className="text-sm text-gray-500 mb-3">Get help from our support team</p>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Contact Support
                  </button>
                </div>
                
                <div className="py-3">
                  <h4 className="font-medium mb-1">Report a Problem</h4>
                  <p className="text-sm text-gray-500 mb-3">Let us know if something isn't working properly</p>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    Report Problem
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">About</h3>
                <p className="text-gray-700 mb-4">Chat App v1.0.0</p>
                <div className="flex space-x-4">
                  <button className="text-blue-500 hover:text-blue-700 transition-colors">Terms of Service</button>
                  <button className="text-blue-500 hover:text-blue-700 transition-colors">Privacy Policy</button>
                  <button className="text-blue-500 hover:text-blue-700 transition-colors">Licenses</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;