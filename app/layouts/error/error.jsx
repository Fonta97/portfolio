import notFoundPoster from '~/assets/notfound.jpg';
import notFoundVideo from '~/assets/404_lost_John.mp4';
import flatlinePoster from '~/assets/flatline.png';
import flatlineVideo from '~/assets/flatline.mp4';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';

import { Image } from '~/components/image';
import flatlineSkull from './error-flatline.svg';

export function Error({ error }) {
  const flatlined = !error.status;

  const getMessage = () => {
    switch (error.status) {
      case 404:
        return {
          summary: 'Error: redacted',
          message:
            'This page could not be found. It either doesn’t exist or was deleted. Or perhaps you don’t exist and this webpage couldn’t find you.',
        };
      case 405:
        return {
          summary: 'Error: method denied',
          message: error.data,
        };
      default:
        return {
          summary: 'Error: anomaly',
          message: error.statusText || error.data || error.toString(),
        };
    }
  };

  const { summary, message } = getMessage();

  return (
    <section className={'page'}>
      {flatlined && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
            [data-theme='dark'] {
              --primary:  #50177F !important;
              --accent:  #50177F !important;
            }
            [data-theme='light'] {
              --primary:  #50177F !important;
              --accent:  #50177F !important;
            }
          `,
          }}
        />
      )}
      <Transition in>
        {({ visible }) => (
          <>
            <div className={'details'}>
              <div className={'text'}>
                {!flatlined && (
                  <Heading
                    className={'title'}
                    data-visible={visible}
                    level={0}
                    weight="bold"
                  >
                    {error.status}
                  </Heading>
                )}
                {flatlined && (
                  <Heading
                    className={'titleFlatline'}
                    data-visible={visible}
                    level={2}
                    as="h1"
                  >
                    <svg width="60" height="80" viewBox="0 0 60 80">
                      <use href={`${flatlineSkull}#skull`} />
                    </svg>
                    <DecoderText text="Flatlined" start={visible} delay={300} />
                  </Heading>
                )}
                {!flatlined && (
                  <Heading
                    aria-hidden
                    className={'subheading'}
                    data-visible={visible}
                    as="h2"
                    level={4}
                  >
                    <DecoderText text={summary} start={visible} delay={300} />
                  </Heading>
                )}
                <Text className={'description'} data-visible={visible} as="p">
                  {message}
                </Text>
                {flatlined ? (
                  <Button
                    secondary
                    iconHoverShift
                    className={'button'}
                    data-visible={visible}
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    icon="chevron-right"
                  >
                    Emotional support
                  </Button>
                ) : (
                  <Button
                    secondary
                    iconHoverShift
                    className={'button'}
                    data-visible={visible}
                    href="/"
                    icon="chevron-right"
                  >
                    Back to homepage
                  </Button>
                )}
              </div>
            </div>

            <div className={'videoContainer'} data-visible={visible}>
              <Image
                reveal
                cover
                noPauseButton
                delay={600}
                className={'video'}
                src={flatlined ? flatlineVideo : notFoundVideo}
                placeholder={flatlined ? flatlinePoster : notFoundPoster}
              />
              {flatlined ? (
                <a
                  className={'credit'}
                  data-visible={visible}
                  href="https://www.imdb.com/title/tt0318871/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Animation from Berserk (1997)
                </a>
              ) : (
                <a
                  className={'credit'}
                  data-visible={visible}
                  href="https://www.imdb.com/title/tt0110912/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  John Travolta in Pulp Fiction (1994)
                </a>
              )}
            </div>
          </>
        )}
      </Transition>
    </section>
  );
}
