import Image from "next/image";
import { MapPin, Download } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="card sticky top-28 h-fit w-[330px] p-8">

      {/* Profile Image */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-blue-600 blur-xl opacity-60"></div>

          <Image
            src="/images/profile.jpg"
            alt="Profile"
            width={300}
            height={300}
            className="relative h-[300px] w-[300px] rounded-full border-4 border-blue-500 object-cover object-[center_15%]"
          />
        </div>
      </div>

      {/* Name */}
      <h2 className="mt-8 text-center text-3xl font-bold">
        Sanyam
        <span className="text-blue-500"> Tripathi</span>
      </h2>

      <p className="mt-3 text-center text-gray-400">
        Software Development Engineer
      </p>

      {/* Amazon Badge */}
      <div className="mt-4 flex justify-center">
        <span className="rounded-full bg-orange-500/20 px-4 py-1 text-sm font-medium text-orange-300">
          🟠 Amazon • SDE Intern
        </span>
      </div>

      {/* Availability */}
      <div className="mt-3 flex justify-center">
        <span className="rounded-full bg-green-500/20 px-4 py-1 text-sm text-green-400">
          ● Open to Opportunities
        </span>
      </div>

      <div className="my-8 h-px bg-white/10"></div>

      {/* Contact Info */}
      <div className="space-y-5">

        <div className="flex items-center gap-3 text-gray-300">
          <MapPin size={18} />
          India
        </div>

        <div className="flex items-center gap-3 text-gray-300">
          <FaEnvelope size={18} />
          sanyamtripathi832000@gmail.com
        </div>

      </div>

      {/* Resume */}
      <a
        href="/resume.pdf"
        download
        className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-700"
      >
        <Download size={18} />
        Download Resume
      </a>

      {/* Social Links */}
      <div className="mt-8 flex justify-center gap-7">

        <a
          href="https://github.com/sanyamN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={24}
            className="transition hover:scale-110 hover:text-blue-500"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/sanyam-tripathi-16423330a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={24}
            className="transition hover:scale-110 hover:text-[#0A66C2]"
          />
        </a>

        <a
          href="https://www.instagram.com/sanyamt94?igsh=OHN4b3dmaHRvbDVh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={24}
            className="transition hover:scale-110 hover:text-pink-500"
          />
        </a>

        <a href="mailto:sanyamtripathi832000@gmail.com">
          <FaEnvelope
            size={24}
            className="transition hover:scale-110 hover:text-red-400"
          />
        </a>

      </div>

    </aside>
  );
}