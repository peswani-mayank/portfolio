import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
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
      } catch (err) {
        setStatus({
          submitting: false,
          submitted: false,
          error: 'Network error. Please email me directly at ' + personalInfo.email
        });
      }
    } else {
      // Direct email client fallback
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
    <section id="contact" className="py-24 bg-slate-950/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-3">
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Have an opportunity, project, or idea? Feel free to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto text-left">
          
          {/* Left Column: Direct Contact Details & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                I am actively seeking software engineering and full-stack development roles. Reach out via email, phone, or connect on LinkedIn and GitHub.
              </p>

              {/* Email Card with Copy button */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-medium text-slate-200 hover:text-cyan-400 truncate block transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors ml-2 shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Phone</div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-200">
                    {personalInfo.location}
                  </div>
                  {personalInfo.academicLocation && (
                    <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                      {personalInfo.academicLocation} (University)
                    </div>
                  )}
                </div>
              </div>

              {/* Social links row */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-[#0077b5]/20 border border-slate-700/80 hover:border-[#0077b5]/50 text-xs font-semibold text-slate-200 hover:text-[#0077b5] transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 hover:border-slate-600 text-xs font-semibold text-slate-200 hover:text-white transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Modern Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-xl relative">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below and I'll get back to you promptly.
              </p>

              {status.submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-center gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been submitted and forwarded directly to my inbox. I'll get back to you soon!</span>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-center justify-between gap-3 animate-in fade-in duration-300">
                  <span>{status.error}</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="underline text-rose-200 font-semibold shrink-0"
                  >
                    Email Directly
                  </a>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion / SDE Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Mayank, I came across your portfolio and wanted to discuss..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-50"
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
