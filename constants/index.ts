export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "Dashboard",
    route: "/dashboard",
    icon: "/assets/icons/dashboard.svg",
  },
  {
    label: "Projects",
    route: "/projects",
    icon: "/assets/icons/projects.svg",
  },
  {
    label: "Tasks",
    route: "/tasks",
    icon: "/assets/icons/tasks.svg",
  },
  {
    label: "Reporting",
    route: "/reporting",
    icon: "/assets/icons/reporting.svg",
  },
  {
    label: "Users",
    route: "/users",
    icon: "/assets/icons/users.svg",
  },
  {
    label: "Support",
    route: "/support",
    icon: "/assets/icons/supports.svg",
  },
  {
    label: "Settings",
    route: "/setting",
    icon: "/assets/icons/settings.svg",
  },
  {
    label: "Profile",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
  },
];
type Vendor = {
  id: number;
  name: string;
  url: string;
  rating: number;
  ratingChange: number;
  lastAssessed: string;
  status: "Active" | "Inactive";
  categories: string[];
};

export const vendors: Vendor[] = [
  {
    id: 1,
    name: "Catalog",
    url: "catalogapp.io",
    rating: 60,
    ratingChange: 5,
    lastAssessed: "22 Jan 2022",
    status: "Active",
    categories: ["Customer data", "Admin", "+4"],
  },
  {
    id: 2,
    name: "Capsule",
    url: "getcapsule.com",
    rating: 72,
    ratingChange: -4,
    lastAssessed: "20 Jan 2022",
    status: "Active",
    categories: ["Business data", "Admin", "+4"],
  },
  {
    id: 3,
    name: "Command+R",
    url: "cmdr.ai",
    rating: 78,
    ratingChange: 6,
    lastAssessed: "24 Jan 2022",
    status: "Active",
    categories: ["Customer data", "Financials"],
  },
  {
    id: 4,
    name: "Hourglass",
    url: "hourglass.app",
    rating: 38,
    ratingChange: 8,
    lastAssessed: "26 Jan 2022",
    status: "Active",
    categories: ["Database access", "Admin"],
  },
  {
    id: 5,
    name: "Layers",
    url: "getlayers.io",
    rating: 42,
    ratingChange: -1,
    lastAssessed: "18 Jan 2022",
    status: "Active",
    categories: ["Salesforce", "Admin", "+4"],
  },
  {
    id: 6,
    name: "Quotient",
    url: "quotient.co",
    rating: 66,
    ratingChange: -6,
    lastAssessed: "28 Jan 2022",
    status: "Active",
    categories: ["Business data", "Admin", "+4"],
  },
  {
    id: 7,
    name: "Sisyphus",
    url: "sisyphus.com",
    rating: 91,
    ratingChange: 2,
    lastAssessed: "16 Jan 2022",
    status: "Inactive",
    categories: ["Customer data", "Financials"],
  },
];

export const data = [
  { name: "Jan", yourRating: 65, industryAverage: 50 },
  { name: "Feb", yourRating: 66, industryAverage: 51 },
  { name: "Mar", yourRating: 67, industryAverage: 52 },
  { name: "Apr", yourRating: 66, industryAverage: 53 },
  { name: "May", yourRating: 68, industryAverage: 54 },
  { name: "Jun", yourRating: 69, industryAverage: 55 },
  { name: "Jul", yourRating: 70, industryAverage: 56 },
  { name: "Aug", yourRating: 71, industryAverage: 57 },
  { name: "Sep", yourRating: 72, industryAverage: 58 },
  { name: "Oct", yourRating: 73, industryAverage: 59 },
  { name: "Nov", yourRating: 74, industryAverage: 60 },
  { name: "Dec", yourRating: 75, industryAverage: 61 },
];
