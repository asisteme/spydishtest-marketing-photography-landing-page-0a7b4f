import React from "react";

const testimonials = [
  {
    name: "Maria G.",
    role: "Food Blogger",
    quote:
      "SpyDishTest helped me find hidden gems in the city! The recommendations feel hand-picked."
  },
  {
    name: "Chef Luis",
    role: "Restaurant Owner",
    quote:
      "The competitor pricing insights boosted our revenue by 15 %. Highly recommended."
  },
  {
    name: "Sophie",
    role: "Frequent Diner",
    quote:
      "I love the personalized dish suggestions. It’s like having a foodie friend on WhatsApp."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white animation-fade">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-brandPrimary mb-12">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="bg-brandBg p-6 rounded-lg shadow leading-relaxed"
            >
              <p className="italic">“{t.quote}”</p>
              <footer className="mt-4 text-sm font-medium text-brandAccent">
                {t.name} <span className="text-gray-500">– {t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
