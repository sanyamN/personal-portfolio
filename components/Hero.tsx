"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative">

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 text-lg text-blue-400"
        >
          👋 Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-6xl font-extrabold leading-tight"
        >
          Sanyam{" "}
          <span className="text-blue-500">
            Tripathi
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-3xl font-semibold text-gray-300"
        >
          Software Development Engineer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-gray-400"
        >
          Amazon SDE Intern passionate about building scalable backend
          systems, cloud-native applications, and AI-powered software.
          I enjoy designing production-ready solutions that combine
          performance, reliability, and clean architecture.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700"
          >
            View Projects
            <ArrowRight size={18} />
          </a>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:border-blue-500 hover:text-blue-400"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4"
        >
          {[
            {
              title: "Amazon",
              subtitle: "SDE Intern",
            },
            {
              title: "AWS",
              subtitle: "Cloud Development",
            },
            {
              title: "8+",
              subtitle: "Projects Built",
            },
            {
              title: "AI / ML",
              subtitle: "Production Focus",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition hover:border-blue-500 hover:bg-white/10"
            >
              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {item.subtitle}
              </p>
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}