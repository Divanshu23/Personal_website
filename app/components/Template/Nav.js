import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src='' alt="" />
      </Link>
      <header>
        <h2>Divanshu Sharma</h2>
        <p><a href="mailto:sharma.divanshu30@gmail.com">sharma.divanshu30@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hey! I am a student at <a href="https://www.bcit.ca/">British Columbia Institute of Technology</a> in the <a href="https://www.bcit.ca/study/programs/5500dipma">Computer Science Program</a>. I am part of the highly competitive Co-Op program at BCIT. 
        I am always willing to self learn and grab all the opportunities that
        take me one step closer to my goal of becoming a software Engineer. During this summer in the midst of pandemic, I have gained practical knowledge about many new technologies like docker, react, redux.
        I am actively looking for internships starting January 2021. <Link to="/contact">Lets work together! Shall we?</Link>

      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Divanshu Sharma <Link to="/">Add domain name</Link>.</p>
    </section>
  </section>
);

export default Nav;
