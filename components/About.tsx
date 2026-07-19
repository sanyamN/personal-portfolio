export default function About() {
  return (
    <section
      id="about"
      className="card mt-8 p-10"
    >
      <p className="mb-2 text-sm uppercase tracking-[6px] text-blue-400">
        ABOUT ME
      </p>

      <h2 className="mb-6 text-4xl font-bold">
        Who am I?
      </h2>

      <p className="text-lg leading-9 text-gray-400">
        I'm <span className="font-semibold text-white">Sanyam Tripathi</span>,
        a Software Engineer passionate about building scalable backend systems,
        AI-powered applications, and cloud-native solutions.

        <br /><br />

        I recently completed my Software Development Engineer Internship at
        <span className="font-semibold text-blue-500"> Amazon </span>
        where I worked on production systems, collaborated with experienced
        engineers, and learned how large-scale software is built.

        <br /><br />

        I enjoy solving challenging problems, designing efficient systems,
        and continuously learning new technologies.
      </p>
    </section>
  );
}