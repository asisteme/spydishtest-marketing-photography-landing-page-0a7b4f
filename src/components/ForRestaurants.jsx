import React from "react";
import CTAButton from "./CTAButton";

export default function ForRestaurants() {
  return (
    <section className="py-20 px-4 bg-brandBg animation-fade">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-brandPrimary text-center mb-12">
          For Restaurants
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Competitor Pricing Intelligence",
              desc: "Compare menu prices with local competitors in real-time."
            },
            {
              title: "Dish Ranking &amp; Sentiment",
              desc: "Know how your dishes rank and what diners feel."
            },
            {
              title: "Diner Interest Heatmaps",
              desc: "Visualize demand by time and location."
            },
            {
              title: "AI Campaigns &amp; Notifications",
              desc: "Personalize recommendations and promotions."
            },
            {
              title: "Smart Pricing Adjustments",
              desc: "Optimize prices based on market analysis."
            },
            {
              title: "Weekly Executive Reports",
              desc: "Stay ahead with ongoing insights delivered to your inbox."
            }
          ].map((f) => (
            <div key={f.title} className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg text-brandAccent mb-2">{f.title}</h3>
              <p className="text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <CTAButton text="Subscribe to Pro Plan" link="https://wa.me/15551234567?text=I%20want%20Pro%20Plan" />
        </div>
      </div>
    </section>
  );
}
