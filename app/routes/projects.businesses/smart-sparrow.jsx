import backgroundPrimeLarge from '~/assets/PrimeImpresaEdile.png';
import backgroundPrimePlaceholder from '~/assets/spr-background-placeholder.jpg';
import portfolioMockupLarge from '~/assets/mockup.jpg';
import portfolioMockupPlaceholder from '~/assets/mockup.jpg';
import portfolioMockup from '~/assets/mockup.jpg';
import backgroundPrime from '~/assets/PrimeImpresaEdile.png';
import videoDoubleEffeLarge from '~/assets/doubleshop.mp4';
import videoDoubleEffe from '~/assets/doubleshop.mp4';
import interfaceDashboardDarkLarge from '~/assets/interface.png';
import interfaceDashboardDarkPlaceholder from '~/assets/interface.png';
import interfaceDashboardDark from '~/assets/interface.png';
import interfaceDashboardLightLarge from '~/assets/interface.png';
import interfaceDashboardLightPlaceholder from '~/assets/interface.png';
import interfaceDashboardLight from '~/assets/interface.png';
import primeSiteDarkLarge from '~/assets/prime_edile_laptop.png';
import primeSiteDarkPlaceholder from '~/assets/prime_edile_laptop.png';
import primeSiteDark from '~/assets/prime_edile_laptop.png';
import primeSiteLightLarge from '~/assets/prime_edile_laptop.png';
import primeSiteLightPlaceholder from '~/assets/prime_edile_laptop.png';
import primeSiteLight from '~/assets/prime_edile_laptop.png';
import fedevideoLarge from '~/assets/fedestratvideo.mp4';
import fedevideoPlaceholder from '~/assets/fedestratvideo.mp4';
import fedevideo from '~/assets/fedestratvideo.mp4';
import languagemobileDarkLarge from '~/assets/mobilelanguage.png';
import languagemobileDarkPlaceholder from '~/assets/mobilelanguage.png';
import languagemobileDark from '~/assets/mobilelanguage.png';
import languagemobileLightLarge from '~/assets/mobilelanguage.png';
import languagemobileLightPlaceholder from '~/assets/mobilelanguage.png';
import languagemobileLight from '~/assets/mobilelanguage.png';
import languageDarkLarge from '~/assets/languages.jpg';
import languageDarkPlaceholder from '~/assets/languages.jpg';
import languageDark from '~/assets/languages.jpg';
import languageLightLarge from '~/assets/languages.jpg';
import languageLightPlaceholder from '~/assets/languages.jpg';
import languageLight from '~/assets/languages.jpg';
import inagendaLarge from '~/assets/inagendaevent.mp4';
import inagendaPlaceholder from '~/assets/inagendaevent.mp4';
import inagenda from '~/assets/inagendaevent.mp4';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
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
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';


export const links = () => [{ rel: 'stylesheet', href: styles }];

const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./earth').then(module => ({ default: module.EarthSection }))
);

const title = '01 Corporate Presence';
const description =
  'Building clean, modern corporate websites that communicate brand value and drive trust. From intuitive information architecture to subtle motion cues, your business story gets told with clarity and polish.';
