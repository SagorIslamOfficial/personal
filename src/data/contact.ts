// Contact information and form data

export interface ContactInfo {
  address: {
    street: string;
    city: string;
    country: string;
    full: string;
  };
  email: string;
  phone: string;
  social: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contactInfo: ContactInfo = {
  address: {
    street: 'Dhanmondi',
    city: 'Dhaka-1209',
    country: 'Bangladesh',
    full: 'Dhanmondi, Dhaka-1209, Bangladesh'
  },
  email: 'sagor_islam@icloud.com',
  phone: '+880 1933-126-160',
  social: [
    {
      platform: 'facebook',
      url: 'https://facebook.com/sagorislam', // TODO: Update with actual URL
      icon: 'fa-brands fa-facebook-f',
      label: 'Facebook'
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/sagorislam', // TODO: Update with actual URL
      icon: 'fa-brands fa-linkedin-in',
      label: 'LinkedIn'
    },
    {
      platform: 'github',
      url: 'https://github.com/sagorislam', // TODO: Update with actual URL
      icon: 'fa-brands fa-github',
      label: 'GitHub'
    }
  ]
};

export const contactFormInitialData: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

export default { contactInfo, contactFormInitialData };