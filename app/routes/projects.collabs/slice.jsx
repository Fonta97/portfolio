import beppinoOccelliLarge from '~/assets/BeppinoOccelli.jpg';
import beppinoOccelliPlaceholder from '~/assets/slice-annotation-placeholder.png';
import beppinoOccelli from '~/assets/BeppinoOccelli.jpg';
import jeenkaStoryLarge from '~/assets/Jeenka.jpg';
import jeenkaStoryPlaceholder from '~/assets/slice-app-placeholder.jpg';
import jeenkaStory from '~/assets/Jeenka.jpg';
import muuOccelliLarge from '~/assets/muudiocan.jpg';
import muuOccelliPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import muuOccelli from '~/assets/muudiocan.jpg';
import em2cWebDescriptionLarge from '~/assets/space_earth.jpg';
import em2cWebDescriptionPlaceholder from '~/assets/slice-background-placeholder.jpg';
import em2cWebDescription from '~/assets/slice-background.jpg';
import hackerzzzPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import hackerzzz from '~/assets/hackerzzzzz.jpg';
import jeenkaPlaceLarge from '~/assets/SedeJeenka.jpg';
import jeenkaPlacePlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import jeenkaPlace from '~/assets/SedeJeenka.jpg';
import jeenkaPlace2Large from '~/assets/Milano.jpg';
import jeenkaPlace2Placeholder from '~/assets/slice-sidebar-layers-placeholder.png';
import jeenkaPlace2 from '~/assets/Milano.jpg';
import emc2WebLarge from '~/assets/emc2web.png';
import emc2WebPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import emc2Web from '~/assets/emc2web.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

export const links = () => [{ rel: 'stylesheet', href: styles }];

const title = 'Partners I work with';
const description =
  'In this section, you can see all of the main partners I work with such as Jeenka.';
const roles = ['Teamwork', 'UX Design', 'Worldwide Experience'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={em2cWebDescription}
          srcSet={`${em2cWebDescription} 1280w, ${em2cWebDescriptionLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={em2cWebDescriptionPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://jeenka.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${jeenkaStory} 800w, ${jeenkaStoryLarge} 1920w`}
              width={800}
              height={500}
              placeholder={jeenkaStoryPlaceholder}
              alt="Jeenka place in Milan"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Freelance Dev for Jeenka. an International Partner</ProjectSectionHeading>
              <ProjectSectionText>
                Jeenka is a one-stop shop digital solutions partner I've been collaborating with since 2025 on various projects.
              </ProjectSectionText>
              <ProjectSectionText>
                We've helped many international clients bring their projects to life — from Laravel APIs to personalized WordPress sites with custom plugins, all designed to deliver the best possible UX and UI for the end user.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${jeenkaPlace2} 350w, ${jeenkaPlace2Large} 700w`}
                width={350}
                height={750}
                placeholder={jeenkaPlace2Placeholder}
                alt="Jeenka logo"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${jeenkaPlace} 350w, ${jeenkaPlaceLarge} 700w`}
                width={350}
                height={750}
                placeholder={jeenkaPlacePlaceholder}
                alt="Milan city view"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Work with Emc2 Web digital agency</ProjectSectionHeading>
              <ProjectSectionText>
                Lately, I've also been collaborating with another digital agency, Emc2 Web based in Turin. As a freelance developer, I enjoy expanding my horizons and diving into new and exciting projects!
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${emc2Web} 800w, ${emc2WebLarge} 1920w`}
              width={800}
              height={500}
              placeholder={emc2WebPlaceholder}
              alt="Homepage of emc2web"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${muuOccelli} 440w, ${muuOccelliLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={muuOccelliPlaceholder}
                  alt="a cow"
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`${beppinoOccelli} 440w, ${beppinoOccelliLarge} 880w`}
                  width={440}
                  height={340}
                  placeholder={beppinoOccelliPlaceholder}
                  alt="Beppino Occelli Logo"
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>IT Intern at Beppino Occelli</ProjectSectionHeading>
              <ProjectSectionText>
                I worked as an IT intern at Beppino Occelli, a major Italian dairy company with global reach. I helped develop their Shopify website and custom APIs for both e-commerce and their ERP system (C#, .NET, ASP.NET), also migrating legacy Access databases to SQL. It was a key experience that boosted my confidence in industrial tech environments.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Collaborations & Results</ProjectSectionHeading>
              <ProjectSectionText>
                Working with companies like Jeenka, Emc2 Web, and Beppino Occelli has given me the chance to grow both technically and professionally. These collaborations exposed me to real-world challenges across different industries — from e-commerce and custom ERP systems to full-stack development for agencies.

Each project helped me refine my skills in backend development, UI/UX implementation, and API integration, while also improving my communication, adaptability, and problem-solving mindset.

More than just writing code, I learned how to deliver real value to teams and clients — and that's what keeps driving my passion for tech.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={hackerzzz}
              width={940}
              height={500}
              placeholder={hackerzzzPlaceholder}
              alt="Code on a pc screen"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
