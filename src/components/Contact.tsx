"use client";
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect, ChangeEventHandler } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const refHeading = useRef(null);
  const inViewHeading = useInView(refHeading);
  const refContent = useRef(null);
  const inViewContent = useInView(refContent);

  const [show, setShow] = useState(false);
  const formId = process.env.NEXT_PUBLIC_FORM_ID;

  const [state, handleSubmit] = useForm(formId!);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (state.succeeded) {
      setShow(true);
      setFormData({
        email: "",
        subject: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  return (
    <section className="sm:px-6 sm:pt-[80px]" id="contact">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl">
          Get In Touch
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-textWhite"></div>
      </motion.div>
      <div className="relative mt-10 flex flex-col items-center gap-4 py-12 md:flex-row md:items-start">
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, y: -50 }}
          animate={
            inViewContent ? { opacity: 1, y: 0 } : { opacity: 1, y: -50 }
          }
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h5 className="my-2 text-2xl font-bold text-heading md:text-3xl">
            Why Be Shy, Say Hi...
          </h5>
          <p className="max-w-lg text-base text-textWhite">
            I&apos;m open to new opportunities and look forward to connecting
            with you. Whether you have inquiries or just want to say hello, feel
            free to reach out. <br /> I&apos;ll do my best to respond promptly!
          </p>
          <div className="mt-6 flex flex-row gap-5">
            <a
              href="https://www.linkedin.com/in/aashish-dhiman/"
              className="group relative transition-all duration-500 ease-in-out hover:-translate-y-[2px] "
              target="_blank"
            >
              <BsLinkedin className="size-7" />
              <span className="absolute left-[50%] top-[150%] w-fit translate-x-[-50%] translate-y-[-50%] px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                Linkedin
              </span>
            </a>
            <a
              href="https://github.com/aashish-dhiman"
              className="group relative transition-all duration-500 ease-in-out hover:-translate-y-[2px] "
              target="_blank"
            >
              <BsGithub className="size-7" />
              <span className="absolute left-[50%] top-[150%] w-fit translate-x-[-50%] translate-y-[-50%] px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                Github
              </span>
            </a>
            <a
              href="https://twitter.com/aashish_dhimaan"
              target="_blank"
              className="group relative transition-all duration-500 ease-in-out hover:-translate-y-[2px] "
            >
              <FaXTwitter className="size-7" />
              <span className="absolute left-[50%] top-[150%] w-fit translate-x-[-50%] translate-y-[-50%] px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                Twitter
              </span>
            </a>

            <a
              href="mailto:aashishdhiman88@gmail.com"
              target="_blank"
              className="group relative transition-all duration-500 ease-in-out hover:-translate-y-[2px] "
            >
              <HiMailOpen className="size-7 " />
              <span className="absolute left-[50%] top-[150%] w-fit translate-x-[-50%] translate-y-[-50%] px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                Email
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, y: -50 }}
          animate={
            inViewContent ? { opacity: 1, y: 0 } : { opacity: 1, y: -50 }
          }
          transition={{ duration: 1 }}
          className="mt-10 w-full p-4 md:mt-0 md:w-[40%]"
        >
          {/* after form submission greetings */}
          {show ? (
            <div className="mx-auto mt-8 flex max-w-md items-center lg:max-w-lg">
              <p className="text-md text-textPara">
                Thank you for reaching out! <br /> I appreciate your interest
                and will get back to you as soon as possible. In the meantime,
                feel free to explore more of my portfolio.
              </p>
            </div>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                  placeholder="aashish@gmail.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                  placeholder="Just saying hi"
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                  placeholder="Let's talk about..."
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="mr-4 w-full rounded-full border-2 border-white bg-transparent px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-500 ease-in-out hover:scale-[0.98] hover:bg-darkHover"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <footer className="flex items-center text-center pb-6">
        <span className="mx-auto text-textPara">
          © {new Date().getFullYear()} - Aashish Dhiman
        </span>
      </footer>
    </section>
  );
};

export default Contact;
