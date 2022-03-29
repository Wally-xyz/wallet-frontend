import * as React from "react";
import styled, { keyframes } from "styled-components";

const progress = keyframes`
  from {
    left: 0;
  }

  to {
    left: 100%;
  }
`;

const Button = styled.button`
  background: linear-gradient(87.18deg, #32adf0 -15.08%, #ff00fe 107.47%);
  border-radius: 100px;
  box-shadow: 0px 6.384615421295166px 31.923076629638672px 0px #f262ff80;
  cursor: pointer;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 28px;
  font-weight: 700;
  padding: 12px 60px;
  position: relative;
`;

const ProgressWrapper = styled.div`
  border-radius: 100px;
  bottom: 4px;
  left: 4px;
  overflow: hidden;
  position: absolute;
  right: 4px;
  top: 4px;
`;

const ProgressBar = styled.div`
  background-color: black;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  &.progressing {
    animation: ${progress} linear;
  }

  &.complete {
    left: 100%;
  }
`;

const Inner = styled.div`
  bottom: 0;
  display: grid;
  left: 0;
  place-items: center;
  opacity: 0.5;
  position: absolute;
  right: 0;
  top: 0;
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  duration: number;
  onComplete?(): void;
}

export function PressAndHoldButton(props: Props) {
  const { duration, onComplete, ...rest } = props;
  const progress = React.useRef<HTMLDivElement>(null);

  return (
    <Button
      {...rest}
      onMouseDown={e => {
        if (progress.current && !progress.current.classList.contains("complete")) {
          progress.current.classList.add("progressing");
        }

        rest.onMouseDown?.(e);
      }}
      onMouseUp={e => {
        if (progress.current) {
          progress.current.classList.remove("progressing");
        }

        rest.onMouseUp?.(e);
      }}
    >
      <ProgressWrapper>
        <ProgressBar
          ref={progress}
          style={{
            animationDuration: `${props.duration}ms`,
          }}
          onAnimationEnd={e => {
            e.currentTarget.classList.add("complete");
            onComplete?.();
          }}
        />
      </ProgressWrapper>
      {props.children}
      <Inner>{props.children}</Inner>
    </Button>
  );
}

PressAndHoldButton.defaultProps = {
  duration: 1500,
};
