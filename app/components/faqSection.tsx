import { Faq3 } from "../components/ui/faq";

const demoData = {
  heading: "Frequently asked questions",
  description: "",
  items: [
    {
      id: "faq-1",
      question: "When and where is the event happening?",
      answer:
        "The event will be hosted virtually. The exact date will be released soon—stay tuned for updates!",
    },
    {
      id: "faq-2",
      question: "Who can participate?",
      answer:
        "Anyone! Whether you’re a solo developer, part of a team, or just want to contribute, you’re welcome to join.",
    },
    {
      id: "faq-3",
      question: "What are the prizes for this hackathon?",
      answer:
        "Over $1M+ in cash, credits, and exclusive opportunities from our sponsors. Expect multiple prize categories!",
    },
    {
      id: "faq-4",
      question: "How do I sign up for this Hackathon?",
      answer: (
        <>
          You can sign up to compete or sponsor at:{" "}
          <a
            href="https://hackathon.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-neutral-300 hover:text-neutral-100"
          >
            hackathon.dev
          </a>
        </>
      ),
    },
    {
      id: "faq-5",
      question: "Who are the judges for this Hackathon?",
      answer:
        "@levelsio (Founder, Indie Maker), @OfficialLoganK (Tech Leader & Creator), @theo (Founder, t3.gg & Creator Advocate) and many more will be judging the round.",
    },
  ],
  supportHeading: "Still have questions?",
  supportDescription:
    "Can't find the answer you're looking for? Our support team is here to help with any technical questions or concerns.",
  supportButtonText: "Contact Support",
  supportButtonUrl: "https://shadcnblocks.com",
};

function Faq() {
  return <Faq3 {...demoData} />;
}

export { Faq };
