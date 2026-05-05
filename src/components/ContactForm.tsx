"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setStatusMessage("");
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.subject.trim() &&
    formData.message.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      alert("⚠️ Information not completed! Please fill in all required fields.");
      return;
    }

    setIsLoading(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage("✓ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatusMessage(data.error || "Failed to send email");
      }
    } catch (error) {
      setStatusMessage("Error sending message. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-lg border border-purple-800/60 bg-[#1b1b20] p-8 shadow-xl">
      <h3 className="mb-8 text-2xl font-black text-white">
        Send me a message
      </h3>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-white">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-purple-900/60 bg-[#0d0d12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-white">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-purple-900/60 bg-[#0d0d12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-purple-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-white">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-md border border-purple-900/60 bg-[#0d0d12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-purple-500"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-white">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            rows={7}
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
            className="w-full resize-none rounded-md border border-purple-900/60 bg-[#0d0d12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-purple-500"
            required
          ></textarea>
        </div>

        {statusMessage && (
          <p
            className={`text-sm font-bold ${
              statusMessage.includes("✓") ? "text-green-400" : "text-red-400"
            }`}
          >
            {statusMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full rounded-md px-6 py-4 text-sm font-black text-white shadow-lg transition ${
            !isLoading
              ? "bg-gradient-to-r from-purple-700 to-purple-400 shadow-purple-700/30 hover:-translate-y-1 hover:shadow-purple-500/40"
              : "cursor-not-allowed bg-purple-600 opacity-70"
          }`}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
