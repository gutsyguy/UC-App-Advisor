import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen bg-[#0080ff] text-white text-start">
      <h1 className="font-bold text-4xl text-center py-5">
        Cracking the UC Application: A comphrehensive guide
      </h1>
      <div className="flex justify-center py-5">
        <Image
          className=""
          src="/background.png"
          alt=""
          width={800}
          height={800}
        />
      </div>

      <div className="flex justify-center flex-col mx-56">
        <section className="flex flex-col items-start text-xl">
          <h2 className="text-3xl font-bold">
            Understanding the UC application process
          </h2>
          <p className="my-3">
            The University of California (UC) application process is a complex
            and many highschoolers, especially first generation students feel
            lost when completing. Now it is more competitive than ever to get
            into a UC with over 250,000 applications this year.
          </p>
          <p className="my-3">
            The UC system employs a holistic admissions process, ensuring that
            your entire application, <br /> not just a single aspect. Key
            components of a successful UC application include:
          </p>
          <ol>
            <li className="py-2">
              <b>Academic Performance:</b> Maintaining a high GPA while
              challenging yourself with rigorous courses.
            </li>
            <li className="py-2">
              <b>Extracurricular Activities:</b> Demonstrating a wide range of
              interests and skills through activities.
            </li>
            <li className="py-2">
              <b>Essays:</b> The UC personal insight questions (PIQs) offer an
              opportunity for the admissions officers <br />
              to understand more about your story and circumstances. The UC
              application requires you to fill 4 out of 8 of the PIQs. To stand
              out, focus on being creative, original, and showcasing who you
              are.
            </li>
          </ol>

          <p className="py-3"></p>
        </section>

        <section className="text-xl">
          <h1 className="text-3xl font-bold py-3">General Tips</h1>
          <ol type="1">
            <li className="py-2">
              <b>Tell a Story: </b>
              Structure your essays using vivid language and story telling.
            </li>
            <li className="py-2">
              <b>Be yourself:</b> Admissions officers don't expect a high
              schooler to be an accomplished CEO or run a global non-profit.
            </li>
            <li className="py-2">
              <b>Be a Leader:</b> Showcase your leadership potential, you don't
              have to have an official position to be a leader.
            </li>
            <li className="py-2">
              <b>Be Open:</b>
              If you have circumstances explaining why you have bad grades for a
              semester or stopped doing ECs for a year then share it.
            </li>
            <li className="py-2">
              <b>Do What you Love:</b> you should never do an activity because
              it will "look good for college." Almost any activity can look
              impressive if you can show that you have grown because of it.
            </li>
          </ol>
        </section>
        <section className="">
          <h2 className="text-3xl font-bold py-3">UC Application Timeline</h2>
          <div className="flex justify-center">
            <Image src={"/timeline.png"} alt="3" width={1000} height={2000} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
