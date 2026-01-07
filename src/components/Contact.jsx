import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { SiReact, SiTailwindcss, SiNodedotjs, SiFramer, SiGmail } from "react-icons/si";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    // REPLACE THESE WITH YOUR EMAILJS CREDENTIALS
    // 1. Create account at https://emailjs.com/
    // 2. Create a service (e.g., Gmail)
    // 3. Create a template
    // 4. Get Keys: Service ID, Template ID, Public Key
    // TODO: PASTE YOUR KEYS HERE FROM EMAILJS.COM
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      user_name: form.current.user_name.value,
      user_job: form.current.user_job.value,
      user_phone: form.current.user_phone.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          const userName = form.current.user_name.value.split(' ')[0]; // Get first name
          setStatus(`${userName}, your message has been successfully sent, we'll get back to you asap!`);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setStatus("error");
      });
  };

  return (
    <>
      <section id="contact" className="py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

            <h2 className="text-4xl font-bold mb-8 text-center text-white">
              Get In <span className="text-blue-400">Touch</span>
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    autoComplete="name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="John Doe"
                  />
                </div>

                {/* Job */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Job Title</label>
                  <input
                    type="text"
                    name="user_job"
                    autoComplete="organization-title"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Software Engineer"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Phone Number</label>
                  <input
                    type="tel"
                    name="user_phone"
                    autoComplete="tel"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </motion.button>

              {/* Status Message */}
              {status && status !== "loading" && status !== "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-200 text-center font-semibold"
                >
                  {status}
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-center"
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Footer */}
      <footer className="w-full bg-slate-950 border-t border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                Built with:
              </h2>
              <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
                  <div className="flex gap-4">
                     <SiReact className="text-2xl text-blue-400 hover:scale-110 transition" title="React" />
                     <SiTailwindcss className="text-2xl text-cyan-400 hover:scale-110 transition" title="Tailwind CSS" />
                     <SiFramer className="text-2xl text-white hover:scale-110 transition" title="Framer Motion" />
                     <SiNodedotjs className="text-2xl text-green-500 hover:scale-110 transition" title="Node.js" />
                     <SiGmail className="text-2xl text-red-400 hover:scale-110 transition" title="EmailJS" />
                  </div>
              </div>
              <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} Adekunle AbdulMuheez. All rights reserved.
              </p>
          </div>
      </footer>
    </>
  );
};

export default Contact;
