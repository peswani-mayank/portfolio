import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/personalInfo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    if (personalInfo.formEndpoint) {
      try {
        const response = await fetch(personalInfo.formEndpoint, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          })
        });

        if (response.ok) {
          setStatus({ submitting: false, submitted: true, error: null });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => {
            setStatus(prev => ({ ...prev, submitted: false }));
          }, 8000);
        } else {
          const data = await response.json().catch(() => null);
          const errorMsg = data?.errors?.map(err => err.message).join(', ') || 'Submission failed. Please try again or email directly.';
          setStatus({ submitting: false, submitted: false, error: errorMsg });
        }
      } catch {
        setStatus({
          submitting: false,
          submitted: false,
          error: 'Network error. Please email me directly at ' + personalInfo.email
        });
      }
    } else {
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-white/40 backdrop-blur-sm relative border-t border-teal-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-300/60 text-xs font-mono font-medium text-teal-800 mb-3">
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something Together
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-sky-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Have an opportunity, project, or idea? Feel free to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto text-left">
          
          {/* Left Column: Direct Contact Details & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-white/70 backdrop-blur-xl border border-teal-100/90 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                I am actively seeking software engineering and full-stack development roles. Reach out via email, phone, or connect on LinkedIn and GitHub.
              </p>

              {/* Email Card with Copy button */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/80 border border-teal-100 shadow-xs group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-500 uppercase">Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-medium text-slate-800 hover:text-teal-700 truncate block transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors ml-2 shrink-0 border border-slate-200"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-teal-100 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">Phone</div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-medium text-slate-800 hover:text-sky-700 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-teal-100 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">Location</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-800">
                    {personalInfo.location}
                  </div>
                  {personalInfo.academicLocation && (
                    <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                      {personalInfo.academicLocation} (University)
                    </div>
                  )}
                </div>
              </div>

              {/* Social links row */}
              <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-xs font-semibold text-slate-700 hover:text-[#0077b5] transition-all shadow-xs"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-300 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-all shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Modern Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white/80 backdrop-blur-xl border border-teal-100/90 shadow-xl relative">
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill out the form below and I'll get back to you promptly.
              </p>

              {status.submitted && (
                <div className="mb-6 p-4 rounded-xl bg-teal-50 border border-teal-300 text-teal-800 text-xs sm:text-sm flex items-center gap-3 animate-in fade-in duration-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Thank you! Your message has been submitted and forwarded directly to my inbox. I'll get back to you soon!</span>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center justify-between gap-3 animate-in fade-in duration-300">
                  <span>{status.error}</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="underline text-rose-800 font-semibold shrink-0"
                  >
                    Email Directly
                  </a>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-700 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-teal-200/90 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 shadow-xs transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-700 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-teal-200/90 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 shadow-xs transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-700 mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion / SDE Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-teal-200/90 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 shadow-xs transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-700 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Mayank, I came across your portfolio and wanted to discuss..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-teal-200/90 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 shadow-xs transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700 shadow-lg shadow-teal-500/20 transition-all disabled:opacity-50"
                >
                  {status.submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </button>

                <div className="text-[11px] font-mono text-slate-500 text-center pt-2">
                  <span>Connected to Formspree — submissions are forwarded directly to {personalInfo.email}.</span>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}