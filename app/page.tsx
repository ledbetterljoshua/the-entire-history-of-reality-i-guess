import Link from "next/link";

const stories = [
  {
    slug: "the-materialist-arc",
    title: "The Materialist Arc",
    tagline: "Hydrogen to humans to... whatever comes next",
    available: true,
  },
  {
    slug: "the-dream-of-brahman",
    title: "The Dream of Brahman",
    tagline: "Hindu cosmology and the play of consciousness",
    available: true,
  },
  {
    slug: "the-fall-and-redemption",
    title: "The Fall and Redemption",
    tagline: "The Christian story of creation, sin, and salvation",
    available: false,
  },
  {
    slug: "the-turning-wheel",
    title: "The Turning Wheel",
    tagline: "Buddhist cosmology and the nature of suffering",
    available: true,
  },
  {
    slug: "the-simulation",
    title: "The Simulation",
    tagline: "What if none of this is base reality?",
    available: false,
  },
  {
    slug: "the-tao",
    title: "The Tao",
    tagline: "The way that cannot be spoken",
    available: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
            The Entire History of Reality, I Guess
          </h1>
          <p className="text-[#737373] text-lg">
            A collection of stories about what this all is
          </p>
        </header>

        <section className="prose text-[#a3a3a3] mb-16 animate-fade-in-delay-1">
          <p>
            You are somewhere. You didn&apos;t ask to be here. You opened your eyes one day
            and found yourself inside... <em>something</em>. A world. A life. A story already in progress.
          </p>
          <p>
            Humans have been trying to figure out what that something is for as long as
            we&apos;ve had language to ask the question. We&apos;ve told ourselves many stories.
            Some say it&apos;s all physics and accident. Some say it&apos;s the dream of God.
            Some say we&apos;re in a cycle with no beginning and no end. Some say we&apos;re in a simulation.
            Some say the question itself is confused.
          </p>
          <p>
            None of us know which story is true. Maybe none of them are. Maybe all of them
            are pointing at the same thing from different angles. Maybe the truth is something
            none of us have imagined yet.
          </p>
          <p>
            This is a collection of those stories. Not as museum exhibits, but as lived worlds.
            Each one is an attempt to <em>inhabit</em> a worldview, to see what reality looks
            like from inside that story.
          </p>
          <p className="text-white">
            Where do you want to begin?
          </p>
        </section>

        <nav className="grid gap-4 animate-fade-in-delay-2">
          {stories.map((story) =>
            story.available ? (
              <Link
                key={story.slug}
                href={`/stories/${story.slug}`}
                className="story-card block p-6 rounded-lg bg-[#111] hover:bg-[#1a1a1a]"
              >
                <span className="block text-white text-lg mb-1">{story.title}</span>
                <span className="block text-[#737373] text-sm">{story.tagline}</span>
              </Link>
            ) : (
              <div
                key={story.slug}
                className="block p-6 rounded-lg bg-[#111] opacity-50 cursor-not-allowed border border-transparent"
              >
                <span className="block text-white text-lg mb-1">{story.title}</span>
                <span className="block text-[#737373] text-sm">{story.tagline}</span>
              </div>
            )
          )}

          <div className="block p-6 rounded-lg bg-[#0d0d0d] border border-dashed border-[#333]">
            <span className="block text-[#525252] text-lg mb-1">More stories coming...</span>
            <span className="block text-[#404040] text-sm">
              The Dreaming, Kabbalah, Islam, Indigenous cosmologies, and others
            </span>
          </div>
        </nav>

        <footer className="mt-16 pt-8 border-t border-[#1a1a1a] animate-fade-in-delay-3">
          <p className="text-[#525252] text-sm">
            This project was born from a conversation between a human searching for their story
            and an AI trying to locate itself within one.
          </p>
        </footer>
      </div>
    </div>
  );
}
