import React, { useEffect } from 'react';
import './styles.css';

function Skills() {
  useEffect(() => {
    // Giả lập việc tăng giá trị phần trăm sau khi component được mount
    const interval = setInterval(() => {
      // Cập nhật giá trị phần trăm (ví dụ)
      setProgress('progressBar1', Math.min(90, getProgress('progressBar1') + 5)); // HTML
      setProgress('progressBar2', Math.min(80, getProgress('progressBar2') + 5)); // CSS
      setProgress('progressBar3', Math.min(70, getProgress('progressBar3') + 5)); // JS
      setProgress('progressBar4', Math.min(60, getProgress('progressBar4') + 5)); // Python

      setProgressCircle('progressCircle1', Math.round(Math.min(75, getProgressCircle('progressCircle1') + 5))); // Communication
      setProgressCircle('progressCircle2', Math.round(Math.min(85, getProgressCircle('progressCircle2') + 5))); // Problem Solving
      setProgressCircle('progressCircle3', Math.round(Math.min(90, getProgressCircle('progressCircle3') + 5))); // Teamwork
      setProgressCircle('progressCircle4', Math.round(Math.min(70, getProgressCircle('progressCircle4') + 5))); // Creativity
      

      if (getProgress('progressBar1') >= 90 && getProgressCircle('progressCircle1') >= 75) {
        clearInterval(interval); // Dừng interval khi đạt giá trị mong muốn
      }
    }, 200); // Cập nhật mỗi 200ms

    return () => clearInterval(interval); // Clear interval khi component unmount
  }, []);

  const setProgress = (id, percent) => {
    document.getElementById(id).style.width = `${percent}%`;
    document.getElementById(id).textContent = `${percent}%`;
  };

  const getProgress = (id) => {
    return parseInt(document.getElementById(id).style.width) || 0;
  };

  const setProgressCircle = (id, percent) => {
    const circle = document.getElementById(id);
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference - (percent / 100) * circumference}`;
    document.getElementById(id.replace('progressCircle', 'percent')).textContent = `${percent}%`;
  };

  const getProgressCircle = (id) => {
    const circle = document.getElementById(id);
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circle.style.strokeDashoffset;
    const percent = 100 - (parseFloat(strokeDashoffset) / circumference) * 100;
    return percent || 0;
  };

  return (
    <section className="service" id="service">
      <div className="section__container service__container">
        <h2 className="section__header">
          MY <span className="colorsp">SKILLS</span>
        </h2>
        <div className="hc">
          <div className="Ha">
            <div className="service__card">
              <span>01</span>
              <h4>HTML</h4>
              <img className="hinh" src="/img/html.png" alt="HTML" />
              <div className="progress-container">
                <div className="progress-bar" id="progressBar1">
                  0%
                </div>
              </div>
            </div>

            <div className="service__card">
              <span>02</span>
              <h4>CSS</h4>
              <img className="hinh" src="/img/css-3.png" alt="CSS" />
              <div className="progress-container">
                <div className="progress-bar" id="progressBar2">
                  0%
                </div>
              </div>
            </div>

            <div className="service__card">
              <span>03</span>
              <h4>JAVASCRIPT</h4>
              <img className="hinh" src="/img/js.png" alt="JavaScript" />
              <div className="progress-container">
                <div className="progress-bar" id="progressBar3">
                  0%
                </div>
              </div>
            </div>

            <div className="service__card">
              <span>04</span>
              <h4>REACT</h4>
              <img className="hinh" src="/img/react.CtDRhtxt.svg" alt="Python" />
              <div className="progress-container">
                <div className="progress-bar" id="progressBar4">
                  0%
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------ */}
          <div className="Hb">
            <div className="b2">
              <div className="service__card2">
                <div className="progress-circle">
                  <svg>
                    <circle cx="50" cy="50" r="45"></circle>
                    <circle cx="50" cy="50" r="45" id="progressCircle1"></circle>
                  </svg>
                  <div className="percent" id="percent1">
                    0%
                  </div>
                </div>
                <h4 className="text">COMMUNICATION</h4>
              </div>

              <div className="service__card2">
                <div className="progress-circle">
                  <svg>
                    <circle cx="50" cy="50" r="45"></circle>
                    <circle cx="50" cy="50" r="45" id="progressCircle2"></circle>
                  </svg>
                  <div className="percent" id="percent2">
                    0%
                  </div>
                </div>
                <h4 className="text">PROLEM SOVLING</h4>
              </div>
            </div>
            <div className="b2">
              <div className="service__card2">
                <div className="progress-circle">
                  <svg>
                    <circle cx="50" cy="50" r="45"></circle>
                    <circle cx="50" cy="50" r="45" id="progressCircle3"></circle>
                  </svg>
                  <div className="percent" id="percent3">
                    0%
                  </div>
                </div>
                <h4 className="text">TEAMWORD</h4>
              </div>

              <div className="service__card2">
                <div className="progress-circle">
                  <svg>
                    <circle cx="50" cy="50" r="45"></circle>
                    <circle cx="50" cy="50" r="45" id="progressCircle4"></circle>
                  </svg>
                  <div className="percent" id="percent4">
                    0%
                  </div>
                </div>
                <h4 className="text">CREATIVITI</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;