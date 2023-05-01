import React from 'react';
import styled from 'styled-components';

export const Tech = () => {
  return (
    <TechWrapper>
      <section className="tech-section">
        <h2>Tech</h2>
        <p>HTML, CSS, <FirstSpan>Javascript,</FirstSpan>
     Flexbox, ES6, <SecondSpan>React, </SecondSpan> Github,
     APIs, pair-programming, <ThirdSpan>mob programming,</ThirdSpan>
     Adobe Illustrator, Photoshop
        </p>
      </section>
    </TechWrapper>
  )
};

const TechWrapper = styled.section`


.tech-section h2 {
  font-family: "Satoshi", sans-serif;
  font-size: 5rem;
  font-weight: 700;
  padding: 20px;
  margin-bottom: 40px;
}

.tech-section {
  background-color: #a1cca5;
  color: #ecf4f9;
  text-align: center;
  font-family: "EB Garamond", serif;
  font-size: 1.375rem;
  line-height: 32px;
  margin-bottom: 50px;
  padding: 40px 40px 50px;
  height: 30vh;
}
`

const FirstSpan = styled.text`
color: rgb(138, 138, 224);`

const SecondSpan = styled.text`
color:rgb(235, 69, 94);`

const ThirdSpan = styled.text`
color: rgb(89, 193, 222);`