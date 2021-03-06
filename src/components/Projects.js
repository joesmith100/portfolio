import React from 'react';
import { Link } from 'react-router';

const personalProjects = [
  {
    imgUrl: 'timrjs',
    title: 'TimrJS',
  },
];

const fullStack = [
  {
    imgUrl: 'pollingvote',
    title: 'The Polling Vote',
    externalLink: 'http://the-polling-vote.herokuapp.com/',
    github: 'https://github.com/joesmith100/the-polling-vote',
  },
  {
    imgUrl: 'booktraders',
    title: 'Book Traders',
    externalLink: 'http://fcc-books-trading-club2.herokuapp.com/',
    github: 'https://github.com/joesmith100/fcc-book-trading-club',
  },
  {
    imgUrl: 'nightlife',
    title: 'Nightlife App',
    externalLink: 'http://fcc-nightlife2-app.herokuapp.com/',
    github: 'https://github.com/joesmith100/fcc-nightlife-app',
  },
];

const frontEnd = [
  {
    imgUrl: 'gameoflife',
    title: 'Game Of Life',
  },
  {
    imgUrl: 'simongame',
    title: 'Simon Game',
  },
  {
    imgUrl: 'pomodorotimer',
    title: 'Pomodoro Timer',
  },
  {
    imgUrl: 'calculator',
    title: 'Calculator',
  },
  {
    imgUrl: 'quotegenerator',
    title: 'Quote Generator',
  },
  {
    imgUrl: 'twitchapp',
    title: 'Twitch App',
  },
  {
    imgUrl: 'weatherwidget',
    title: 'Weather Widget',
  },
];

const backEnd = [
  {
    imgUrl: 'urlshortener',
    title: 'Url Shortener',
    externalLink: 'https://fccurl.herokuapp.com/',
    github: 'https://github.com/joesmith100/fcc-url-shortener',
  },
  {
    imgUrl: 'imageabstracter',
    title: 'Image Abstracter',
    externalLink: 'https://fcc-image.herokuapp.com/',
    github: 'https://github.com/joesmith100/fcc-image-abstracter',
  },
];

function Project({ project, personal }) {
  return (
    <Link
      className="Projects__project"
      to={!project.externalLink
        ? `/${personal ? '' : 'projects/'}${project.title.replace(/\s/g, '')}`
        : project.externalLink
      }
      target={project.externalLink && '_blank'}
    >
      <section className="Projects__project__content-wrapper">
        <section className="Projects__project__live-preview">
          <img src={`../assets/images/projects_${project.imgUrl}.png`} />
          {!!project.externalLink &&
            <div><i onClick={() => window.open(project.github, '_blank')} /></div>
          }
        </section>
        <section className="Projects__project__title-wrapper">
          <span className="Projects__project__title-wrapper__title">{project.title}</span>
        </section>
      </section>
    </Link>
  );
}

function Projects({ children }) {
  return (
    <section className="Projects container">
      <section className="Projects__wrapper">
        {personalProjects.map(project => (
          <Project key={project.title} project={project} personal />
        ))}
      </section>
      <h2>Free Code Camp</h2>
      <p>
        The following are just some of the projects that I built as part of the
          <a href="http://www.freecodecamp.com" target="_blank"> freecodecamp.com </a>
        curriculum.
      </p>
      <p>Note: The full-stack and back-end projects are deployed to heroku; they may take a few seconds to load up.</p>
      <h4>Front-End</h4>
      <section className="Projects__wrapper">
        {frontEnd.map(project => (
          <Project key={project.title} project={project} />
        ))}
      </section>
      <h4>Full-Stack</h4>
      <section className="Projects__wrapper">
        {fullStack.map(project => (
          <Project key={project.title} project={project} />
        ))}
      </section>
      <h4>Back-End</h4>
      <section className="Projects__wrapper">
        {backEnd.map(project => (
          <Project key={project.title} project={project} />
        ))}
      </section>
    </section>
  );
}

export default Projects;