const roles = [
  'UX / UI Design',
  'Front-End/Back-End Engineering',
  'CMS & API',
  'Motion Design',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SmartSparrow = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundPrime}
          srcSet={`${backgroundPrime} 1080w, ${backgroundPrimeLarge} 2160w`}
          placeholder={backgroundPrimePlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.primeimpresaedile.it/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${primeSiteDark} 1280w, ${primeSiteDarkLarge} 2560w`
                  : `${primeSiteLight} 1280w, ${primeSiteLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? primeSiteDarkPlaceholder
                  : primeSiteLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>02 E-Commerce Engines</ProjectSectionHeading>
            <ProjectSectionText>
              Full-funnel stores that convert: custom WooCommerce & Shopify builds, secure payments, blazing-fast loads, and backend integrations that keep inventory, shipping and finance teams perfectly in sync.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
                raised
                className={'video'}
                srcSet={`${videoDoubleEffe} 1280w, ${videoDoubleEffeLarge} 2560w`}
                width={1280}
                height={800}
                placeholder={fedevideoPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            <ProjectTextRow>
              {/* <SegmentedControl
                currentIndex={themes.indexOf(theme)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl> */}
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>03 Product Launch Pages</ProjectSectionHeading>
              <ProjectSectionText>
                High-impact landing pages for new products or campaigns. Focused messaging, A/B-tested CTAs and analytics hooks ensure each scroll drives measurable traction before, during and after launch day.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${interfaceDashboardDark} 1280w, ${interfaceDashboardDarkLarge} 2560w`
                  : `${interfaceDashboardLight} 1280w, ${interfaceDashboardLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? interfaceDashboardDarkPlaceholder
                  : interfaceDashboardLightPlaceholder
              }
              alt="The homepage of the aero design system docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>04 SaaS Dashboards & Web Apps</ProjectSectionHeading>
              <ProjectSectionText>
                Interactive dashboards and single-page apps built with React / Next.js, powered by robust .NET & Laravel APIs. Data visualisation, auth flows and real-time updates ready to scale with your user base.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={`${portfolioMockup} 1280w, ${portfolioMockupLarge} 2560w`}
                width={1280}
                height={900}
                placeholder={portfolioMockupPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>05 Portfolio & Showcase Sites</ProjectSectionHeading>
                  <ProjectSectionText>
                    Pixel-perfect showcases for creatives and agencies—mixing smooth WebGL interactions with lightweight CMS editing so clients can update their work without touching code (or breaking layouts).
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={'video'}
                srcSet={`${fedevideo} 1280w, ${fedevideoLarge} 2560w`}
                width={1280}
                height={800}
                placeholder={fedevideoPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>06 Booking & Service Portals</ProjectSectionHeading>
              <ProjectSectionText>
                From restaurants to gyms, tailor-made booking engines that sync with calendars, send automated reminders and collect payments—delivering a seamless experience for staff and customers alike.
              </ProjectSectionText>
            </ProjectTextRow>
             <Image
                raised
                className={'video'}
                srcSet={`${inagenda} 1280w, ${inagendaLarge} 2560w`}
                width={1280}
                height={800}
                placeholder={inagendaPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  07 Multilingual & Global Sites
                </ProjectSectionHeading>
                <ProjectSectionText>
                  Reach audiences worldwide with localisation, RTL support and geo-aware content. CDN delivery and SEO-friendly hreflang ensure your message lands fast—and in the right language—everywhere.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={'sidebarImages'}>
              <Image
                className={'sidebarImage'}
                srcSet={
                  isDark
                    ? `${languageDark} 260w, ${languageDarkLarge} 520w`
                    : `${languageLight} 260w, ${languageLightLarge} 520w`
                }
                width={260}
                height={660}
                placeholder={
                  isDark
                    ? languageDarkPlaceholder
                    : languageLightPlaceholder
                }
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={'sidebarImage'}
                srcSet={
                  isDark
                    ? `${languagemobileDark} 260w, ${languagemobileDarkLarge} 520w`
                    : `${languagemobileLight} 260w, ${languagemobileLightLarge} 520w`
                }
                width={260}
                height={660}
                placeholder={
                  isDark
                    ? languagemobileDarkPlaceholder
                    : languagemobileLightPlaceholder
                }
                alt="Configuration options for text."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
          <Suspense>
            <Earth
              className={'earth'}
              hideMeshes={useMemo(
                () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
                []
              )}
              position={useMemo(() => [0, 0, 0], [])}
              labels={useMemo(
                () => [
                  {
                    position: [0.54, 0.19, 0.18],
                    text: 'Pacific ring of fire',
                    hidden: true,
                  },
                  {
                    position: [0.47, -0.38, 0.04],
                    text: 'Ruapehu',
                    hidden: true,
                  },
                  {
                    position: [0.22, 0.44, -0.35],
                    text: 'St. Helens',
                    hidden: true,
                  },
                  {
                    position: [0.16, -0.06, 0.58],
                    text: 'Krakatoa',
                    hidden: true,
                  },
                  {
                    position: [0.11, 0.2, -0.56],
                    text: 'Parícutin',
                    hidden: true,
                  },
                  {
                    position: [0.52, 0.2, -0.23],
                    text: 'Kīlauea',
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.75, 0.24],
                    text: 'Mantle',
                    delay: 800,
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.55, 0.24],
                    text: 'Outer core',
                    delay: 800,
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.35, 0.24],
                    text: 'Inner core',
                    delay: 800,
                    hidden: true,
                  },
                ],
                []
              )}
              scale={0.6}
            >
              <EarthSection
                scrim
                animations={['0:loop']}
                camera={[0, 0, 1.5]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent>
                    <ProjectTextRow center>
                      <ProjectSectionHeading>
                        08 Tech Foundations
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        Behind every project is a rock-solid tech stack. These four pillars are my everyday toolkit—keeping each site fast, secure and ready to scale.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[0, 0, 2.4]}
                meshes={['Atmosphere', 'EarthFull']}
              />
              <EarthSection
                animations={['0:loop']}
                camera={[1.14, -1.39, 0.94]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Performance First
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                       Core Web Vitals, lazy-loading, HTTP/3 and CDN edge caching for sub-second paint times.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="start" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        API Craftsmanship
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        REST & GraphQL endpoints in C#/.NET and Laravel that stay secure, documented and versioned.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Headless & CMS
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        WordPress, Strapi or Shopify as headless back-ends, consumed via Next.js for total layout freedom.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              
            </Earth>
          </Suspense>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>09 Growth & Continuous Care</ProjectSectionHeading>
              <ProjectSectionText>
                Post-launch, I stay on duty: analytics reviews, A/B refinements, security patches and new feature sprints—all focused on turning early wins into long-term growth.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
