"use client";
import React, { FormEvent } from "react";
import Button from "./Button";

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
  };

  return (
    <form onSubmit={handleSubmit} className="stack">
      <div>
        <label
          htmlFor="email-address"
          className="block mb-2 font-medium text-gray-900"
        >
          Tu email
        </label>
        <input
          name="email"
          type="text"
          id="email-address"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="ejemplo@gmail.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block mb-2 font-medium text-gray-900"
        >
          Tu mensaje
        </label>
        <textarea
          name="message"
          required
          id="message"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      <Button label="Enviar" href={""} />
    </form>
  );
}
