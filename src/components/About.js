import React from 'react';
import './styles.css';

function About() {
  return (
    <div className="about" id="about">
      <div className="section__container about__container">
        <div className="about__image">
          <img src="/img/IMG_2067-removebg-preview.png" alt="about" />
        </div>
        <div className="about__content">
          <h2 className="section__header">Full Stack Developer !</h2>
          <p>
            I am a skilled web designer with over 3 years of experience in the industry. My passion lies in creating
            captivating website designs and implementing them through frontend development. I take pride in staying
            up-to-date with current design trends and leveraging my creativity to produce visually appealing and
            user-friendly websites. Throughout my career, I have developed a deep understanding of user experience
            (UX) and user interface (UI) principles. By putting myself in the shoes of the end-users, I strive to
            create intuitive and seamless browsing experiences. I believe that a well-designed website should not only
            look visually appealing but also provide a smooth and enjoyable interaction for visitors. When starting a
            new project, I thoroughly research and analyze the target audience and the client's specific requirements.
            This enables me to tailor my designs to meet their expectations and deliver a unique online presence that
            aligns with their brand identity ..
          </p>
          <br />
          <div className="about__btn">
            <button className="btn">More About Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;