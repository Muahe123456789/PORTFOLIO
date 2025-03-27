import React from 'react';
import './styles.css';

function Services() {
  return (
    <section className="facility__container" id="services">
      <h2 className="section__header1">
        <span style={{ fontSize: '32px' }} className="colorsp"></span>
      </h2>
      <br />
      <div className="facility__content2">
        <div className="servic1">
          <img src="/img/coding.png" alt="Coding" />
          <h2 className="section__header">
            UI <span className="colorsp">/UX</span>
          </h2>
          <br />
          <span>
            I am a UI/UX specialist with over 3 years of experience in designing and developing optimal user interface
            and user experience solutions. With a solid foundation in user research and extensive knowledge of
            user-centered design principles, I specialize in creating digital products that deliver practical value,
            meet user needs, and enhance the overall experience. I leverage my data analysis skills to optimize
            interactions and interfaces, ensuring seamless and highly efficient experiences in every product.
          </span>
          <br />
          <div className="header__btn">
            <button className="btn">Lear more</button>
          </div>
        </div>

        <div className="servic1">
          <img src="/img/artboard.png" alt="Artboard" />
          <h2 className="section__header">
            Web <span className="colorsp">Design</span>
          </h2>
          <br />
          <span>
            Web design is the process of creating a visual interface and user experience for websites. A good web
            design not only focuses on aesthetics but also ensures user-friendliness and smooth interaction. When
            designing a website, always consider the end user, ensuring that they can easily navigate the site and are
            satisfied with the overall experience. An effective website should not only be visually appealing but also
            user-friendly and provide real value to the user.
          </span>
          <br />
          <div className="header__btn">
            <button className="btn">Lear more</button>
          </div>
        </div>

        <div className="servic1">
          <img src="/img/apple.png" alt="Apple" />
          <h2 className="section__header">
            APP <span className="colorsp">Design</span>
          </h2>
          <br />
          <span>
            App design is the process of planning and creating the visual, interactive, and functional elements of a
            mobile application. A well-designed app focuses on providing a smooth, intuitive experience for users
            while meeting the goals of the app. App design is a balance between aesthetics, usability, and
            functionality, ensuring that the app serves its purpose while still satisfying users. A great app design
            encourages frequent usage, retains users, and turns the app into a valuable tool in daily life.
          </span>
          <br />
          <div className="header__btn">
            <button className="btn">Lear more</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;