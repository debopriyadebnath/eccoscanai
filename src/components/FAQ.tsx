'use client'
import { useState } from "react";

const FAQAccordion = () => {
  const [openPanel, setOpenPanel] = useState<number | null>(null);

  const togglePanel = (panelIndex: number) => {
    setOpenPanel(openPanel === panelIndex ? null : panelIndex);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full lg:w-5/6 mx-auto">
        <div className="content">
          <div className="flex justify-center mb-5">
            <div className="w-full">
              <div className="text-center mb-6">
                <h4 className="text-4xl font-bold mb-0">
                  <b>Curious Minds Ask</b>
                </h4>
                <h5 className="text-lg mt-4 mb-0 hidden">FAQ</h5>
              </div>
            </div>
          </div>

          <div id="accordion" className="accordion" role="tablist">
            {[ 
              { 
                question: "What is EcoScan AI?", 
                answer: "EcoScan AI is your digital ally for sustainable solutions, making eco-friendly choices easier than ever!"
              },
              { 
                question: "How does it work?", 
                answer: "Our platform analyzes your habits and suggests greener alternatives tailored just for you!"
              },
              { 
                question: "Is it really effective?", 
                answer: "Absolutely! Users report a significant reduction in their carbon footprint after using our service."
              },
              { 
                question: "Can I trust the data?", 
                answer: "Yes! We use verified sources and cutting-edge technology to provide accurate insights."
              },
              { 
                question: "How do I get started?", 
                answer: "Simply click the 'Get Started' button and let the magic happen!"
              }
            ].map((item, index) => (
              <div key={index} className="card mb-4">
                <div className="card-header" role="tab">
                  <button
                    className="w-full text-left flex justify-between items-center"
                    onClick={() => togglePanel(index)}
                    aria-expanded={openPanel === index}
                    aria-controls={`collapse${index}`}
                  >
                    <h6 className="text-xl font-semibold">{item.question}</h6>
                    <span
                      className={`transform transition-transform duration-300 ${
                        openPanel === index ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </button>
                </div>
                <div
                  id={`collapse${index}`}
                  className={`transition-all duration-300 ${
                    openPanel === index ? "max-h-96" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <div className="p-4">
                    <p className="text-base">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
