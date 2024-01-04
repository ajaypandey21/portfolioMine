export const about = ["Web Developer🕷️", "Proud indian🚀", "SEO Analyst📈"];

export function vowelcheck(item) {
  const vowel = ["a", "e", "i", "o", "u"];
  const startwithvowel = vowel.some((vowel) =>
    item.toLowerCase().startsWith(vowel)
  );
  return startwithvowel ? "an" : "a";
}

export var options = {
  strings: about,
  typeSpeed: 50, // typing speed in milliseconds
  backSpeed: 30, // backspacing speed in milliseconds
  loop: true, // set to false to stop looping
};

// Initialize Typed.js

