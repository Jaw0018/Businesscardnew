
import React from 'react';
import { ProfileLink } from '../types';

interface Props {
  link: ProfileLink;
}

const ProfileLinkItem: React.FC<Props> = ({ link }) => {
  return (
    <a
      href={link.url}
      target={link.type === 'external' ? '_blank' : undefined}
      rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-4 w-full p-4 rounded-2xl bg-[#1c1c1c] border border-white/5 hover:border-yellow-500/30 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/10"
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-black/50 text-yellow-500 transition-colors group-hover:bg-yellow-500 group-hover:text-black">
        <i className={link.icon}></i>
      </div>
      <span className="text-white font-medium text-sm sm:text-base">{link.label}</span>
      <i className="fa-solid fa-chevron-right ml-auto text-white/20 text-xs transition-transform group-hover:translate-x-1"></i>
    </a>
  );
};

export default ProfileLinkItem;
