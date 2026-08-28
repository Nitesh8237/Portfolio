import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 200,
      delay: 0,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hibp69i',
        'template_58yyjjk',
        e.target,
        '7B5r4TPMOObO-RCYw'
      )
      .then(
        (result) => {
          console.log('SUCCESS:', result.text);
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.error('FAILED:', error);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <>
      <div className="container-fluid contact py-5" id="contact">

        <h2
          className="heading text-center mt-5 mb-4"
          data-aos="fade-down"
        >
          Contact <span>Me !</span>
        </h2>

        <div className="row">

          <div
            className="col-lg-6 col-md-12 col-sm-12 contact-left mx-auto"
            data-aos="fade-right"
          >

            <form
              className="contact form d-flex flex-wrap justify-content-center gap-3"
              onSubmit={sendEmail}
            >

              {/* Name */}
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="form-control input-box"
                required
              />

              {/* Email */}
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="form-control input-box"
                required
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="form-control input-box"
                required
              />

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-control input-box"
                required
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>

              {/* Submit */}
              <button
                type="submit"
                className="btn my-3"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;