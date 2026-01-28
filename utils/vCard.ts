
import { ProfileData } from '../types';

/**
 * Generates a vCard 3.0 string.
 * iOS specifically looks for ORG and TITLE to display company info 
 * as a "sub-name" or prominent label under the main name.
 */
export const generateVCard = (profile: ProfileData): string => {
  const { firstName, lastName, organization, title, links } = profile;
  
  const phone = links.find(l => l.type === 'phone')?.url.replace('tel:', '') || '';
  const email = links.find(l => l.type === 'email')?.url.replace('mailto:', '') || '';
  const website = links.find(l => l.label.toLowerCase() === 'website')?.url || '';

  // Use N for structured name and FN for full name
  // ORG and TITLE are standard fields that iOS uses to display company context
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${lastName};${firstName};;;`,
    `FN:${firstName} ${lastName}`,
    `ORG:${organization}`,
    `TITLE:${title}`,
    `TEL;TYPE=CELL,VOICE:${phone}`,
    `EMAIL;TYPE=WORK,INTERNET:${email}`,
    website ? `URL:${website}` : '',
    'END:VCARD'
  ];

  return lines.filter(line => line !== '').join('\r\n');
};

export const downloadVCard = (profile: ProfileData) => {
  const vCardData = generateVCard(profile);
  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  // Create a temporary link and trigger download
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${profile.firstName}_${profile.lastName}.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Cleanup
  setTimeout(() => URL.revokeObjectURL(url), 2000);
};
