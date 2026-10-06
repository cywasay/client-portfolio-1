import { portfolioPhotos } from "@/lib/portfolio-photos";

// Explicit records replace the old modulo-based image loop. Captions describe
// what is pictured; event names and dates are not inferred from the photographs.
const archivePhoto = (src, width, height, alt, position = "50% 50%") => ({ src, width, height, alt, position });
const records = [
  ["achievements", "A moment of gratitude", "Neelam Nisar pictured receiving a Shield of Gratitude at a school event.", portfolioPhotos.gratitudePresentation, "large"],
  ["teaching", "Learning beyond the classroom", "Exploring a student project display during an outdoor learning event.", archivePhoto("/edu-leader2.jpg", 1040, 780, "Neelam Nisar looking at a student project display"), "medium"],
  ["leadership", "Around the same table", "A meeting-table moment with Neelam Nisar and fellow participants.", portfolioPhotos.roundtable, "medium"],
  ["events", "Listening, as well as leading", "A candid portrait of Neelam Nisar seated in an event audience.", portfolioPhotos.eventPortrait, "large"],
  ["community", "Our learning community", "A classroom photograph with the people at the heart of a life in education.", archivePhoto("/edu-leader3.jpg", 1280, 960, "Neelam Nisar standing with a group of students"), "medium"],
  ["achievements", "Celebrating student achievement", "Neelam Nisar joins a student and guests for an award presentation.", portfolioPhotos.studentRecognition, "large"],
  ["leadership", "An open office door", "A meeting in the principal’s office at DPS & C DG Khan.", portfolioPhotos.schoolMeeting, "medium"],
  ["events", "A voice for education", "Speaking at a lectern, bringing an educator’s perspective into the wider conversation.", archivePhoto("/edu-leader.jpg", 1024, 682, "Neelam Nisar speaking into a microphone at a lectern", "48% 45%"), "medium"],
  ["achievements", "Recognition shared", "Neelam Nisar pictured with guests during a shield presentation.", portfolioPhotos.recognitionPresentation, "medium"],
  ["leadership", "Sharing professional practice", "Presenting to participants in a training session, with a slide presentation and whiteboard.", archivePhoto("/edu-leader5.jpg", 960, 540, "Neelam Nisar presenting during a training session", "65% 45%"), "small"],
  ["teaching", "Alongside the learners", "A classroom moment with students and Neelam Nisar.", archivePhoto("/edu-leader7.jpg", 1024, 768, "Neelam Nisar with students beside a classroom whiteboard"), "medium"],
  ["events", "Education in the public conversation", "A photograph from a media interview featuring Neelam Nisar.", archivePhoto("/edu-leader4.jpg", 960, 540, "Neelam Nisar featured in a television interview"), "small"],
  ["leadership", "Learning together", "Facilitating a group workshop around a shared table and flipchart.", archivePhoto("/edu-leader6.jpg", 1280, 720, "Neelam Nisar facilitating a group workshop"), "medium"],
  ["leadership", "An educator’s everyday work", "Neelam Nisar photographed at her office desk.", archivePhoto("/edu-leader1.jpg", 1280, 853, "Neelam Nisar seated at her office desk", "58% 50%"), "small"],
];

export const galleryItems = records.map(([category, title, description, photo, size], index) => ({
  id: index + 1, category, title, description, size,
  image: photo.src, alt: photo.alt, width: photo.width, height: photo.height,
  objectPosition: photo.position, icon: String(index + 1).padStart(2, "0"),
}));

export const galleryCategories = [
  ["all", "All Moments"], ["teaching", "Teaching"], ["leadership", "Leadership"],
  ["events", "Events"], ["achievements", "Recognition"], ["community", "Community"],
].map(([id, label], index) => ({ id, label, icon: String(index + 1).padStart(2, "0"), count: id === "all" ? galleryItems.length : galleryItems.filter(item => item.category === id).length }));

export const storyHighlights = [
  { title: "Celebrating the next generation", description: "A closer look at a student recognition moment shared by Neelam Nisar.", cta: "Explore the moment", href: "/gallery/6" },
  { title: "A moment of shared gratitude", description: "A recognition presentation captured in the school community’s photo archive.", cta: "View the photograph", href: "/gallery/9" },
];
