import React from 'react';
import './styles.css';

function Contact() {
  return (
    <section className="bot1" id="contact">
      <div>
        <h2 className="section__header">
          CONTACT <span className="colorsp">ME</span>
        </h2>
        <h3>Let’s Work Together</h3>
        <p>
          Are you looking to build a user-friendly, efficient, and visually engaging web application? I’d love to
          connect! With my experience in frontend development and a strong background in UI/UX, I specialize in
          creating seamless digital experiences that meet user needs and business goals.
        </p>
        <p>
          Whether it’s developing new features, optimizing performance, or crafting clean and modern interfaces, I’m
          here to help bring your project to life. Feel free to reach out through any of the following channels:
        </p>

        <ul>
          <li>
            <a href="tel:0909517531">
              <i className="ri-phone-line"></i> 0909517531
            </a>
          </li>
          <li>
            <button className="location-btn">
              <i className="ri-map-pin-line"></i> Vietnam, Ho Chi Minh City
            </button>
          </li>
          <li>
            <a href="mailto:trandinhluan2022@gmail.com">
              <i className="ri-mail-line"></i> trandinhluan2022@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <div className="formCTM">
        <form className="form-horizontal">
          <div className="form-group">
            <input type="text" className="form-control" name="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <input type="email" className="form-control" name="email" placeholder="Enter your Email" required />
          </div>

          <div className="form-group">
            <input type="text" className="form-control" name="subject" placeholder="Enter your Subject" required />
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <label className="radio-inline">
              <input type="radio" name="gender" value="male" defaultChecked /> Male
            </label>
            <label className="radio-inline">
              <input type="radio" name="gender" value="female" /> Female
            </label>
          </div>

          <div className="form-group">
            <textarea className="form-control" name="message" rows="5" placeholder="Enter your message"></textarea>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
