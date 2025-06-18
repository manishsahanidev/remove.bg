import { steps } from "../assets/assets";
import { Upload, Zap, Download } from "lucide-react";

export const HowToSteps = () => {
  const icons = [Upload, Zap, Download];

  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        How to Remove Image Background?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((item, index) => {
          const IconComponent = icons[index];
          return (
            <div 
              key={index} 
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2 border border-gray-100"
            >

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent size={32} />
                </div>
              </div>

              {/* Step badge */}
              <span className="inline-block bg-gradient-to-r from-indigo-100 to-indigo-50 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-indigo-200">
                {item.step}
              </span>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};