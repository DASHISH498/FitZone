import { FaClipboardList, FaDumbbell, FaHeart, FaUsers } from "react-icons/fa";

function Service() {
  return (
    <section className="w-full bg-[#0e0e0e] py-10">
      <div className="mx-auto grid w-full max-w-[1750px] grid-cols-1 gap-3 px-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-black/40 px-5 py-7 text-center transition duration-300 hover:border-[#f5f500]/50">
          <FaDumbbell className="mb-5 text-5xl text-[#f5f500]" />
          <h3 className="mb-2 text-lg font-bold text-white">
            Modern Equipment
          </h3>
          <p className="max-w-[230px] text-sm leading-6 text-gray-400">
            World class gym equipment for best results
          </p>
        </div>

        <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-black/40 px-5 py-7 text-center transition duration-300 hover:border-[#f5f500]/50">
          <FaUsers className="mb-5 text-5xl text-[#f5f500]" />
          <h3 className="mb-2 text-lg font-bold text-white">Expert Trainers</h3>
          <p className="max-w-[230px] text-sm leading-6 text-gray-400">
            Certified trainers to guide you at every step
          </p>
        </div>

        <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-black/40 px-5 py-7 text-center transition duration-300 hover:border-[#f5f500]/50">
          <FaClipboardList className="mb-5 text-5xl text-[#f5f500]" />
          <h3 className="mb-2 text-lg font-bold text-white">
            Personalized Plans
          </h3>
          <p className="max-w-[230px] text-sm leading-6 text-gray-400">
            Customized workout & diet plans for your goals
          </p>
        </div>

        <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-black/40 px-5 py-7 text-center transition duration-300 hover:border-[#f5f500]/50">
          <FaHeart className="mb-5 text-5xl text-[#f5f500]" />
          <h3 className="mb-2 text-lg font-bold text-white">
            Supportive Community
          </h3>
          <p className="max-w-[230px] text-sm leading-6 text-gray-400">
            Be a part of a motivated fitness family
          </p>
        </div>
      </div>
    </section>
  );
}

export default Service;
