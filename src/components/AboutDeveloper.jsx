const AboutDeveloper = () => {
  return (
    <div className="bg-slate-100 bg-opacity-95 flex justify-center items-center p-8">
      <div className="max-w-5xl mx-auto bg-white p-12 rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-16">
        {/* Left Section: Profile Image, Name, and Social Links */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-8 md:w-1/3">
          {/* Profile Picture */}
          <img
            src="https://media.licdn.com/dms/image/v2/C5103AQHkhR-JfvTYgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1573198501512?e=1738195200&v=beta&t=RoUoxK404abrTScijG8_EwDST80MEv2lRsvhfZIV9Yg"
            alt="Developer Profile"
            className="w-40 h-40 rounded-full border-8 border-gradient-to-r from-pink-600 to-blue-500 mb-6 shadow-xl transform transition duration-500 hover:scale-110 hover:shadow-2xl"
          />
          <h2 className="text-4xl font-bold text-gray-800 transform transition duration-500 hover:scale-105">
            Rahul Pannati
          </h2>
          <p className="text-lg text-gray-600 transition-opacity duration-500 opacity-80 hover:opacity-100">
            Software Developer | Full-stack Web Developer
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-6 text-gray-800 text-3xl">
            <a
              href="https://www.linkedin.com/in/rahul-pannati-599335197"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-300 transform hover:scale-110"
            >
              <img
                src="https://content.linkedin.com/content/dam/me/about/LinkedIn_Icon.jpg.original.jpg"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://github.com/rahulpannati513"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-300 transform hover:scale-110"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
                alt="GitHub"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://rahulpannati.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-300 transform hover:scale-110"
            >
              <img
                src="https://flowcv.com/favicon.svg"
                alt="Portfolio"
                className="w-8 h-8"
              />
            </a>
            <a
              href="mailto:rahulpannati1@gmail.com"
              className="hover:opacity-80 transition duration-300 transform hover:scale-110"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                alt="Email"
                className="w-8 h-8"
              />
            </a>
          </div>

          {/* Download Resume Section */}
          <div className="mt-6 flex flex-col items-center md:items-start">
            <a
              href="https://github.com/rahulpannati513/resume/raw/refs/heads/main/Rahul_Backend_1728286078179_Rahul%20Pannati.pdf"
              download
              className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg hover:opacity-80 transition duration-500 transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Section: About Me, Technologies, and Contact */}
        <div className="md:w-2/3 space-y-10">
          <h3 className="text-3xl font-semibold text-gray-800 transform transition duration-500 hover:scale-105">
            About Me
          </h3>
          <p className="text-lg text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-500">
            I&apos;m a passionate software developer specializing in full-stack
            web development. I have experience in creating modern web
            applications using technologies like Java, Spring Boot, and React. I
            am continuously learning and improving my skills, and I'm always
            looking for new challenges.
          </p>

          <h3 className="text-3xl font-semibold text-gray-800 transform transition duration-500 hover:scale-105">
            Technologies
          </h3>
          <p className="text-lg text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-500">
            I work with a range of technologies, including:
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Java, Spring Boot</li>
              <li>React.js, JavaScript</li>
              <li>Tailwind CSS, Bootstrap</li>
            </ul>
          </p>

          <h3 className="text-3xl font-semibold text-gray-800 transform transition duration-500 hover:scale-105">
            Contact Me
          </h3>
          <p className="text-lg text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-500">
            Feel free to reach out if you have any questions or would like to
            collaborate on a project! I&apos;m always excited to connect with
            like-minded individuals and work on interesting challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDeveloper;
