export interface ButtonIProp {
  text: any;
  disabled: boolean;
  className: any;
  type: any;
  onClick: any;
}

export interface User {
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  email: string;
  phoneNumber: string;
  id: string;
  lastActiveDate: string;
  orgName: string;
  userName: string;
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    // Add more properties if needed
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
    // Add more properties if needed
  };
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    // Add more properties if needed
  };
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
    // Add more properties if needed
  };
}