import NavBar from "@/components/NavBar";

const AboutMe = () => {
  return (
    <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <NavBar />

      <div className="py-16 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:mt-12">
        About Me
      </div>
      <div className="text-xl text-gray-600">
        <p>
          This is the About Me page. Here, you can introduce yourself, your
          background, and anything else you want visitors to know about you. You
          might discuss your journey, experiences, or the goals of your
          portfolio.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
