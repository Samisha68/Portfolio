"use client";

import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import Send from "./Send";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const result = await res.json();
        setStatus(result.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0b1e]/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Contact the Cosmos
        </h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#1a1b3e] border-purple-500 text-white placeholder-purple-300"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#1a1b3e] border-purple-500 text-white placeholder-purple-300"
            />
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#1a1b3e] border-purple-500 text-white placeholder-purple-300"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              Send Transmission
              <Send className="ml-2 h-4 w-4" />
            </Button>
            {status && <p className="text-center text-purple-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
