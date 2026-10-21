import { FaUsers, FaCheck, FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <section className="relative overflow-hidden bg-[#05090a] px-5 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-[1380px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left Image */}
        <div className="relative">
          <img
            src="/images/about-gym.jpg"
            alt="Fitness training at FitZone gym"
            className="h-[350px] w-full rounded-2xl object-cover sm:h-[450px] lg:h-[490px]"
          />

          {/* Members Card */}
          <div className="absolute bottom-5 left-5 flex items-center gap-4 rounded-xl bg-[#071014]/95 p-4 shadow-xl sm:bottom-6 sm:left-6 sm:p-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f500] text-black sm:h-16 sm:w-16">
              <FaUsers className="text-3xl" />
            </div>

            <div>
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-sm text-gray-300">Happy Members</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <span className="mb-4 block text-sm font-bold uppercase tracking-[3px] text-[#f5f500]">
            About Us
          </span>

          <h2 className="mb-6 text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
            More Than
            <br />
            Just <span className="text-[#f5f500]">A Gym</span>
          </h2>

          <p className="mb-6 max-w-xl leading-7 text-gray-300">
            We believe fitness is not just about working out, it's a lifestyle.
            Our mission is to help you become stronger, healthier and more
            confident with the right training, nutrition and support.
          </p>

          <ul className="mb-8 space-y-3">
            {[
              "Modern & Spacious Facility",
              "Certified & Experienced Trainers",
              "Clean, Safe & Friendly Environment",
              "Personalized Training Programs",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f5f500] text-black">
                  <FaCheck className="text-xs" />
                </span>
                <span className="text-sm text-gray-200 sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <button className="inline-flex items-center gap-3 rounded-full bg-[#f5f500] px-7 py-4 font-bold text-black transition hover:bg-yellow-300">
            Learn More
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Background Decoration */}
      <span className="pointer-events-none absolute right-[-20px] top-1/2 hidden -translate-y-1/2 rotate-90 text-8xl font-black uppercase tracking-widest text-white/[0.025] xl:block">
        Fitness
      </span>
    </section>
  );
}

export default About;
