import React from "react";

export default function ForDiners() {
  return (
    <section className="py-20 px-4 bg-white animation-fade">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-brandPrimary mb-4">For Diners</h2>
          <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
            <li>Explore restaurants based on your preferences and location.</li>
            <li>Discover featured dishes and menus near you.</li>
            <li>Access reviews, rankings, and popularity analyses.</li>
          </ul>
        </div>
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt="Chat with SpyDishTest bot"
            className="rounded-lg shadow-lg w-full"
          />
          <div className="absolute top-4 left-4 bg-brandPrimary text-white p-4 rounded-lg text-sm shadow-lg max-w-xs">
            <p><b>You:</b> I'm craving sushi near downtown.</p>
            <p className="mt-2"><b>SpyDishTest:</b> Here are the top-rated sushi spots within 2 km...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
