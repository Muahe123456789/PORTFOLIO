import React, { useEffect, useRef } from 'react';
import './styles.css';

function Header() {
  const spanElement = useRef(null);

  useEffect(() => {
    const phrases = ['Frontend Developer', 'Web Developer', 'UI/UX Designer'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      if (!spanElement.current) return; // Kiểm tra xem phần tử có tồn tại không

      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting) {
        spanElement.current.innerText = currentPhrase.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(typeEffect, 1000);
          return;
        }
      } else {
        spanElement.current.innerText = currentPhrase.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();

    // Cleanup function (optional, but good practice)
    return () => {
      // If you were using setInterval instead of setTimeout, you would clear the interval here
    };
  }, []);

  return (
    <header>
      <div className="section__container header__container" id="home">
        <div className="header__content">
          <h1>Hello, It's Me!</h1>
          <h2>TRAN DINH LUAN</h2>
          <div className="whitd">
            <h2>
              I'm a <span className="colorsp" ref={spanElement}></span>
            </h2>
          </div>
          <span>School</span>
          <img className="apt" src="/img/Logo-fpt-aptech.png" alt="FPT Aptech" />
          <br />
          
          <p>
            I'm a web Designer with extensive experience for over 3 years. expertise is to create and website design,
            Frontend design, and many more ....
          </p>
          <div className="header__btn">
            <button className="btn">More About Me</button>
          </div>
        </div>
        <div className="header__image">
          <img src="/img/IMG_4725-removebg-preview.png" alt="header" />
        </div>
      </div>
    </header>
  );
}

export default Header;