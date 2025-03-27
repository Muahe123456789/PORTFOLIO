import React from 'react';
import './styles.css';

function Projects() {
  return (
    <section className="section__container mentor__container" id="projects">
      <h2 className="section__header">
        LATEST <span className="colorsp">PROJECT</span>
      </h2>
      <div className="mentor__grid">
        <div className="mentor__card">
          <img src="/img/gradient-ui-ux-background_23-2149052117.avif" alt="Project" />
          <img src="/img/5809368-2-scaled.jpg" alt="Project" />
        </div>
        <div className="mentor__card">
          <img src="/img/laptop-agencies-consulting-website-development-companies.png" alt="Project" />
          <img src="/img/web-design.jpg" alt="Project" />
        </div>
        <div className="mentor__card">
          <img src="/img/sketch-web-design-templates-6.jpeg" alt="Project" />
          <img src="/img/sketch-web-design-templates-8.jpeg" alt="Project" />
        </div>
      </div>
    </section>
  );
}

export default Projects;