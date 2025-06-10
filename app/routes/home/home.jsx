import lestrategiedifedeTexture2Large from '~/assets/FedeMobile2.png';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import lestrategiedifedeTexture2 from '~/assets/FedeMobile2.png';
import lestrategiedifedeTexture from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/LeStrategieDiFedeMobileView.png';
import lestrategiedifedeTextureLarge from '~/assets/LeStrategieDiFedeMobileView.png';
import sliceTextureLarge from '~/assets/NETApp.png';
import sliceTexturePlaceholder from '~/assets/NETApp.png';
import sliceTexture from '~/assets/NETApp.png';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/prime_edile_laptop.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Full Stack Developer + Freelance',
    description: `Portfolio of ${config.name} — a Full Stack Freelance Developer working on digital solutions with a focus on businesses, user experience and usability.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Developing businesses sites"
        description="Developing a site to help businesses of all sizes establish an online presence."
        buttonText="View sites"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Prime Impresa Edile site displayed on a laptop screen',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Wordpress & Shopify Sites"
        description="Design and development of custom E-Commerce solutions with automations and API integrations"
        buttonText="View Projects"
        buttonLink="https://gamestack.hamishw.com"
        model={{
          type: 'phone',
          alt: 'Mobile Optimization view of a site on phone screen',
          textures: [
            {
              srcSet: `${lestrategiedifedeTexture} 375w, ${lestrategiedifedeTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${lestrategiedifedeTexture2} 375w, ${lestrategiedifedeTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Long term projects collaborations"
        description="Collaborations with international partners and business"
        buttonText="View collabs"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Image of .NET coding on a laptop',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
