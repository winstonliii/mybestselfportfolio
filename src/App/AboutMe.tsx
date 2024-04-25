import NavBar from "@/components/NavBar";

const timeline = [
  {
    name: "Day 1",
    description:
      "Born late at night in Pasadena, California, my journey began as I entered this world in a cacophony of cries and confusion.",
    date: "February 21, 2003",
    dateTime: "2003-02",
  },
  {
    name: "First Dissection",
    description:
      "A landmark moment in my biological studies, I performed my first dissection of a Planarian flatworm. This experience was pivotal, enriching my understanding of nature and biology.",
    date: "Dec 7, 2014",
    dateTime: "2014-12",
  },
  {
    name: "Arrive at Johns Hopkins University",
    description:
      "My academic journey at Johns Hopkins University begins in a humid August afternoon. I explored many different majors and focuses such as Philosophy, MolCell, and pre-law.",
    date: "Auguest 16, 2021",
    dateTime: "2021-08",
  },
  {
    name: "Today",
    description:
      "As of now, I am deeply involved in various projects and research initiatives at the nexus of computer science, public health, and biotechnology, continually striving to leverage technology for meaningful healthcare innovations.",
    date: "March 15, 2024",
    dateTime: "2024-03",
  },
];

const AboutMe = () => {
  return (
    <div>
      <NavBar />

      <div className="bg-white">
        <div className="isolate">
          <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-12 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                <div className="lg:col-span-7">
                  {/*change this when adding img */}
                  <p className="mt-32 text-xl font-semibold leading-7 text-indigo-600">
                    Welcome to My Leadership Journey
                  </p>
                  <h1 className="mt-4 max-w-2xl text-5xl font-bold tracking-tight text-gray-900 lg:col-span-2 xl:col-auto">
                    About Me
                  </h1>
                  <p className="mt-6 text-2xl leading-loose text-gray-500 ">
                    Hello and welcome! I'm Winston, currently a third-year
                    undergraduate Bachelor of Science student at Johns Hopkins
                    University pursuing a major in Computer Science and Pre-Med
                    Public Health, passionate about integrating technology in
                    healthcare with a focus on the biotechnology sector.
                  </p>
                  <p className="mt-4 text-2xl leading-loose text-gray-500">
                    My academic journey consists of a unique blend of technical
                    proficiency and ethical grounding, shaped by my extensive
                    engagement in bioethics and moral philosophy. This unique
                    perspective fuels my ambition to harness the potential of
                    biotechnology to address pressing health challenges and
                    improve quality of life on a global scale.
                  </p>
                </div>

                <div className="col-start-9 col-span-5 rounded-2xl ">
                  <img
                    src={"IMG5912.jpeg"}
                    alt=""
                    className="mt-2 aspect-[6/6] w-96 rounded-4xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                  />
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
          </div>
          <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <img
              src={"cloud1.jpg"}
              alt=""
              className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            />
          </div>

          {/* Content section */}
          <div className="mt-32 overflow-hidden sm:mt-40">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                <div className="lg:col-end-1 lg:w-full lg:max-w-xl lg:pb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Personal Background:
                  </h2>
                  <p className="mt-10 text-2xl leading-relaxed text-gray-600">
                    Born and raised in Greater{" "}
                    <strong>Los Angeles, California</strong>, I spent the
                    majority of my early life in Southern California. My family
                    at home consists of my mother and father, my younger brother
                    of one year, my younger sister of four years, and my German
                    Shepherd named Buddy.
                  </p>
                  <p className="mt-6 text-2xl leading-relaxed text-gray-600">
                    Growing up I participated in many different activities
                    including reading, piano, soccer, chess, and being a church
                    choir singer just to name a few. At the age of six, I
                    discovered the pool. In the beginning, I saw the open pool
                    as a cold and vast ocean of repetitive pain and agony.
                    However, I realized these thoughts would only occupy my mind{" "}
                    beforeI had learned to conquer cold water by forgetting it
                    even existed, from then on, I would change my clothes, grab
                    my goggles, and just send it every time. Before I knew it,
                    my inevitable journey in life as a swimmer would unfold
                    before me. the beginning of my journey as a swimmer in a
                    moderately-sized pool in Brea California. However, later
                    into middle and high school, I discovered within those
                    waters lay a sanctuary for my mind—a place where clarity
                    could wash over me, clearing my mind entirely, and where
                    excitement replaced apprehension.
                  </p>
                  <p className="mt-6 text-2xl leading-relaxed text-gray-600">
                    I found solace and relaxation in the pool, it almost felt
                    like waking up again with a clear mind after each practice.
                    This mindset allowed me to compete and excel, I not only
                    enjoyed the tranquility of swimming but also ascended to
                    varsity swim captain for two years on my high school Swim
                    and Dive team. Keeping in line with the theme of water, I
                    also developed a passion for water polo as I saw it as
                    swimming but with more strategy and ball throwing. I also
                    joined my school's triathlon team where I was highly active
                    and participated in countless races. My journey reached new
                    heights when I joined the ranks of the diligent lifeguards
                    at the Rose Bowl Aquatics Center, where I was able to take
                    the next step to hone my aquatic skills to ensure the safety
                    of others.
                  </p>
                  <p className="mt-6 text-2xl leading-relaxed text-gray-600">
                    From an early age, I developed a profound appreciation for
                    the process of creation. From Lego construction to the
                    intricate precision of soldering kits, from programming
                    games to designing and constructing VEX/FIRST robots for
                    competitions, I have honed and shaped my passion for
                    innovation and problem-solving.
                  </p>
                  <p className="mt-6 text-2xl leading-relaxed text-gray-600">
                    Despite my technical journey, my approach to challenges is
                    deeply influenced by Philosophy, another realm that I have
                    great appreciation for. Philosophy is a discipline to which
                    I have devoted considerable attention throughout high school
                    and at many universities such as Brown and Yale where I took
                    a course on “Moral Medicine: Questions in Bioethics at the
                    Cutting Edge” and “Moralities of Everyday Life”. Through
                    these academic endeavors, I have gained invaluable insights
                    into ethical dilemmas, critical thinking, and the
                    complexities of moral decision-making, enriching my
                    understanding of the philosophical concepts that shape our
                    perspectives. This intellectual pursuit has significantly
                    contributed to the development and refinement of my life
                    perspective and is something I apply consistently in both
                    personal and professional realms. This curiosity led me to
                    pursue an education at Johns Hopkins University, where I
                    discovered my passion for public health and computer
                    science, fields which I believe will enable me to effect to
                    most change in our world.
                  </p>
                </div>

                <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                  <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                    <img
                      src={"IMG5918.jpg"}
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                    <img
                      src={"IMG0365.jpg"}
                      alt=""
                      className="mt-12 aspect-[5/6] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                    <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                      <img
                        src={"79903.jpg"}
                        alt=""
                        className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                    <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                      <img
                        src={"200952.jpg"}
                        alt=""
                        className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                    <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                      <img
                        src={"52010_.jpg"}
                        alt=""
                        className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline section */}
          <div className="mx-auto mt-48 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {timeline.map((item) => (
                <div key={item.name}>
                  <time
                    dateTime={item.dateTime}
                    className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                  >
                    <svg
                      viewBox="0 0 4 4"
                      className="mr-4 h-1 w-1 flex-none"
                      aria-hidden="true"
                    >
                      <circle cx={2} cy={2} r={2} fill="currentColor" />
                    </svg>
                    {item.date}
                    <div
                      className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                      aria-hidden="true"
                    />
                  </time>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {item.name}
                  </p>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <div>
                <h1 className="mt-2 max-w-2xl text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                  Interests and Passions
                </h1>
                <p className="mt-6 text-xl leading-loose text-gray-600">
                  Beyond my professional life, I enjoy activities like swimming,
                  water polo, badminton, and triathlon. Additionally, my
                  American Red Cross certifications in First Aid, CPR, AED, and
                  lifeguard training equip me to respond effectively in
                  emergencies. Furthermore, growing up in a Chinese-American
                  household has given me fluency in Mandarin, something I am
                  truly grateful for, allowing me to enhance my ability to
                  engage with diverse communities, reflecting my broader
                  interests in cultural exchange and communication.
                </p>
                <p className="mt-4 text-xl leading-loose text-gray-600">
                  In my pursuit of combining tech and health, I am actively
                  involved in various projects and research initiatives that sit
                  at the nexus of computer science, public health, and
                  biotechnology. Some examples of this include conducting
                  research on computational models for detecting gene mutations
                  and developing software solutions aimed at improving patient
                  care and healthcare delivery.
                </p>
              </div>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1"></div>
              <img
                src=""
                alt=""
                className="mt-2 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>

          <div className="mx-auto max-w-7xl py-32 sm:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <div>
                <h1 className="mt-2 max-w-2xl text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                  Purpose and Mission
                </h1>
                <p className="mt-6 text-2xl leading-loose text-gray-600">
                  In the future, I envision myself leading my biotechnology
                  company and lab with a commitment to innovation, accessible
                  healthcare, and social well-being. At the intersection of
                  public health and computer science, I aspire to drive
                  transformative initiatives that redefine healthcare.
                </p>
                <p className="mt-4 text-2xl leading-loose text-gray-600">
                  By leveraging my experience and expertise in technology and
                  biological sciences, I aim to pioneer solutions that will
                  address pressing global challenges by way of research and
                  software. Through effective leadership, fostering a culture of
                  collaboration, and beneficial group norms, I endeavor to
                  cultivate an inclusive environment where diverse perspectives
                  converge to propel scientific discovery forward. Upholding
                  rigorous standards of excellence, my ultimate goal is to
                  position the company as a frontrunner in biotechnological
                  advancement, making significant contributions to public health
                  and sustainable development worldwide.
                </p>
              </div>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1"></div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
              <div className="w-full lg:max-w-lg lg:flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  My Life at Hopkins
                </h2>
                <p className="text-2xl mt-6 leading-loose text-gray-500">
                  At Johns Hopkins, I have embraced opportunities to expand my
                  knowledge and skills beyond the classroom. Participating in
                  hackathons and interdisciplinary workshops, I have
                  collaborated with peers to devise innovative solutions to
                  real-world health issues, from improving hospital workflows to
                  creating user-friendly digital health applications. These
                  experiences have honed my teamwork and leadership abilities,
                  while also fostering a deep appreciation for the
                  transformative power of collaborative innovation.
                </p>
                <img
                  src={"IMG073.jpg"}
                  alt=""
                  className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                />
              </div>

              <div className="w-full lg:max-w-xl lg:flex-auto">
                <p className="text-2xl -my-8 divide-y leading-loose text-gray-500">
                  <p>
                    Some on-campus organizations that I actively engage in
                    include HopHacks, HopAI, HopStart, Prometheus Undergraduate
                    Philosophy Journal, Agar Bio Lab, Poetry as Medicine, and
                    the Swim Club. I was also able to gain valuable lab
                    experience working under The Hackam Lab for Pediatric
                    Surgical, Translational, and Regenerative Medicine.
                    Currently, I am working with two startups: one developing a
                    personalized learning tool that leverages machine learning
                    capabilities to address the unique educational requirements
                    of individuals with learning disabilities, and another
                    creating an AI-powered tool designed to automate and
                    streamline insurance claims processing and medical billing.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
