export type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string; external?: boolean }[];
};

export const primaryNav: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/#general-chair",
    label: "Conference",
    children: [
      { href: "/#general-chair", label: "General Chair" },
      { href: "/#committee", label: "Committee" },
      { href: "/#program", label: "Programme" },
      { href: "/#venue", label: "Venue" },
      { href: "/#reviewer-guide", label: "Reviewer Guide" },
      { href: "/#sponsors", label: "Sponsors" },
      { href: "/#supporters", label: "Supporter / Patron" },
    ],
  },
  {
    href: "/#authors/call-for-papers",
    label: "Authors",
    children: [
      { href: "/#authors/important-dates", label: "Important Dates" },
      { href: "/#authors/call-for-papers", label: "Call for Papers" },
      { href: "/#authors/call-for-special-session", label: "Call for Special Session" },
      { href: "/#authors/call-for-workshop", label: "Call for Workshop" },
      { href: "/#authors/call-for-tutorial", label: "Call for Tutorial" },
      { href: "/#authors/paper-preparation", label: "Paper Preparation" },
      { href: "/upcoming", label: "Paper Submission", external: true },
      { href: "/#authors/submission", label: "Submission Guideline" },
      { href: "/#authors/presentation", label: "Presentation Guideline" },
      { href: "/#authors/scholarship", label: "Scholarship Application" },
      { href: "/#journals", label: "Journals" },
      { href: "/#authors/past-events", label: "Past Events" },
    ],
  },
  {
    href: "/#registration",
    label: "Registration",
    children: [
      { href: "/#registration/package", label: "Registration Package" },
      { href: "/#registration", label: "Conference Registration" },
    ],
  },
  { href: "/#venue", label: "Venue" },
  { href: "/#contact-us", label: "Contact" },
];

export const footerNav = [
  { href: "/authors/call-for-papers", label: "Call for Papers" },
  { href: "/authors/important-dates", label: "Important Dates" },
  { href: "/authors/call-for-workshop", label: "Workshops" },
  { href: "/committee", label: "Committee" },
  { href: "/program", label: "Programme" },
  { href: "/registration/package", label: "Registration" },
  { href: "/venue", label: "Venue" },
  { href: "/#sponsors", label: "Sponsors" },
  { href: "/#supporters", label: "Supporter / Patron" },
  { href: "/authors/past-events", label: "Past Events" },
  { href: "/contact", label: "Contact" },
];


// export type NavLink = {
//   href: string;
//   label: string;
//   children?: { href: string; label: string; external?: boolean }[];
// };

// export const primaryNav: NavLink[] = [
//   { href: "/", label: "Home" },
//   {
//     href: "/general-chair",
//     label: "Conference",
//     children: [
//       { href: "/general-chair", label: "General Chair" },
//       { href: "/committee", label: "Committee" },
//       { href: "/program", label: "Programme" },
//       { href: "/venue", label: "Venue" },
//       { href: "/reviewer-guide", label: "Reviewer Guide" },
//       { href: "/#sponsors", label: "Sponsors" },
//       { href: "/#supporters", label: "Supporter / Patron" },
//     ],
//   },
//   {
//     href: "/authors/call-for-papers",
//     label: "Authors",
//     children: [
//       { href: "/authors/important-dates", label: "Important Dates" },
//       { href: "/authors/call-for-papers", label: "Call for Papers" },
//       { href: "/authors/call-for-special-session", label: "Call for Special Session" },
//       { href: "/authors/call-for-workshop", label: "Call for Workshop" },
//       { href: "/authors/call-for-tutorial", label: "Call for Tutorial" },
//       { href: "/authors/paper-preparation", label: "Paper Preparation" },
//       { href: "https://nps-ss.com.au/", label: "Paper Submission", external: true },
//       { href: "/authors/submission", label: "Submission Guideline" },
//       { href: "/authors/presentation", label: "Presentation Guideline" },
//       { href: "/authors/scholarship", label: "Scholarship Application" },
//       { href: "/#journals", label: "Journals" },
//       { href: "/authors/past-events", label: "Past Events" },
//     ],
//   },
//   {
//     href: "/registration",
//     label: "Registration",
//     children: [
//       { href: "/registration/package", label: "Registration Package" },
//       { href: "/registration", label: "Conference Registration" },
//     ],
//   },
//   { href: "/venue", label: "Venue" },
//   { href: "/contact", label: "Contact" },
// ];

// export const footerNav = [
//   { href: "/authors/call-for-papers", label: "Call for Papers" },
//   { href: "/authors/important-dates", label: "Important Dates" },
//   { href: "/authors/call-for-workshop", label: "Workshops" },
//   { href: "/committee", label: "Committee" },
//   { href: "/program", label: "Programme" },
//   { href: "/registration/package", label: "Registration" },
//   { href: "/venue", label: "Venue" },
//   { href: "/#sponsors", label: "Sponsors" },
//   { href: "/#supporters", label: "Supporter / Patron" },
//   { href: "/authors/past-events", label: "Past Events" },
//   { href: "/contact", label: "Contact" },
// ];
