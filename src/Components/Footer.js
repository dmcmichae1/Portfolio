import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Devin McMichael</h1>
          <PText>
            I am software developer that recently graduated from Bethel School
            of Technology's Full Stack program. I love to design fun and
            beautiful applications.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="contact Info"
            links={[
              {
                title: '1.530.806.3083',
                path: 'tel:15308063083',
              },
              {
                title: 'mcmichael.devinz@gmail.com',
                path: 'mailto:mcmichael.devinz@gmail.com',
              },
              {
                title: 'California, USA',
                path:
                  'https://www.google.com/maps/place/California/@37.1842803,-123.798209,6z/data=!3m1!4b1!4m5!3m4!1s0x808fb9fe5f285e3d:0x8b5109a227086f55!8m2!3d36.778261!4d-119.4179324',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="personal Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/devin-mcmichael/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/dmcmichae1',
              },
              {
                title: 'CV',
                path:
                  'https://docs.google.com/document/d/1QMkE5aQw5DFbrRMhQzDeD8yh5bkGBz7t2KI3E1kjvlI/edit?usp=sharing',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Devin McMichael</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
