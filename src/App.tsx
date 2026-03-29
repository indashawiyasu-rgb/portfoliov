import { motion } from "framer-motion";
import { Mail, Phone, MapPin, X, Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
        {/* NAVBAR */}
        <div className="fixed top-0 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="font-bold">Iyasu</h1>
            <div className="flex gap-4 items-center">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
              <button onClick={() => setDark(!dark)}>
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-28 pb-10 space-y-16">
          {/* HERO */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-4"
          >
            <h1 className="text-5xl font-bold">Iyasu Indashaw</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Junior IT Operations | Data & Customer Support
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setOpen(true)}
                className="px-5 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black"
              >
                Preview CV
              </button>

              <a
                href="https://drive.google.com/uc?export=download&id=1yvHowbVJrRwL4ia0IFrDqJe76tMye7PS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-5 py-2 rounded-xl border">
                  Download CV
                </button>
              </a>
            </div>
          </motion.section>

          {/* ABOUT */}
          <section
            id="about"
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow"
          >
            <h2 className="text-2xl font-semibold mb-3">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Detail-oriented professional with experience in data validation,
              customer service, and handling sensitive information. Passionate
              about IT operations and fintech.
            </p>
          </section>

          {/* SKILLS */}
          <section
            id="skills"
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow"
          >
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Data Entry",
                "Data Validation",
                "Problem Solving",
                "Attention to Detail",
                "Digital Systems",
                "Customer Support",
              ].map((skill, i) => (
                <div
                  key={i}
                  className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section
            id="projects"
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow"
          >
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3].map((p) => (
                <div
                  key={p}
                  className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl"
                >
                  <h3 className="font-semibold">Project {p}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Data validation & efficiency improvement project.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section
            id="contact"
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center"
          >
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
              <div className="flex justify-center gap-2">
                <Mail size={18} /> indashawiyasu@gmail.com
              </div>
              <div className="flex justify-center gap-2">
                <Phone size={18} /> +251 947777760
              </div>
              <div className="flex justify-center gap-2">
                <MapPin size={18} /> Addis Ababa, Ethiopia
              </div>
            </div>
          </section>
        </div>

        {/* CV MODAL */}
        {open && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-900 w-full max-w-4xl h-[80vh] rounded-xl relative">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3"
              >
                <X />
              </button>

              <iframe
                src="https://drive.google.com/file/d/1yvHowbVJrRwL4ia0IFrDqJe76tMye7PS/preview"
                className="w-full h-full"
                title="CV Preview"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
