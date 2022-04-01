import * as React from "react";
import styled from "styled-components";
import { TransitionMotion, spring } from "react-motion";

import { Chrome } from "../../Chrome";
import { Button } from "../../Button";
import { Input as _Input } from "../../Input";
import { QRCodeScanner } from "../../QRCodeScanner";
import Slide0 from "../../../../assets/step-0.png";
import Slide1 from "../../../../assets/step-1.png";
import Slide2 from "../../../../assets/step-2.png";
import Slide3 from "../../../../assets/step-3.png";
import Slide4 from "../../../../assets/step-4.png";
import Slide5 from "../../../../assets/step-5.png";

const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: grid;
  gap: 40px;
  grid-template-columns: 410px 1fr;
  height: 100%;
  max-width: 1200px;
  padding: 20px;
  width: 100%;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const Disclaimer = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weigt: 400;
  opacity: 0.5;
  margin-top: 16px;

  @media (max-width: 940px) {
    display: none;
  }
`;

const DisclaimerMobile = styled(Disclaimer)`
  display: none;

  @media (max-width: 940px) {
    display: block;
    text-align: center;
  }
`;

const DisclaimerScanner = styled(Disclaimer)`
  margin: 16px 0;
`;

const Dot = styled.div<{ selected?: boolean }>`
  height: 16px;
  width: 16px;
  border-radius: 16px;
  background-color: #c4c4c4;
  cursor: pointer;
  transition: opacity 0.5s;

  ${props => (props.selected ? `opacity: 1` : "opacity: 0.5")};
`;

const Dots = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  margin-top: 24px;
`;

const Hand = styled.div<{ show?: boolean }>`
  font-size: 50px;
  left: 110%;
  position: absolute;
  top: 25%;
  transition: opacity 0.5s;

  ${props => (props.show ? "opacity: 1" : "opacity: 0")}
`;

const Input = styled(_Input)`
  margin-top: 48px;
  width: 330px;
`;

const RightCol = styled.div`
  @media (max-width: 940px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

const Scanner = styled(QRCodeScanner)`
  border-radius: 40px;
  height: 250px;
  margin-top: 16px;
  width: 444px;
`;

const SlideContainer = styled.div`
  height: 690px;
  overflow: hidden;
  position: relative;
  width: 410px;
`;

const Spacer = styled.div`
  height: 240px;
`;

const Submit = styled(Button)`
  margin-top: 32px;
  position: relative;
`;

const Slide = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 888px;
  position: absolute;
  top: 0;
  width: 410px;
`;

const _SlideTitle = styled.div`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const _Step = styled.img`
  height: 650px;
`;

const Title = styled.header`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;

  @media (max-width: 940px) {
    text-align: center;
  }
