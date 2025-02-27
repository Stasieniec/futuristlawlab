export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      {/* Header/Navigation */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="font-bold text-2xl text-indigo-600 dark:text-indigo-400">Futurist Law Lab</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">About</a>
            <a href="#research" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Research</a>
            <a href="#publications" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Publications</a>
            <a href="#team" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Team</a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          Shaping the Future of Legal Systems
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-10 text-gray-700 dark:text-gray-300">
          Exploring the intersection of emerging technologies, legal frameworks, and societal transformation.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a 
            href="#research" 
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-lg"
          >
            Our Research
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              The Futurist Law Lab is dedicated to researching, developing, and advocating for innovative legal frameworks that can address the rapidly evolving technological landscape.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We bring together legal scholars, technologists, policy makers, and industry leaders to collaborate on forward-thinking solutions to emerging legal challenges.
            </p>
          </div>
          <div className="bg-gray-200 dark:bg-gray-800 rounded-xl p-10 h-80 flex items-center justify-center">
            <p className="text-xl font-semibold text-center text-gray-600 dark:text-gray-400">Vision Graphic Placeholder</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-bold text-xl text-indigo-600 dark:text-indigo-400 mb-3">Futurist Law Lab</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Futurist Law Lab. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
