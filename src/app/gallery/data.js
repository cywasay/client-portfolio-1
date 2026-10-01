export const galleryCategories = [
  { id: "all", label: "All Moments", icon: "01", count: 12 },
  { id: "teaching", label: "Teaching", icon: "02", count: 4 },
  { id: "events", label: "Events", icon: "03", count: 3 },
  { id: "achievements", label: "Achievements", icon: "04", count: 3 },
  { id: "community", label: "Community", icon: "05", count: 2 },
];

const items = [
  ["teaching", "Classroom Innovation", "Interactive learning session using thoughtful educational technology.", "2023", true, "medium"],
  ["events", "Education Conference", "Keynote speaker at National Education Summit 2023.", "Nov 2023", true, "large"],
  ["achievements", "STEM Award", "Recognized for innovative STEM curriculum design.", "2022", false, "small"],
  ["community", "Parent Workshop", "Hosted a collaborative learning workshop for parents.", "Oct 2023", false, "small"],
  ["events", "Innovation Expo", "Students presenting prototypes at a city innovation expo.", "Sep 2023", false, "medium"],
  ["teaching", "Project Showcase", "Capstone projects highlighting collaborative problem-solving.", "2024", true, "large"],
  ["achievements", "Grant Winner", "Secured funding for a robotics and AI lab.", "2021", false, "medium"],
  ["community", "Service Day", "Students supporting and improving local community spaces.", "Aug 2023", false, "medium"],
  ["events", "Alumni Meetup", "Celebrating success stories and mentorship circles.", "2024", false, "small"],
  ["achievements", "Publication", "Article featured in a national education journal.", "2022", false, "small"],
  ["teaching", "Lab Immersion", "Hands-on science learning through real-world experiments.", "2024", false, "medium"],
  ["teaching", "Design Thinking", "A design sprint guiding students from idea to prototype.", "2023", false, "small"],
];

export const galleryItems = items.map(([category, title, description, date, featured, size], index) => ({
  id: index + 1,
  category,
  title,
  description,
  date,
  featured,
  size,
  icon: String(index + 1).padStart(2, "0"),
  gradient: "from-blue-500 to-sky-600",
}));

export const storyHighlights = [
  { title: "Graduation Ceremony 2023", description: "Celebrating 150+ students as they begin their next educational chapter.", icon: "01", cta: "View Album", gradient: "from-blue-500 to-sky-600" },
  { title: "Science Fair Innovation", description: "Students presenting projects grounded in curiosity and collaboration.", icon: "02", cta: "Explore Projects", gradient: "from-blue-500 to-sky-600" },
];
