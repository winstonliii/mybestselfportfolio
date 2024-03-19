import NavBar from "@/components/NavBar";

const Growth = () => {
  return (
    <div className="">
      <NavBar />
      <div className="mt-60 relative isolate overflow-hidden py-24 sm:py-32 sm:mt-40 xl:mx-auto xl:max-w-8xl xl:px-">
        <img
          src={"cloud1.jpg"}
          alt=""
          className="aspect-[7/2] w-full object-cover xl:rounded-3xl"
        />
      </div>
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="pt-28 mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-xl font-semibold leading-7 text-indigo-600">
            Looking Ahead
          </p>
          <h1 className="pt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Growth as a Leader
          </h1>
          <p className="mt-6 text-xl leading-8">
            In the Growth section, I explore the delicate balance between
            assertiveness and empathy, crucial for effective leadership and
            teamwork. As an ENTJ-A personality type, I aim to integrate patience
            and empathy into my leadership style to better understand and
            address the diverse needs of my team members.
          </p>

          <figure className="mt-16">
            <img
              className="aspect-video rounded-xl bg-gray-50 object-cover"
              src={"legodestroyerr.png"}
              alt=""
            />

            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500"></figcaption>
          </figure>

          <div className="mt-10 max-w-2xl">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Areas of Growth
            </h2>
            <h2 className="text-lg tracking-tight text-gray-500">
              Balancing Assertiveness with Empathy
            </h2>
            <p className="mt-6">
              One area of growth for me both as a leader and teammate is
              balancing my assertiveness and strong-willed nature, derived from
              my ENTJ-A personality type, with increased patience and empathy.
              While my commanding presence and decisiveness drive progress and
              innovation, I recognize the importance of integrating patience and
              empathy into my leadership to understand and address the diverse
              needs and emotions of my team members more effectively.
            </p>

            <img
              className="mt-10 aspect-video rounded-xl bg-gray-50 object-cover"
              src={"IMG5904.jpg"}
              alt=""
            />

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Immediate and Concrete Improvement Action
            </h2>
            <h2 className="text-lg tracking-tight text-gray-500">
              Active Empathy Practice
            </h2>
            <p className="mt-6">
              An immediate and concrete way to improve in this area is to
              initiate "vibe check sessions" before my team meetings. In these
              sessions, I plan to allocate time for team members to share their
              thoughts, concerns, and feelings about not just the ongoing
              projects or team dynamic, but anything that is on their minds. I
              believe that valuing the mental health and well-being of your team
              is synonymous with valuing those same qualities in myself. During
              these sessions, my focus will be on patiently listening actively
              without immediately responding or jumping to solutions or
              judgments. This practice aims to foster a supportive environment
              where all team members feel valued and understood. Additionally, I
              will reflect on these insights after the sessions to better
              configure my communication and leadership approach, ensuring it
              resonates with each team member's unique perspective and needs.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Impact on Current Team
            </h2>
            <h2 className="text-lg tracking-tight text-gray-500">
              Improvements in Leadership Quality
            </h2>
            <p className="mt-6">
              Implementing this improvement will significantly enhance the
              dynamics within my current teams, especially in projects where I'm
              actively involved, such as the startups, assignments, and
              organizations at Johns Hopkins. Specifically with the startup I am
              working on with HopStart, I know that balancing my natural
              assertiveness with empathy and patience will allow me to create a
              more inclusive and collaborative environment that leverages the
              diverse strengths and viewpoints of each team member. This
              approach will not only mitigate potential conflicts but also
              enrich our collective problem-solving and innovation capabilities,
              leading to higher-quality outcomes and a more cohesive, motivated
              team.
            </p>
            <p className="mt-8">
              Ultimately, this balanced leadership approach aligns with my
              broader interests in fostering an inclusive environment while
              advancing the biotechnology sector, as driving transformative
              initiatives requires ensuring that all my team member's voices are
              heard and valued.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
