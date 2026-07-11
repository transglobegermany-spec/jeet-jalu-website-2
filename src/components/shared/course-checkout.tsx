"use client";

import * as React from "react";
import { Check, Download } from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface CourseCheckoutProps {
  courseName: string;
  price: number;
}

/**
 * Razorpay embedded checkout.
 * Reads config from environment variables set in the Vercel dashboard:
 *   NEXT_PUBLIC_RAZORPAY_KEY_ID   e.g. rzp_live_xxxxxxxx
 *   NEXT_PUBLIC_A1_DOWNLOAD_URL   e.g. https://drive.google.com/file/d/.../view
 * No code changes required.
 */
export function CourseCheckout({ courseName, price }: CourseCheckoutProps) {
  const [paid, setPaid] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const downloadUrl = process.env.NEXT_PUBLIC_A1_DOWNLOAD_URL;

  const loadRazorpay = () =>
    new Promise<boolean>((resolve) => {
      if (typeof window !== "undefined" && window.Razorpay) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!razorpayKey) {
      setError(
        "Payments are not configured yet. Please try again shortly or email us."
      );
      return;
    }

    setLoading(true);
    const ok = await loadRazorpay();
    if (!ok) {
      setLoading(false);
      setError("Could not load the payment window. Check your connection.");
      return;
    }

    const rzp = new window.Razorpay({
      key: razorpayKey,
      amount: price * 100,
      currency: "INR",
      name: "Jeet Jalu",
      description: courseName,
      prefill: { name, email },
      notes: { course: courseName },
      theme: { color: "#B8862B" },
      modal: {
        ondismiss: () => setLoading(false),
      },
      handler: () => {
        setLoading(false);
        setPaid(true);
      },
    });

    rzp.on("payment.failed", () => {
      setLoading(false);
      setError("Payment did not go through. No money was taken — please try again.");
    });

    rzp.open();
  };

  if (paid) {
    return (
      <div
        role="status"
        className="border border-gold bg-paper-raised p-10 text-center"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
          <Check aria-hidden="true" className="h-6 w-6 text-gold-deep" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-medium text-ink">
          Payment received.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate">
          A copy of your download link has also been sent to{" "}
          <strong className="text-ink">{email}</strong>.
        </p>

        <a
          href={downloadUrl ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-ink px-8 py-4 font-sans text-sm font-medium text-cream transition-colors hover:bg-ink-soft"
        >
          <Download aria-hidden="true" className="h-4 w-4" />
          Download the course
        </a>

        <p className="mt-6 text-xs leading-relaxed text-slate-light">
          Unzip the folder and open <strong>INDEX.html</strong> in any browser.
          Everything works offline from then on.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handlePayment}
      className="space-y-5 border border-mist bg-paper-raised p-8"
    >
      <div>
        <label
          htmlFor="checkout-name"
          className="mb-2 block font-sans text-sm font-medium text-ink"
        >
          Full name
        </label>
        <input
          id="checkout-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full border border-mist bg-paper px-4 py-3 font-sans text-sm text-ink placeholder:text-slate-light focus:border-ink focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>

      <div>
        <label
          htmlFor="checkout-email"
          className="mb-2 block font-sans text-sm font-medium text-ink"
        >
          Email
        </label>
        <input
          id="checkout-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full border border-mist bg-paper px-4 py-3 font-sans text-sm text-ink placeholder:text-slate-light focus:border-ink focus:outline-none focus:ring-2 focus:ring-gold"
        />
        <p className="mt-2 text-xs text-slate-light">
          Your download link is sent here. Please check it&rsquo;s correct.
        </p>
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold px-8 py-4 font-sans text-base font-medium text-white transition-colors hover:bg-gold-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Opening secure checkout…" : `Pay ₹${price} · Get instant access`}
      </button>

      <p className="text-center text-xs leading-relaxed text-slate-light">
        Secure payment via Razorpay. UPI, cards, and net banking accepted.
      </p>
    </form>
  );
}
