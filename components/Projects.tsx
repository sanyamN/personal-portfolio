const projects = [
  {
    title: "Critical Incident Management Dashboard",
    company: "Amazon",
    period: "Production Project",
    description:
      "Developed a production-ready full-stack dashboard enabling on-call engineers to monitor and manage live critical incidents from a centralized interface. Designed scalable backend services, automated incident workflows, and integrated cloud-native AWS services for real-time tracking and communication.",
    highlights: [
      "Live Critical Incident Tracking",
      "Centralized On-call Dashboard",
      "Incident Lifecycle Management",
      "Duplicate Ticket Detection",
      "Communication History",
      "Workflow Automation",
      "Production Deployment",
    ],
    tech: [
      "React",
      "TypeScript",
      "Python",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "SES",
      "IAM",
      "CloudWatch",
    ],
    github: "#",
    demo: "#",
  },

  {
    title: "AI Agent Reporting Platform",
    company: "Amazon",
    period: "Production Project",
    description:
      "Designed and deployed an AI-powered reporting platform providing migration visibility and automated stakeholder reporting. Streamlined reporting workflows while reducing manual effort through intelligent automation.",
    highlights: [
      "AI-powered Reports",
      "Migration Visibility",
      "Stakeholder Dashboards",
      "Workflow Automation",
      "Production Ready",
    ],
    tech: [
      "Python",
      "AWS Lambda",
      "DynamoDB",
      "S3",
      "CloudWatch",
      "React",
    ],
    github: "#",
    demo: "#",
  },

  {
    title: "Crypto Trade Simulator",
    company: "Personal Project",
    period: "AI + Quantitative Finance",
    description:
      "Developed a real-time crypto trading simulator using OKX live order book data with predictive analytics and the Almgren–Chriss market impact model. Improved execution latency by 50% using multithreading and efficient caching.",
    highlights: [
      "Live Order Book",
      "Logistic Regression",
      "Latency Reduced by 50%",
      "Multithreading",
      "Market Impact Analysis",
    ],
    tech: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "OKX API",
      "PyQt",
    ],
    github: "#",
    demo: "#",
  },

  {
    title: "Fashionista Recommendation Engine",
    company: "Deep Learning",
    period: "Computer Vision",
    description:
      "Built a deep learning recommendation engine using ResNet-50 to analyze more than 10,000 fashion images and generate personalized recommendations with approximately 90% accuracy.",
    highlights: [
      "10,000+ Images",
      "90% Accuracy",
      "ResNet-50",
      "Recommendation Engine",
    ],
    tech: [
      "TensorFlow",
      "Python",
      "Flask",
      "ResNet-50",
      "NumPy",
    ],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-12">
      <div className="mb-12">
        <p className="text-blue-400 uppercase tracking-[5px] text-sm">
          FEATURED PROJECTS
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Building Products That Scale
        </h2>

        <p className="text-gray-400 mt-5 max-w-3xl leading-8">
          From production-grade cloud platforms at Amazon to AI-powered
          applications and quantitative trading systems, these projects reflect
          my experience building scalable software, backend systems, and
          intelligent applications.
        </p>
      </div>

      <div className="space-y-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-white/10 bg-[#10141d] p-10 transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                  {project.company}
                </span>

                <h3 className="mt-5 text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  {project.period}
                </p>
              </div>
            </div>

            <p className="mt-8 text-gray-300 leading-8 text-lg">
              {project.description}
            </p>

            <div className="mt-8">
              <h4 className="mb-4 text-lg font-semibold">
                Key Highlights
              </h4>

              <div className="grid gap-3 md:grid-cols-2">
                {project.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-gray-300"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href={project.github}
                className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                className="rounded-xl border border-blue-500 px-6 py-3 font-medium transition hover:bg-blue-500/10"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}