
export interface ProfileLink {
  label: string;
  url: string;
  icon: string;
  type: 'phone' | 'email' | 'external';
}

export interface ProfileData {
  firstName: string;
  lastName: string;
  organization: string;
  title: string;
  profileImage: string;
  links: ProfileLink[];
}
