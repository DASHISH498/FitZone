import { FaDumbbell, FaLongArrowAltRight, FaStar, FaUsers } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";

function Hero() {
  return (
    <div className="hero-section relative">
      <div className="hero-content w-full m-auto flex items-center justify-between px-[40px] left-[0px]">
        <div className="left-content grid items-center gap-4">
          <ul className="flex items-center gap-5 mb-5">
            <li className="text-[#fff]">DISCIPLINE</li>
            <li className="text-[#fff]">CONSISTENCY</li>
            <li className="text-[#fff]">RESULTS</li>
          </ul>
          <div className="hero-heading grid items-center uppercase gap-1 mb-4">
            <span className="text-[#fff] text-8xl font-bold">Transform</span>
            <span className="text-[#fff700] text-8xl font-bold">Your Body</span>
            <span className="text-[#fff] text-8xl font-bold">Transform</span>
            <span className="text-[#fff700] text-8xl font-bold">Your Life</span>
          </div>
          <p
            className="text-[#c3c1c1] text-xl max-w-[590px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Join our premium gym and get expert training. Modern equipment and
            personalized workout plans to achieve your fitness goals.
          </p>
          <div className="action-video-join flex items-center gap-4">
            <button
              className="flex items-center gap-2 bg-[#fff700] px-[35px] py-[10px] text-[20px] rounded-[40px] height-[50px] cursor-pointer"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Join Now <FaLongArrowAltRight />
            </button>
            <button
              className="flex items-center gap-2 text-[#fff] border border-white px-[35px] py-[10px] text-[20px] rounded-[40px] height-[50px] cursor-pointer"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <FaRegCirclePlay /> Watch Video
            </button>
          </div>
          <section className="w-full py-8">
            <div className="mx-auto grid w-full max-w-[1380px] grid-cols-1 md:grid-cols-3">
              {/* Happy Members */}
              <div className="flex items-center justify-center gap-5 border-b border-white/20 px-5 py-5 md:border-b-0 md:border-r">
                <FaUsers className="shrink-0 text-4xl text-[#f5f500] sm:text-5xl" />

                <div>
                  <h3 className="text-3xl font-bold text-white">500+</h3>
                  <p className="mt-1 text-base text-gray-300">Happy Members</p>
                </div>
              </div>

              {/* Expert Trainers */}
              <div className="flex items-center justify-center gap-5 border-b border-white/20 px-5 py-5 md:border-b-0 md:border-r">
                <FaDumbbell className="shrink-0 text-4xl text-[#f5f500] sm:text-5xl" />

                <div>
                  <h3 className="text-3xl font-bold text-white">10+</h3>
                  <p className="mt-1 text-base text-gray-300">
                    Expert Trainers
                  </p>
                </div>
              </div>

              {/* Years Experience */}
              <div className="flex items-center justify-center gap-5 px-5 py-5">
                <FaStar className="shrink-0 text-4xl text-[#f5f500] sm:text-5xl" />

                <div>
                  <h3 className="text-3xl font-bold text-white">5+</h3>
                  <p className="mt-1 text-base text-gray-300">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;
