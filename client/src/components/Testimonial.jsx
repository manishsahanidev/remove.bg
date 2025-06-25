import { testimonials } from "../assets/assets";

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Testimonial title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        What our users say
      </h2>

      {/* Testimonial cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col max-w-md mx-auto md:mx-0 justify-between rounded-xl shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col px-6 pt-8 mb-10 space-y-5">
              <svg
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M.036 3A3.504 3.504 0 0 1 4 .036v2.049A1.506 1.506 0 0 0 2.085 3H6v6H0V3h.036zm15.928 7H16v6h-6v-6h3.915A1.496 1.496 0 0 0 12 9.086v-2.05A3.504 3.504 0 0 1 15.964 10zM14 12h-2v2h2v-2zM2 5v2h2V5H2z"
                  fillRule="evenodd"
                />
              </svg>
              <p className="text-gray-700 m-0" style={{ hyphens: "auto" }}>
                {testimonial.quote}
              </p>
            </div>
            <div className="flex space-x-2 bg-gray-50 px-6 pt-6 pb-5 rounded-b-xl">
              <div className="flex flex-col justify-center">
                <p className="font-semibold text-gray-900 m-0">
                  {testimonial.author}
                </p>
                <p className="text-gray-500 text-sm m-0 mt-1">
                  {testimonial.handle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
