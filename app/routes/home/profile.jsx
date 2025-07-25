import profileImgLarge from '~/assets/profile-large.png';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.png';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';


const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={'title'} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={'description'} data-visible={visible} size="l" as="p">
      I’m Alessandro, currently I live in Cuneo, Italy. I'm working as a fulltime freelance developer & I was a software engineer at{' '}
      <Link href="https://www.occelli.it">Beppino Occelli</Link>. My projects include web apps, custom API's and many businesses collaborations. Being comfortable with customers since my past experience in the fashion retail and my management skills developed at Foot Locker with code allows me to rapidly
      prototype and validate experiences. If you’re interested in the tools and software I
      use check out my <Link href="/uses">uses page</Link>.
    </Text>
    <Text className={'description'} data-visible={visible} size="l" as="p">
      In my spare time I like to learn new business strategies and new online trends, {' '}
      <Link href="/projects/about-me"> play video games, livestream and doing content creation with my friends</Link>. I’m always down for hearing
      about new projects, so feel free to drop me a line.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={'profile'}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={'content'} ref={nodeRef}>
            <div className={'column'}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={'button'}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={'column'}>
              <div className={'tag'} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={'tagText'} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={'image'}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Collage of me and my girlfriend, in some daily bits of myself."
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
