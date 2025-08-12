"use client";
import React from "react";

export default function ContactForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // eslint-disable-next-line no-alert
    alert(`Thanks! We will be in touch.\n\n${JSON.stringify(data, null, 2)}`);
    form.reset();
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-lg border border-black/10 p-6">
      <div className="grid gap-1">
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input name="name" id="name" className="h-11 rounded-md border border-black/15 px-3 outline-none focus:border-accent" placeholder="Full name" />
      </div>
      <div className="grid gap-1">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input name="email" id="email" type="email" className="h-11 rounded-md border border-black/15 px-3 outline-none focus:border-accent" placeholder="you@example.com" />
      </div>
      <div className="grid gap-1">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea name="message" id="message" rows={5} className="rounded-md border border-black/15 p-3 outline-none focus:border-accent" placeholder="Tell us about your project" />
      </div>
      <button type="submit" className="btn-primary w-fit">Send Inquiry</button>
    </form>
  );
}


