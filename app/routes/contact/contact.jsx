/* app/routes/contact.jsx */
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useLocation } from '@remix-run/react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';


export const links = () => [{ rel: 'stylesheet', href: styles }];

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you’re interested in discussing a project or if you just want to say hi',
  });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;

export const Contact = () => {
  const email = useFormInput('');
  const message = useFormInput('');
  const { search } = useLocation();
  const success = new URLSearchParams(search).get('success') === 'true';
  const initDelay = tokens.base.durationS;

  return (
    <Section className={'contact'}>
      {/* ---------- FORM ---------- */}
      <Transition unmount in={!success} timeout={1600}>
        {({ status, nodeRef }) => (
          <form
            ref={nodeRef}
            className={'form'}
            method="POST"
            action="https://formsubmit.co/4941066d45d07321c5aee2ddfe95614b"
            noValidate            
          >
            {/* FormSubmit settings */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Portfolio message" />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:7777/contact?success=true"
            />

            {/* Honeypot anti-bot */}
            <Input className={'botkiller'} label="Name" name="name" />

            {/* Heading */}
            <Heading
              level={3}
              as="h1"
              className={'title'}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={'divider'}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />

            {/* Email */}
            <Input
              required
              className={'input'}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Your email"
              type="email"
              name="email"
              maxLength={MAX_EMAIL_LENGTH}
              {...email}
            />

            {/* Message */}
            <Input
              required
              multiline
              className={'input'}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label="Message"
              name="message"
              maxLength={MAX_MESSAGE_LENGTH}
              {...message}
            />

            {/* Submit */}
            <Button
              className={'button'}
              data-status={status}
              style={getDelay(tokens.base.durationM, initDelay)}
              icon="send"
              type="submit"
            >
              Send message
            </Button>
          </form>
        )}
      </Transition>

      {/* ---------- SUCCESS STATE ---------- */}
      <Transition unmount in={success}>
        {({ status, nodeRef }) => (
          <div className={'complete'} aria-live="polite" ref={nodeRef}>
            <Heading level={3} as="h3" className={'completeTitle'} data-status={status}>
              Message Sent
            </Heading>
            <Text
              size="l"
              as="p"
              className={'completeText'}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              I’ll get back to you within a couple days — sit tight!
            </Text>
            <Button
              secondary
              iconHoverShift
              className={'completeButton'}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevron-right"
            >
              Back to homepage
            </Button>
          </div>
        )}
      </Transition>

      <Footer className={'footer'} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs(msToNum(offset) + numDelay) });
}
