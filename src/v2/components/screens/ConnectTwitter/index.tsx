import * as React from "react";
import styled from "styled-components";
import { TransitionMotion, spring } from "react-motion";

import { Chrome } from "../../Chrome";
import { Button } from "../../Button";
import Slide0 from "../../../../assets/step-0.png";
import Slide1 from "../../../../assets/step-1.png";
import Slide2 from "../../../../assets/step-2.png";
import Slide3 from "../../../../assets/step-3.png";
import Slide4 from "../../../../assets/step-4.png";
import Slide5 from "../../../../assets/step-5.png";

const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 410px;
  height: 100%;
  max-width: 1200px;
  padding: 20px;
  width: 100%;
`;

const Disclaimer = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weigt: 400;
  opacity: 0.5;
  margin-top: 16px;
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

const SlideContainer = styled.div`
  height: 690px;
  overflow: hidden;
  position: relative;
  width: 410px;
`;

const Submit = styled(Button)`
  margin-top: 98px;
  position: relative;
`;

const Title = styled.header`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
  margin-top: 220px;
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

interface Props {
  onContinue(): void;
}

export function ConnectTwitter(props: Props) {
  const [slide, setSlide] = React.useState(0);
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
          <Title>📱 You’ll need to connect by scanning a QR code.</Title>
          <Disclaimer>Follow the step by step instructions on the right.</Disclaimer>
          <Submit
            onClick={() => {
              const resp = window.confirm(
                "Do you have the QR code open on the Twitter app? If not, click cancel and make sure to follow the steps",
              );

              if (resp) {
                props.onContinue();
              }
            }}
          >
            Scan QR Code
            <Hand show={slide === 5}>👈</Hand>
          </Submit>
        </div>
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
                        <SlideTitle step={style.data?.slide} />
                        <Step step={style.data?.slide} />
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
      </Container>
    </Chrome>
  );
}