`;

function SlideTitle(props: { step: number }) {
  switch (props.step) {
    case 0:
      return <_SlideTitle>Go to your Twitter profile</_SlideTitle>;
    case 1:
      return <_SlideTitle>Tap “Edit profile”</_SlideTitle>;
    case 2:
      return <_SlideTitle>Tap profile to “Choose NFT”</_SlideTitle>;
    case 3:
      return <_SlideTitle>Tap “Connect my wallet”</_SlideTitle>;
    case 4:
      return <_SlideTitle>Tap the QR code</_SlideTitle>;
    default:
      return <_SlideTitle>Tap the QR code</_SlideTitle>;
  }
}

function Step(props: { step: number }) {
  switch (props.step) {
    case 0:
      return <_Step src={Slide0} />;
    case 1:
      return <_Step src={Slide1} />;
    case 2:
      return <_Step src={Slide2} />;
    case 3:
      return <_Step src={Slide3} />;
    case 4:
      return <_Step src={Slide4} />;
    default:
      return <_Step src={Slide5} />;
  }
}

enum ScannerState {
  Checking,
  Failure,
  Success,
}

interface Props {
  onContinue(uri: string): void;
}

export function ConnectTwitter(props: Props) {
  const [slide, setSlide] = React.useState(0);
  const [url, setUrl] = React.useState("");
  const [scanning, setScanning] = React.useState(false);
  const [scannerState, setScannerState] = React.useState(ScannerState.Checking);

  const timeout = React.useRef<number>(0);

  const transition = React.useCallback(() => {
    if (slide < 5) {
      setSlide(slide => slide + 1);
    } else {
      clearInterval(timeout.current);
    }
  }, [slide, setSlide]);

  React.useEffect(() => {
    timeout.current = setTimeout(transition, 3000);
  }, [transition]);

  return (
    <Chrome>
      <Container>
        <div>
          <SlideContainer>
            <TransitionMotion
              willEnter={() => ({ left: 410 })}
              willLeave={() => ({ left: spring(-410) })}
              styles={[
                {
                  key: String(slide),
                  data: { slide },
                  style: { left: spring(0) },
                },
              ]}
            >
              {interpolatedStyles => {
                return (
                  <>
                    {interpolatedStyles.map(style => (
                      <Slide key={style.key} style={{ left: `${style.style.left}px` }}>
                        <Step step={style.data?.slide} />
                        <SlideTitle step={style.data?.slide} />
                      </Slide>
                    ))}
                  </>
                );
              }}
            </TransitionMotion>
          </SlideContainer>
          <Dots>
            <Dot
              selected={slide === 0}
              onClick={() => {
                clearInterval(timeout.current);
                setSlide(0);
              }}
            />
            <Dot
              selected={slide === 1}
              onClick={() => {
                clearInterval(timeout.current);
                setSlide(1);
              }}
            />
            <Dot
              selected={slide === 2}
              onClick={() => {
                clearInterval(timeout.current);
                setSlide(2);
              }}
            />
            <Dot
              selected={slide === 3}
              onClick={() => {
                clearInterval(timeout.current);
                setSlide(3);
              }}
            />
            <Dot
              selected={slide === 4}
              onClick={() => {
                clearInterval(timeout.current);
                setSlide(4);
              }}
            />
            <Dot
              selected={slide === 5}
              onClick={() => {
                clearInterval(timeout.current);
                setSlide(5);
              }}
            />
          </Dots>
        </div>
        <RightCol>
          {scanning ? (
            <>
              <Title>
                {scannerState === ScannerState.Success
                  ? "✅ Got it!"
                  : "💡 Tip: Hold the phone close to the camera, then slowly move it back towards you."}
              </Title>
              <Scanner
                validator={() => true}
                onSuccess={url => {
                  const sound = require("../../../../assets/success-sound-effect.mp3");
                  const audio = new Audio(sound);
                  audio.volume = 0.1;
                  audio.play();
                  setScannerState(ScannerState.Success);
                  setTimeout(() => props.onContinue(url), 2000);
                }}
                onFailure={() => {
                  setScannerState(ScannerState.Failure);
                  setTimeout(() => setScannerState(ScannerState.Checking), 2000);
                }}
              />
              <DisclaimerScanner>
                If it doesn’t work after a few tries, try sending yourself the link instead
              </DisclaimerScanner>
            </>
          ) : (
            <>
              <Title>📱 You’ll need to connect by scanning a QR code.</Title>
              <Disclaimer>Follow the step by step instructions on the left.</Disclaimer>
              <DisclaimerMobile>Follow the step by step instructions above.</DisclaimerMobile>
              <Submit
                onClick={() => {
                  const resp = window.confirm(
                    "Do you have the QR code open on the Twitter app? If not, click cancel and make sure to follow the steps",
                  );

                  if (resp) {
                    setScanning(true);
                  }
                }}
              >
                Scan QR Code
                <Hand show={slide === 5}>👈</Hand>
              </Submit>
              <Spacer />
            </>
          )}
          <Title>Or, if you have a link, paste it here instead:</Title>
          <Disclaimer>Tap on the QR code and press “Copy link”</Disclaimer>
          <Input placeholder="link" value={url} onChange={e => setUrl(e.currentTarget.value)} />
          <Submit
            disabled={!url}
            onClick={() => {
              if (url) {
                props.onContinue(url);
              }
            }}
          >
            Submit
          </Submit>
        </RightCol>
      </Container>
    </Chrome>
  );
}
