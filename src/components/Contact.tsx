import React, { FormEvent, useState } from "react";

const CONTACT_EMAIL =
  process.env.REACT_APP_CONTACT_EMAIL || "cwu20210923@gmail.com";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FormFields = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialForm: FormFields = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone || "Not provided",
            subject: form.subject,
            message: form.message,
            _subject: `Portfolio Contact: ${form.subject}`,
            _template: "table",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || data.success !== "true") {
        throw new Error(
          typeof data.message === "string"
            ? data.message
            : "Failed to send message. Please try again."
        );
      }

      setForm(initialForm);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email me directly."
      );
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <form id="contact-form" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="_honey"
          className="contact-honeypot"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="input-box">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            disabled={status === "submitting"}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            disabled={status === "submitting"}
          />
        </div>

        <div className="input-box">
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number (optional)"
            value={form.phone}
            onChange={handleChange}
            disabled={status === "submitting"}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            disabled={status === "submitting"}
          />
        </div>

        <textarea
          name="message"
          cols={30}
          rows={10}
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          disabled={status === "submitting"}
        />

        <input
          type="submit"
          value={status === "submitting" ? "Sending..." : "Send Message"}
          className="btn btn-primary"
          disabled={status === "submitting"}
        />

        {status === "success" && (
          <p className="contact-status contact-status--success" role="status">
            Message sent. I&apos;ll get back to you soon.
          </p>
        )}

        {status === "error" && (
          <p className="contact-status contact-status--error" role="alert">
            {errorMessage}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
