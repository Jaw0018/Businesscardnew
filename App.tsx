
import React, { useState } from 'react';
import { ProfileData } from './types';
import { downloadVCard } from './utils/vCard';
import ProfileLinkItem from './components/ProfileLinkItem';

const profile: ProfileData = {
  firstName: "Joemarie",
  lastName: "Pangan",
  organization: "Oligarch Media",
  title: "Graphic Designer",
  profileImage: "https://picsum.photos/id/64/400/400", // Generic high quality placeholder
  links: [
    { label: "Call", url: "tel:+639923279475", icon: "fa-solid fa-phone", type: "phone" },
    { label: "Email", url: "mailto:jaopangan.oligarchmedia@gmail.com", icon: "fa-solid fa-envelope", type: "email" },
    { label: "Facebook", url: "https://facebook.com/jaopangan18", icon: "fa-brands fa-facebook", type: "external" },
    { label: "Instagram", url: "https://instagram.com/good.jaoo", icon: "fa-brands fa-instagram", type: "external" },
    { label: "Website", url: "https://yourwebsite.com", icon: "fa-solid fa-globe", type: "external" }
  ]
};

const App: React.FC = () => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveContact = () => {
    setIsSaving(true);
    downloadVCard(profile);
    setTimeout(() => setIsSaving(false), 2000);
  };

  return (
    <div className="w-full max-w-[420px] mx-auto pb-10">
      <div className="glass-card rounded-[40px] p-6 sm:p-8 flex flex-col items-center gold-shadow">
        
        {/* Header Label */}
        <div className="mb-6">
          <span className="gold-text-gradient font-bold tracking-widest text-sm uppercase">Digital Profile</span>
        </div>

        {/* Profile Image & Info */}
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-full p-1 profile-border overflow-hidden gold-shadow">
            <img 
              src={profile.profileImage} 
              alt={`${profile.firstName} ${profile.lastName}`} 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -bottom-2 right-0 bg-yellow-500 text-black w-8 h-8 rounded-full flex items-center justify-center border-4 border-[#0a0a0a] text-xs">
            <i className="fa-solid fa-check"></i>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-1">
            {profile.firstName} {profile.lastName}
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            {profile.organization} • {profile.title}
          </p>
        </div>

        {/* Action Links */}
        <div className="w-full space-y-3 mb-10">
          {profile.links.map((link, idx) => (
            <ProfileLinkItem key={idx} link={link} />
          ))}
        </div>

        {/* Save Contact CTA */}
        <div className="w-full">
          <button
            onClick={handleSaveContact}
            disabled={isSaving}
            className="w-full gold-gradient hover:opacity-90 active:scale-95 text-black font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            {isSaving ? (
              <>
                <i className="fa-solid fa-circle-notch animate-spin"></i>
                <span>Saving...</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-user-plus"></i>
                <span>Save Contact</span>
              </>
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold flex items-center gap-2">
            <span>Powered by</span>
            <span className="text-yellow-500/70">SmartTap PH</span>
          </p>
        </div>
      </div>

      {/* Aesthetic Bottom Info (Optional) */}
      <div className="mt-6 text-center text-white/20 text-[10px] px-8">
        Designed for premium networking. Tap to connect instantly with SmartTap technology.
      </div>
    </div>
  );
};

export default App;
