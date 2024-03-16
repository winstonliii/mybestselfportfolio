import NavBar from "@/components/NavBar";

const Reflections = () => {
  return (
    <div>
      <NavBar />
      <div className="mt-48 relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-12 lg:items-start lg:gap-y-10">
        <div className="lg:col-start-4 lg:col-span-4 lg:row-start-1 ">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            Lessons and Insights
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Reflecting on My Leadership Journey
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-500">
            Embarking on a journey of leadership introspection often leads us to
            create a framework that helps us understand the nuances of
            leadership and followership. The Situational Leadership Model,
            created by Hersey and Blanchard, is an example of a framework that
            helps us understand when and how leaders navigate diverse
            environments of team dynamics and task complexities.
          </p>
        </div>

        {/* Insert Image Here */}
        <div className="lg:col-start-8 lg:col-span-5 lg:row-start-1">
          <img
            className="size-96 mx-auto mt-8 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
            src="https://i0.wp.com/www.business-to-you.com/wp-content/uploads/2020/03/Hersey-and-Blanchard-Situational-Leadership-Model.png?resize=768%2C916&ssl=1"
            alt="Hersey and Blanchard Situational Leadership Model"
          />
        </div>

        <div className="lg:col-start-4 lg:col-span-6 lg:row-start-2">
          <p className="text-3xl font-bold leading-7 text-gray-900">
            What is Situational Leadership?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-500">
            Hersey and Blanchard's Situational Leadership Model provides a
            framework that suggests there is no single ideal style of
            leadership. Instead, Hersey and Blanchard believe that effective
            leadership is dependent upon various factors, including the level of
            skill and development of the team members (followers) and the
            specific task or situation at hand. This model is focused on the
            ability to adapt leadership styles to meet the needs of team members
            and tasks, emphasizing the importance of flexibility, understanding,
            and communication in leadership roles. Here's an in-depth look at
            the model based on the provided description:
          </p>
        </div>

        <div className="mt-12 lg:col-start-4 lg:col-span-6 lg:row-start-3">
          <p className="text-3xl font-bold leading-7 text-gray-900">
            Key Concepts of the Situational Leadership Model
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-500">
            The key concepts of the Situational Leadership Model involve
            individual variables to consider, including one's background,
            personality, learning style, experience, ego, and motivators
            Situational Leadership means adapting your leadership style to each
            unique situation or task to meet the needs of the team or team
            members. Leaders adapt a style of leadership to empower their
            employees.
          </p>

          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <p className="mt-6 text-lg leading-8 text-gray-500">
              Understanding the Situational Leadership Model requires
              consideration of an employee's performance readiness level (how
              willing and able) and requires the consideration of direction and
              support required from the leader.
            </p>
            <li className="flex gap-x-3 text-xl">
              <span>
                <p className="font-semibold text-gray-700">
                  1. Task Readiness (Ability and Development):
                </p>
                <p className="font-normal text-gray-500">
                  This refers to the follower's ability or competence to perform
                  a given task. It includes their experience, skills, and
                  knowledge related to the task.
                </p>
              </span>
            </li>
            <li className="flex gap-x-3 text-xl">
              <span>
                <p className="font-semibold text-gray-700">
                  2. Psychological Readiness (Commitment and Willingness):
                </p>
                <p className="font-normal text-gray-500">
                  This is the degree to which a follower is willing or motivated
                  to take on a task. It encompasses their confidence,
                  commitment, and willingness to take responsibility for their
                  actions.
                </p>
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-12 lg:col-start-4 lg:col-span-6 lg:row-start-4">
          <p className="text-3xl font-bold leading-7 text-gray-900">
            The Four Levels of Follower Readiness
          </p>

          <ul
            role="list"
            className="mt-12 list-disc pl-5 space-y-2 text-xl leading-8 text-gray-700"
          >
            <li>
              <strong>R1 (Low Competence, Low Commitment)</strong>
              <p className="mb-8">
                Typically, these followers lack the necessary skills and are
                unwilling or insecure. They require a Directive style of
                leadership (S1), where the leader provides specific instructions
                and closely supervises task performance.
              </p>
            </li>
            <li>
              <strong>R2 (Low Competence, High Commitment)</strong>
              <p className="mb-8">
                These followers are enthusiastic but lack specific skills. They
                benefit from a Coaching leadership style (S2), which combines
                highly directive behavior with highly supportive behavior,
                focusing on skill-building and confidence-boosting.
              </p>
            </li>
            <li>
              <strong>R3 (High Competence, Low Commitment)</strong>
              <p className="mb-8">
                These individuals have the skills but lack motivation or
                confidence. They respond well to a Supporting leadership style
                (S3), which involves less direction and more listening,
                praising, and encouraging input.
              </p>
            </li>
            <li>
              <strong>R4 (High Competence, High Commitment)</strong>
              <p className="mb-8">
                These followers are skilled, confident, and able to work
                independently. They require a Delegating leadership style (S4),
                where the leader provides little direction or support, instead
                empowering them to take responsibility for their tasks.
              </p>
            </li>
          </ul>

          <p className="mt-6 text-lg leading-8 text-gray-500">
            The key concepts of the Situational Leadership Model involve
            individual variables to consider, including one's background,
            personality, learning style, experience, ego, and motivators
            Situational Leadership means adapting your leadership style to each
            unique situation or task to meet the needs of the team or team
            members. Leaders adapt a style of leadership to empower their
            employees.
          </p>
        </div>

        <div className="mt-12 lg:col-start-4 lg:col-span-6 lg:row-start-5">
          <p className="text-3xl font-bold leading-7 text-gray-900">
            Qualities of a Situational Leader
          </p>
          <div className="mt-6 text-lg leading-8 text-gray-500">
            <p className="text-gray-500 mb-4">
              A great leader should develop the following Situational Leadership
              qualities:
            </p>
            <p className="mb-4">
              <span className="font-bold"> Flexibility </span>- Leaders pay
              close attention to the changing needs of the team and task. They
              adjust leadership styles as needed to bring out the best outcome.
            </p>

            <p className="mb-4">
              <span className="font-bold"> Active Listener </span> - Leaders
              understand the team’s needs and the leader must leverage their
              active listening skills. They must be patient and take the time
              needed to fully understand and know their team.
            </p>

            <p className="mb-4">
              <span className="font-bold"> Clear Sense of Direction </span>-
              Leaders are effective at providing a level of support and
              direction team members need. They must know where the team needs
              to go and what the right next step is to get there.
            </p>

            <p className="mb-4">
              <span className="font-bold">
                {" "}
                Ability to Encourage Participation{" "}
              </span>
              - Leaders engage in behaviors that create psychological safety.
              They must provide opportunities for team members to share their
              thoughts, experiences, and input. Must have the skills required to
              effectively delegate authority to team members as appropriate .
            </p>

            <p className="mb-4">
              <span className="font-bold"> Coaching Skills </span>- Leaders need
              to develop their ability to coach at a wide range of developmental
              levels. Leaders must have the ability to meet team members where
              they are and support them in getting where they need to be .
            </p>
          </div>
        </div>

        <div className="mt-12 lg:col-start-4 lg:col-span-6 lg:row-start-6">
          <p className="text-3xl font-bold leading-7 text-gray-900">
            Weaknesses and Challenges
          </p>
          <div className="mt-6 text-lg leading-8 text-gray-500">
            <p className="text-gray-500 mb-4">
              While the model enhances team performance by addressing individual
              needs, it can also pose challenges such as perceived
              inconsistency, a focus on short-term objectives over long-term
              vision, and a heavy emphasis on the responsibility of leaders to
              accurately gauge and respond to team members' readiness.
            </p>
            <p className="text-gray-500 mb-4">
              The situational leadership model can create confusion as team
              members might perceive their leader's approach as inconsistent due
              to varying leadership styles adapted for different situations.
              This model often emphasizes short-term goals, responding to
              immediate needs, which can lead to a disconnect from the
              overarching long-term vision. Despite these challenges, effective
              leaders recognize these pitfalls and strive to maintain a balance,
              ensuring long-term objectives are not overshadowed by short-term
              issues. Additionally, this approach places a substantial amount of
              responsibility on the leader, demanding keen discernment and
              assessment skills to accurately identify and meet the varied needs
              of each situation. In summary, it is a dynamic and flexible
              approach that requires leaders to be keen observers and effective
              communicators, capable of providing the right balance of guidance,
              support, and independence to each team member.
            </p>
          </div>
        </div>

        <div className="mt-12 lg:col-start-4 lg:col-span-6 lg:row-start-7">
          <p className="text-3xl font-bold leading-7 text-gray-900">
            My Application of Situational Leadership
          </p>
          <div className="mt-6 text-lg leading-8 text-gray-500">
            <p className="text-gray-500 mb-4">
              A time when I leaned heavily on the concepts of Hersey and
              Blanchard's Situational Leadership Model would be when I was
              leading a team making a presentation on Cellular Biology. While
              working on my presentation project, I was able to transition my
              leadership style to better fit the follower levels of my
              groupmates, who were at various stages of readiness and
              competence, mirroring the scenarios described by Hersey and
              Blanchard. One team member was highly enthusiastic but lacked the
              technical depth (R2), while another had significant expertise but
              was currently disengaged (R3), and a third was both skilled and
              motivated (R4). Recognizing these differences, I adapted my
              leadership approach accordingly.
            </p>
            <p className="text-gray-500 mb-4">
              For the enthusiastic but less skilled member (R2), I adopted a
              Coaching style (S2), providing detailed guidance on research
              methods while also encouraging their input to boost confidence and
              ownership of their work. This not only helped in skill-building
              but also ensured that their commitment was harnessed effectively.
            </p>

            <p className="text-gray-500 mb-4">
              Conversely, the skilled but disengaged member (R3) required a
              Supporting approach (S3). By engaging them in discussions about
              the relevance of their work to the project and recognizing their
              past contributions, I aimed to reignite their motivation and
              commitment. This less directive, more supportive approach helped
              in leveraging their expertise while boosting their morale and
              involvement.
            </p>

            <p className="text-gray-500 mb-4">
              For the highly competent and motivated individual (R4), I
              minimized my direct involvement, opting for a Delegating style
              (S4). This autonomy allowed them to take control and explore their
              segment of the project more deeply, contributing to very
              high-quality work without rare instances of needing extensive
              guidance or supervision.
            </p>

            <p className="text-gray-500 mb-4">
              This instance, specifically with an individualized approach to my
              team, shows the importance and application of situational
              leadership in a group setting. By configuring my approach to the
              specific needs and readiness levels of each team member, I
              facilitated a collaborative environment where each individual
              could contribute effectively, leading to a comprehensive and
              well-received presentation on Cellular Biology. The experience
              highlighted the model's value in fostering individual growth and
              team success, demonstrating that the right leadership style can
              significantly enhance team dynamics and project outcomes.
            </p>
          </div>
        </div>

        <hr className="border-t border-gray-200 pt-8" />

        <footer className="mt-36 lg:col-start-4 lg:col-span-6 lg:row-start-8">
          <p className="text-lg leading-7 text-gray-500 font-bold mb-4">
            References
          </p>
          <ul className="list-disc list-inside text-gray-500">
            <p className="mb-4">
              Bruin, L. de. (2020, April 18). Hersey and Blanchard Situational
              Leadership Model explained: B2U. Business.
              https://www.business-to-you.com/hersey-blanchard-situational-leadership-model/
            </p>
            <p>
              Wolf, J. (n.d.). Situational leadership®: What it is and how to
              build it (with examples). BetterUp.
              https://www.betterup.com/blog/situational-leadership-examples
            </p>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Reflections;
