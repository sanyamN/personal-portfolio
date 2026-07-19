export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-10">

        <h1 className="text-2xl font-bold">
          Sanyam<span className="text-blue-500">.</span>
        </h1>

        <nav>

          <ul className="hidden gap-10 text-gray-300 md:flex">

            <li>
              <a href="#about" className="hover:text-blue-500">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="hover:text-blue-500">
                Skills
              </a>
            </li>

            <li>
              <a href="#experience" className="hover:text-blue-500">
                Experience
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-blue-500">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>

          </ul>

        </nav>

      </div>

    </header>
  );
}