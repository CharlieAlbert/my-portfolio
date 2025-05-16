"use client";

import { Briefcase, CalendarDays, MapPin } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location?: string;
  period: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Developer",
    company: "Brandlogs Inc.",
    location: "Remote",
    period: "Aug 2024 – Present",
    points: [
      "Collaborated on a 5-month MVP using Next.js, TypeScript, Supabase, and AWS Amplify",
      "Participated in scope definition and HTML/CSS prototyping",
      "Conducted user testing and integrated feedback to enhance UX",
      "Contributed to CI/CD workflows and clean code practices",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Brandlogs Inc.",
    location: "Remote",
    period: "Jan 2024 – Aug 2024",
    points: [
      "Maintained and developed client websites on various platforms",
      "Assisted in debugging and QA processes",
      "Contributed to full-stack application development",
      "Authored reports and conducted technical research",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "Mar 2025 – Apr 2025",
    points: [
      "Built a full-stack customer feedback platform with authentication and chat",
      "Developed dynamic dashboards for user and client management",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "Mar 2024 – May 2024",
    points: [
      "Developed a membership platform with subscription and product management",
      "Created a customizable checkout flow to enhance user experience",
    ],
  },
  {
    title: "Web Development Contractor",
    company: "Jamboleo Auto Engineering Ltd & Ankards Company Ltd",
    period: "—",
    points: [
      "Designed and deployed responsive websites tailored to business needs",
      "Improved UI/UX based on client feedback and feature requirements",
    ],
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-10 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Resume</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-indigo-600" />
              {exp.title}
            </h3>
            <p className="text-gray-700 flex items-center gap-2 mt-1">
              <span className="font-medium">{exp.company}</span>
              {exp.location && (
                <>
                  <span>·</span>
                  <MapPin className="w-4 h-4 inline text-gray-500" />
                  <span>{exp.location}</span>
                </>
              )}
            </p>
            <p className="text-gray-500 flex items-center gap-2 text-sm mt-1">
              <CalendarDays className="w-4 h-4" />
              {exp.period}
            </p>
            <ul className="list-disc list-inside mt-3 text-gray-600 space-y-1">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
