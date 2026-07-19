export default function Skills() {
  const skillCategories = [
    {
      title: "☁ Cloud & AWS",
      skills: [
        "AWS Lambda",
        "EC2",
        "S3",
        "DynamoDB",
        "RDS",
        "API Gateway",
        "IAM",
        "CloudWatch",
        "SQS",
        "SNS",
        "SES",
        "Step Functions",
        "CloudFormation",
        "CodePipeline",
        "CodeBuild",
        "Secrets Manager",
        "Systems Manager",
        "CloudFront",
      ],
    },
    {
      title: "⚙ Backend",
      skills: [
        "Python",
        "FastAPI",
        "Flask",
        "REST APIs",
        "Node.js",
        "PostgreSQL",
        "MySQL",
        "Docker",
      ],
    },
    {
      title: "💻 Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      title: "🤖 AI / Machine Learning",
      skills: [
        "TensorFlow",
        "PyTorch",
        "YOLO",
        "ResNet-50",
        "scikit-learn",
        "Pandas",
        "NumPy",
        "OpenCV",
      ],
    },
    {
      title: "🛠 Developer Tools",
      skills: [
        "Git",
        "GitHub",
        "Linux",
        "VS Code",
        "Jira",
        "Figma",
        "Power BI",
        "Tableau",
        "Excel",
      ],
    },
  ];

  return (
    <section id="skills" className="mt-24">
      <p className="uppercase tracking-[5px] text-blue-400 text-sm">
        TECH STACK
      </p>

      <h2 className="mt-3 text-5xl font-bold">
        Technologies I Work With
      </h2>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
        Throughout my internships and personal projects, I've worked across
        backend engineering, cloud infrastructure, frontend development,
        artificial intelligence, and DevOps to build scalable production
        systems.
      </p>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-3xl border border-white/10 bg-[#10141d] p-8 transition duration-300 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            <h3 className="mb-6 text-2xl font-bold">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}