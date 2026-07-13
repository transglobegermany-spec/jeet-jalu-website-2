import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/data/programs";

/** Card used on the homepage and /programs index. */
export function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="group flex h-full flex-col justify-between border border-mist bg-paper-raised p-8 transition-[border-color,transform] duration-300 ease-soft hover:-translate-y-0.5 hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      <div>
        <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep">
          {program.audience}
        </p>
        <h3 className="mt-4 font-display text-2xl font-medium text-ink">
          {program.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate">
          {program.promise}
        </p>
      </div>
      <p className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium text-ink">
        Explore the program
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      </p>
    </Link>
  );
}
