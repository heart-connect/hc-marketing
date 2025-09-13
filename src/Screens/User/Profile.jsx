import React, { useState } from 'react';
import { FaSignOutAlt, FaUserAlt, FaRegClock, FaMapMarker, FaSignLanguage, FaHeartbeat, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useAuth } from '../../Components/Context/AuthContext';
import { FaCakeCandles, FaVenusMars } from 'react-icons/fa6';
import encryptionModule from '../../Components/Common/localStorageUtils';

const Profile = () => {
  const { logout } = useAuth();
  const user=encryptionModule.decryptData('userData')

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => setShowLogoutConfirm(true);
  const confirmLogout = () => {
    logout();
    setShowLogoutConfirm(false);
  };
  const cancelLogout = () => setShowLogoutConfirm(false);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <section className="relative w-full">
        {/* User Cover Image */}
        <div className="relative h-64 md:h-80 lg:h-96">
          <img
            src="https://static.vecteezy.com/system/resources/previews/025/739/627/non_2x/image-of-red-and-pink-and-blue-hearts-on-table-focus-of-hearts-with-dark-best-background-wallpaper-with-copy-space-valentines-day-concept-generative-ai-free-photo.jpg"
            alt={`${user?.fullName}'s Cover`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Profile Image */}
        <div className="w-full mx-auto flex justify-center">
            <img
              src={user?.selected_Avatar}
              alt={`${user?.fullName}'s Profile`}
              className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] w-[10rem] h-[10rem] xs:w-[8rem] xs:h-[8rem] outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl absolute md:top-[220px] top-[200px]"
            />
          </div>
      </section>

      <main className="container mx-auto px-4 py-8 md:mt-[100px] mt-[80px]">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
          {/* Full Name and Nickname */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{user?.fullName}</h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">@{user?.nickName}</p>
          </div>
          
          {/* About */}
          <p className="text-gray-700 dark:text-gray-300 text-center mb-8">
            {user?.about || ""}
          </p>

          {/* User Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <ProfileDetail icon={FaCakeCandles} label="Age" value={user?.age} />
            <ProfileDetail icon={FaVenusMars} label="Gender" value={user?.gender} />
            <ProfileDetail icon={FaHeartbeat} label="Looking For" value={user?.looking_For || "N/A"} />
            <ProfileDetail icon={FaSignLanguage} label="Preferred Language" value={user?.preferred_Language} />
            <ProfileDetail icon={FaMapMarker} label="Location" value={user?.current_Location || "N/A"} />
            <ProfileDetail icon={FaRegClock} label="Last Active" value={formatDate(user?.lastActive)} />
            <ProfileDetail icon={FaUserAlt} label="Interests" value={user?.own_Interest.join(', ')} />
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            {user?.linkedin && <SocialLink href={user?.linkedin} icon={FaLinkedin} label="LinkedIn" />}
            {user?.twitter && <SocialLink href={user?.twitter} icon={FaTwitter} label="Twitter" />}
          </div>

          {/* Logout Button */}
          <div className="text-center">
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-[#c61369] text-white rounded-lg flex items-center gap-2 hover:bg-[#e43f8f] mx-auto"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </main>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Are you sure you want to logout?</h3>
            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-[#c61369] text-white rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProfileDetail = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}:</span>
    <span>{value}</span>
  </div>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
    <Icon className="w-6 h-6" title={label} />
  </a>
);

export default Profile;
