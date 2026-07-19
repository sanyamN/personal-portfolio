export default function Experience() {
  const experience = [
    {
      company: "Amazon",
      role: "Software Development Engineer Intern",
      duration: "Jan 2026 – Present",
      achievements: [
        "Built a production-ready Critical Incident Management Dashboard for centralized live incident monitoring.",
        "Developed backend APIs and workflow automation using Python and AWS services.",
        "Designed an AI-powered reporting platform for migration visibility and stakeholder reporting.",
        "Implemented incident lifecycle management, communication history, and duplicate ticket handling.",
        "Delivered production-ready features through CI/CD deployments and security review compliance.",
      ],
      tech: [
        "React",
        "TypeScript",
        "Python",
        "AWS Lambda",
        "API Gateway",
        "DynamoDB",
        "SES",
        "CloudWatch",
        "Git",
      ],
    },
    {
      company: "Bumima",
      role: "Product Manager Intern",
      duration: "Jun 2025 – Jan 2026",
      achievements: [
        "Collaborated with engineering teams to improve onboarding workflows.",
        "Designed UX improvements based on user feedback.",
        "Managed product roadmap and sprint planning using Jira and Notion.",
        "Performed competitor analysis and identified revenue growth opportunities.",
      ],
      tech: [
        "Jira",
        "Notion",
        "Figma",
        "SQL",
        "Excel",
      ],
    },
    {
      company: "Terrace Healthcare",
      role: "Software Engineer Intern",
      duration: "Jan 2025 – Jul 2025",
      achievements: [
        "Built a reporting application using FastAPI, Flask, PostgreSQL, and Docker.",
        "Automated attendance tracking and reporting workflows.",
        "Designed REST APIs and backend architecture.",
        "Improved reporting efficiency for internal teams.",
      ],
      tech: [
        "FastAPI",
        "Flask",
        "Docker",
        "PostgreSQL",
        "Python",
      ],
    },
  ];

  return (
    <section id="experience" className="mt-20">
      <p className="uppercase tracking-[5px] text-blue-400 text-sm">
        EXPERIENCE
      </p>

      <h2 className="mt-3 text-5xl font-bold">
        Professional Journey
      </h2>

      <div className="relative mt-14 border-l border-blue-500/30 pl-8">
        {experience.map((job, index) => (
          <div key={index} className="relative mb-14">
            <div className="absolute -left-[42px] top-2 h-5 w-5 rounded-full border-4 border-[#0B1120] bg-blue-500"></div>

            <div className="rounded-3xl border border-white/10 bg-[#10141d] p-8 transition hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-bold">{job.company}</h3>

                  <p className="mt-2 text-xl text-blue-400">
                    {job.role}
                  </p>
                </div>

                <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                  {job.duration}
                </span>
              </div>

              <ul className="mt-8 space-y-3">
                {job.achievements.map((item) => (
                  <li
                    key={item}
                    className="text-gray-300 leading-7"
                  >
                    ✓ {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {job.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}