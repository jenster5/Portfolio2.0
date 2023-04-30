/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header-img-container">
        <img className="header-image" src="assets/hero_image.jpg" alt="cell immunofluorescence" />
      </div>

      <section className="profile-container">
        <section className="intro-section" role="banner">
          <div className="profile-and-image">
            <img className="author-image" src="assets/jennifer.jpg" alt="author" />
            <div className="about-me-text">
              <h1>Jennifer Feenstra-Arengård</h1>
              <h2>Frontend Developer</h2>
              <h3>+ Scientist</h3>
            </div>
          </div>
          <div className="summary">
            <p className="p-info"> I believe I bring a unique perspective to the table with my current education as a front-end
    developer and my background in scientific research. My thesis and subsequent work involved developing chemotherapy agents
    for breast cancer and studying the genetic pathways that control embryonic limb formation. Though my career shift may seem
    drastic, I am in search of a interesting and fulfilling career. My scientific background has honed my problem-solving skills
    and attention to detail, which I bring to every project I work on. If you find my portfolio intriguing and would like to discuss
    potential opportunities, please do not hesitate to reach out via one of the links provided below.
            </p>

            <div className="contact-logos">
              <a href="https://www.linkedin.com/in/jennifer-feenstra-areng%C3%A5rd-299b1a60/" target="_blank" rel="noopener noreferrer">
                <img src="assets/linkdin.svg" alt="linkdin logo" className="linkdin-logo" />
              </a>

              <a href="https://github.com/jenster5" target="_blank" rel="noopener noreferrer">
                <img src="assets/github.svg" alt="github logo" className="github-logo" />
              </a>

              <a href="https://stackoverflowteams.com/c/technigo/users/441/?tab=profile" target="_blank" rel="noopener noreferrer">
                <img src="assets/StackOverflow.svg" alt="Stackoverflow logo" className="stack-logo" />
              </a>
            </div>
          </div>

          <div className="scroll-arrow">
            <div><img src="assets/Vector1.png" alt="down arrow" className="down-arrow" /> </div>
            <div><p>Lets scroll</p></div>
            <div>
              <svg width="100" height="100">
                <rect x="10" y="10" width="100" height="5" fill="#1D01A7" />
              </svg>
            </div>
          </div>
        </section>
      </section>
    </HeaderWrapper>
  )
};

const HeaderWrapper = styled.section`
.header-image {
  display: none; /* this is only hidden in the mobile view*/
}

.author-image {
  max-height: 150px;
  border-radius: 50%;
  border: 2px solid #415d43; /*var(--warning-color)*/
  margin-top: 55px;
  margin-right: 125px;
  margin-left: 100px;
}

.about-me-text h1 {
  font-family: "Satoshi", sans-serif;
  font-size: 1.65rem;
  font-weight: 700;
  color: #709775;
  margin-top: 15px;
  padding: 10px 0 0 10px;
  line-height: 38px;
}

.about-me-text h2 {
  font-family: "Satoshi", sans-serif;
  font-size: 2rem;
  font-weight: 900;
  padding-left: 10px;
  padding-bottom: 10px;
  color: black;
  display: block;
}
.about-me-text h3 {
  font-family: "Satoshi", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  padding-bottom: 20px;
  color: #565656;
  display: block;
  padding-left: 10px;
}

.summary {
  font-family: "EB Garamond", serif;
  font-size: 1.375rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  margin-top: 10px;
}

.contact-logos {
  display: flex;
  justify-content: center;
  margin-top: 20%;
  margin-bottom: 25px;
}

.linkdin-logo,
.github-logo,
.stack-logo {
  padding: 10px;
  margin-right: 25px;
  margin-left: 45px;
}

.scroll-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color: #1d01a7;
  font-family: "Satoshi", sans-serif;
  font-size: 1rem;
  font-weight: 900;
}
`
