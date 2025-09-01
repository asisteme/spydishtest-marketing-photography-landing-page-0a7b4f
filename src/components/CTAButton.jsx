import React from "react";

export default function CTAButton({ text = "Start Now", link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full bg-brandPrimary px-6 py-3 text-white font-semibold shadow hover:bg-brandAccent transition-colors duration-300"
    >
      {text}
    </a>
  );
}
