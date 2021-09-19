import React from 'react';
import styled from 'styled-components';
import AboutImg from '../assets/images/about-page-img.jpg';
import AboutInfoItem from '../Components/AboutInfoItem';
import Button from '../Components/Button';
import ContactBanner from '../Components/ContactBanner';
import PText from '../Components/PText';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Devin McMichael</span>
              </p>
              <h2 className="about__heading">A full stack web developer</h2>
              <div className="about__info">
                <PText>
                  I am a coding bootcamp graduate with a certificate from Bethel
                  School of Technology, Full Stack program. I have used
                  technologies like React.js, jQuery, HTML5, CSS3, JavaScript,
                  MySql, MongoDB, Axios, AJAX, AngularJS, Node.js, AWS, and many
                  more.I have been interested in the tech world for a while now.
                  In high school I started learning about hardware and operating
                  systems to a computer. About five years ago I was living in
                  San Francisco, California where I lived with web developers. I
                  enjoyed how they are impacting the tech companies they were
                  working for and I wanted to become apart of it.
                  <br /> <br />
                  As a new developer, I am excited to dive into the tech
                  industry and make an impact in any environment. In the next
                  seven years I see myself becoming a more experienced developer
                  and breaking into the world of artifical intelligence.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <Button
                btnText="Download CV"
                btnLink="https://docs.google.com/document/d/1QMkE5aQw5DFbrRMhQzDeD8yh5bkGBz7t2KI3E1kjvlI/edit?usp=sharing"
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="Certificate"
                items={[
                  'Bethel School of Technology. Full Stack Program, Online',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="JavaScript"
                items={['React.js', 'AngularJS', 'jQuery', 'ES6']}
              />
              <AboutInfoItem
                title="CSS/HTML"
                items={['HTML5', 'CSS3', 'tailwindcss', 'Bootstrap']}
              />
              <AboutInfoItem title="DataBases" items={['MongoDB', 'MySQL']} />
              <AboutInfoItem
                title="API's"
                items={['AJAX', 'Axios', "Web API'S"]}
              />
              <AboutInfoItem
                title="Other"
                items={['Node.js', 'Git', 'Express.js', 'AWS']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
