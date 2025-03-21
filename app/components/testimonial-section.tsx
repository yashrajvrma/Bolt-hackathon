import { TestimonialsSection } from "../components/ui/testimonial-with-marquee";

const testimonials = [
  {
    author: {
      name: "Pieter Levels",
      handle: "@levelsio",
      avatar:
        "https://pbs.twimg.com/profile_images/1589756412078555136/YlXMBzhp_400x400.jpg",
    },
    text: "Digital Nomad, Indie Hacker and Builder",
    href: "https://x.com/levelsio",
  },
  {
    author: {
      name: "Logan Kilpatrick",
      handle: "@OfficialLoganK",
      avatar:
        "https://pbs.twimg.com/profile_images/1379817647139737600/YHL9uBk0_400x400.jpg",
    },
    text: "Lead product for @Google AI Studio, working on the Gemini API, and AGI",
    href: "https://x.com/officiallogank",
  },
  {
    author: {
      name: "Theo",
      handle: "@theo",
      avatar:
        "https://pbs.twimg.com/profile_images/1799982162831396865/Fnol01I1_400x400.jpg",
    },

    text: "Full time CEO @t3dotchat. Part time YouTuber, investor, and developer",
    href: "https://x.com/theo",
  },
  {
    author: {
      name: "Sarah Guo",
      handle: "@saranormous",
      avatar:
        "https://pbs.twimg.com/profile_images/1689443134919327744/geqEJeF8_400x400.jpg",
    },

    text: "startup investor/helper, founder @conviction, accelerating AI adoption, interested in progress tech podcast: @nopriorspod",
    href: "https://x.com/saranormous/",
  },
  {
    author: {
      name: "Evan You",
      handle: "@youyuxi",
      avatar:
        "https://pbs.twimg.com/profile_images/1856284397072478208/hSEXLkPN_400x400.jpg",
    },

    text: "Founder @voidzerodev / Creator @vuejs & @vite_js",
    href: "https://x.com/youyuxi",
  },
  {
    author: {
      name: "KP",
      handle: "@thisiskp_",
      avatar:
        "https://pbs.twimg.com/profile_images/1288449070344937473/fKlvccnM_400x400.jpg",
    },

    text: "Running AI Launchpad & Founder Relations @PaddleHQ",
    href: "https://x.com/thisiskp_",
  },
  {
    author: {
      name: "Alex Albert",
      handle: "@alexalbert__",
      avatar:
        "https://pbs.twimg.com/profile_images/1856486626072915968/JEQpB9CW_400x400.jpg",
    },

    text: "Head of Claude Relations @AnthropicAI",
    href: "https://x.com/alexalbert__",
  },
  {
    author: {
      name: "Ben Tossell",
      handle: "@bentossell",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4E03AQEQf7XiKjhyOQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727693347917?e=2147483647&v=beta&t=1RTqPGUZG7aL5NTY6vlHIZhRxXxOVpAnoUPGctTNgvw",
    },

    text: "Ai builder community - https://bensbit.es/x || Ex-founder makerpad (acq by zapier)",
    href: "https://x.com/bentossell",
  },
];

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Meet our Judges"
      description="Pitch Your Wildest Idea to the Founders Who've Built It All"
      testimonials={testimonials}
    />
  );
}
