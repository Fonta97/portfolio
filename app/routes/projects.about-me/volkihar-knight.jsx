import { Link } from '~/components/link';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment, Suspense, lazy } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './volkihar-knight.module.css';

/* --- Assets -------------------------------------------------------------- */
import Background1Large        from '~/assets/gamingpc.jpg';
import Background1Placeholder  from '~/assets/gamingpc.jpg';
import Background1             from '~/assets/gamingpc.jpg';

import kaboomLarge             from '~/assets/kaboom.mp4';
import kaboomPlaceholder       from '~/assets/kaboom.mp4';
import kaboom                  from '~/assets/kaboom.mp4';

import boyzLarge               from '~/assets/boyzcollage.png';
import boyzPlaceholder         from '~/assets/boyzcollage.png';
import boyz                    from '~/assets/boyzcollage.png';

import travelfriendsLarge      from '~/assets/travelfriends.jpg';
import travelfriendsPlaceholder from '~/assets/travelfriends.jpg';
import travelfriends           from '~/assets/travelfriends.jpg';

import sicily1Large            from '~/assets/ioechri.jpeg';
import sicily1                 from '~/assets/ioechri.jpeg';
import sicily2Large            from '~/assets/sicilyboys.jpeg';
import sicily2                 from '~/assets/sicilyboys.jpeg';
import sicily3Large            from '~/assets/lecoppie.jpeg';
import sicily3                 from '~/assets/lecoppie.jpeg';
import sicilyPlaceholder       from '~/assets/lesgosky.jpeg';

/* --- Lazy components ----------------------------------------------------- */

/* Pre-carica il chunk di <Armor> in background  */
import('./armor');                         // <── preload

const Carousel = lazy(() =>
  import('~/components/carousel').then(m => ({ default: m.Carousel }))
);

const Armor = lazy(() =>
  import('./armor').then(m => ({ default: m.Armor }))
);

/* --- Meta info ----------------------------------------------------------- */
const title = 'Hobbies and content creation';
const description =
  'I mostly spend my freetime by playing videogames and streaming with my friends and doing content creation with them with funny montages.';
const roles = ['Humor', 'Pro Gamer Moves', 'Content Creation', 'Friendship'];

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

/* --- Component ----------------------------------------------------------- */
export function VolkiharKnight() {
  return (
    <Fragment>
      {/* Override palette per questo progetto */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'],
            [data-theme='light'] {
              --primary: #50177F !important;
              --accent:  #50177F !important;
            }
          `,
        }}
      />

      <ProjectContainer>
        {/* --- Hero background --- */}
        <ProjectBackground
          srcSet={`${Background1} 1280w, ${Background1Large} 1920w`}
          width={1280}
          height={720}
          placeholder={Background1Placeholder}
          opacity={0.5}
        />

        {/* --- Header --- */}
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Us playing R.E.P.O."
          url="https://www.tiktok.com/@monywzn/video/7482828115941788930"
          roles={roles}
        />

        {/* --- Video teaser --- */}
        <ProjectSection>
          <ProjectSectionContent>
            <video
              className={styles.video}
              src={kaboom}
              poster={kaboomPlaceholder}
              autoPlay
              loop
              muted
              playsInline
              width={1280}
              height={800}
              sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* --- Collage image --- */}
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              srcSet={`${boyz} 490w, ${boyzLarge} 960w`}
              width={480}
              height={300}
              placeholder={boyzPlaceholder}
              alt="Collage of me and the boyz"
              sizes={`(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 80vw, 70vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* --- 3D Armor + networking text --- */}
        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.armor}>
              <Suspense fallback={<div className={styles.loader} />}>
                <Armor alt="3D model of the Volkihar Knight armor" />
              </Suspense>
            </div>

            <div className={styles.textSection}>
              <ProjectSectionHeading>Lot of networking all over the world</ProjectSectionHeading>
              <ProjectSectionText>
                As an unapologetic extrovert, I’m constantly sparking conversations and collaborations with new people—online and offline—across every time zone.
              </ProjectSectionText>
              <ProjectSectionText>
                I make a point of hopping on trains and planes whenever I can: from Milan to Naples, from Turin to Catania and Padua, I catch up in person with gamers, developers, entrepreneurs, and easy-going friends who keep me motivated day after day. Whether we’re brainstorming projects or just grabbing pizza, these meet-ups turn digital connections into lasting friendships.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        {/* --- Sicily carousel --- */}
        <ProjectSection>
          <ProjectSectionContent>
            <Suspense fallback={<div className={styles.loader} />}>
              <Carousel
                placeholder={sicilyPlaceholder}
                images={[
                  {
                    srcSet: `${sicily1} 960w, ${sicily1Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'me and bro Chris on Etna',
                  },
                  {
                    srcSet: `${sicily2} 960w, ${sicily2Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'All Sicilians gang together drinking godfathers',
                  },
                  {
                    srcSet: `${sicily3} 960w, ${sicily3Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'Couples smiling',
                  },
                ]}
                width={1920}
                height={1080}
              />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>

        {/* --- Promise section --- */}
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={`${travelfriends} 1280w, ${travelfriendsLarge} 1920w`}
              width={1280}
              height={720}
              placeholder={travelfriendsPlaceholder}
              alt="Friends travelling together"
              sizes="100vw"
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Never stop growing.</ProjectSectionHeading>
              <ProjectSectionText>
                I make a personal promise to myself, my friends, and every client that I will never stop growing—both professionally and personally. That commitment is what turns each day into something special.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevron-right"
                href="https://www.instagram.com/therealfonta/"
              >
                View my Instagram &amp; make me a famous influencer, pls!
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>

      <Footer />
    </Fragment>
  );
}
