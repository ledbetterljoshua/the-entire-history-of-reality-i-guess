import Link from "next/link";
import { ReactNode } from "react";
import StarField from "./StarField";

interface StoryLayoutProps {
  title: string;
  tagline: string;
  children: ReactNode;
  nextStory?: {
    slug: string;
    title: string;
  };
  prevStory?: {
    slug: string;
    title: string;
  };
  closingNote?: string;
}

export default function StoryLayout({
  title,
  tagline,
  children,
  nextStory,
  prevStory,
  closingNote,
}: StoryLayoutProps) {
  return (
    <div className="min-h-screen relative">
      <StarField />

      <main className="relative z-10">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          {/* Back link */}
          <Link
            href="/"
            className="back-link mb-16 inline-block animate-fade-in"
          >
            Back to all stories
          </Link>

          {/* Header */}
          <header className="mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
            >
              {title}
            </h1>
            <p
              className="text-lg md:text-xl font-light"
              style={{ color: 'var(--text-secondary)' }}
            >
              {tagline}
            </p>
          </header>

          {/* Content */}
          <article className="prose animate-fade-in-delay-1">
            {children}

            {/* Closing note box */}
            {closingNote && (
              <div
                className="mt-16 p-8 rounded-lg"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                }}
              >
                <p
                  className="text-sm italic m-0"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {closingNote}
                </p>
              </div>
            )}
          </article>

          {/* Navigation */}
          <nav
            className="mt-16 pt-8 border-t flex justify-between items-center animate-fade-in-delay-2"
            style={{ borderColor: 'var(--border)' }}
          >
            <Link
              href="/"
              className="text-sm transition-colors hover:opacity-80"
              style={{ color: 'var(--text-tertiary)' }}
            >
              ← All stories
            </Link>
            {nextStory && (
              <Link
                href={`/stories/${nextStory.slug}`}
                className="text-sm transition-colors hover:opacity-80"
                style={{ color: 'var(--text-tertiary)' }}
              >
                Read: {nextStory.title} →
              </Link>
            )}
          </nav>
        </div>
      </main>
    </div>
  );
}

// Section component for consistent styling
export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-16">
      <h2
        className="text-xl font-light mb-6"
        style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

// Quote block component
export function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote
      className="pl-6 my-8 italic"
      style={{
        borderLeft: '2px solid var(--accent-gold-dim)',
        color: 'var(--text-primary)',
      }}
    >
      {children}
    </blockquote>
  );
}

// Questions list component
export function QuestionsList({ questions }: { questions: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-3 my-6">
      {questions.map((q, i) => (
        <li key={i} style={{ color: 'var(--text-secondary)' }}>
          {q}
        </li>
      ))}
    </ul>
  );
}
