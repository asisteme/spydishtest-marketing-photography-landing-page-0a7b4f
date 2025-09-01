import React from "react";

export default function Footer() {
  return (
    <footer className="bg-brandAccent text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <img
            src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png"
            alt="SpyDishTest logo figure"
            className="w-12 h-12 mb-3"
          />
          <p className="text-sm">
            © {new Date().getFullYear()} SpyDishTest. All rights reserved.
          </p>
        </div>
        <nav>
          <h3 className="font-semibold mb-3">Navigate</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#top" className="hover:underline">Home</a></li>
            <li><a href="#diners" className="hover:underline">For Diners</a></li>
            <li><a href="#restaurants" className="hover:underline">For Restaurants</a></li>
          </ul>
        </nav>
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <form
            action="mailto:dasdas@gmail.com"
            method="post"
            encType="text/plain"
            className="flex flex-col space-y-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              aria-label="Name"
              className="rounded p-2 text-gray-800"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              aria-label="Email"
              className="rounded p-2 text-gray-800"
            />
            <textarea
              name="message"
              rows="3"
              placeholder="Message"
              className="rounded p-2 text-gray-800"
            ></textarea>
            <button
              type="submit"
              className="bg-brandPrimary text-white py-2 rounded hover:bg-brandAccent transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
