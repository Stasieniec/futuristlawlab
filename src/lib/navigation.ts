// Centralized navigation link definitions
// To add a new nav link, add it to the appropriate array below.

export interface NavLink {
  href: string;
  label: string;
  ariaLabel?: string;
}

// Home page navigation — uses anchor links (#about) and includes "Join Us"
export const HOME_NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About', ariaLabel: 'Learn about Futurist Law Lab' },
  { href: '#mission', label: 'Our Mission', ariaLabel: 'Explore our mission' },
  { href: '#activities', label: 'Events', ariaLabel: 'Discover our events' },
  { href: '/blog', label: 'Blog', ariaLabel: 'Read our blog articles' },
  { href: '/publications', label: 'Publications', ariaLabel: 'View our academic publications' },
  { href: '/join-us', label: 'Join Us', ariaLabel: 'Join our team' },
];

// Main site navigation — for blog, publications, hackathon, join-us, team-registration
export const MAIN_NAV_LINKS: NavLink[] = [
  { href: '/#about', label: 'About' },
  { href: '/#mission', label: 'Our Mission' },
  { href: '/#activities', label: 'Events' },
  { href: '/blog', label: 'Blog' },
  { href: '/publications', label: 'Publications' },
];

// Hackathon subpage navigation — for code-of-conduct, terms
export const HACKATHON_NAV_LINKS: NavLink[] = [
  { href: '/#about', label: 'About' },
  { href: '/hackathon', label: 'Hackathon' },
  { href: '/blog', label: 'Blog' },
];

// Footer quick links
export const FOOTER_LINKS: NavLink[] = [
  { href: '/#about', label: 'About Us' },
  { href: '/#mission', label: 'Our Mission' },
  { href: '/#activities', label: 'Events' },
  { href: '/blog', label: 'Blog' },
  { href: '/publications', label: 'Publications' },
];

// Home page footer quick links — uses anchor links and includes "Join Us"
export const HOME_FOOTER_LINKS: NavLink[] = [
  { href: '#about', label: 'About Us' },
  { href: '#mission', label: 'Our Mission' },
  { href: '#activities', label: 'Events' },
  { href: '/blog', label: 'Blog' },
  { href: '/publications', label: 'Publications' },
  { href: '/join-us', label: 'Join Us' },
];
