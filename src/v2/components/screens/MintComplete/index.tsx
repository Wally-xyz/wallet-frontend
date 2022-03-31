import * as React from "react";
import styled from "styled-components";

import { Chrome } from "../../Chrome";
import { Button } from "../../Button";

const Container = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  background-color: black;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100px;
  filter: drop-shadow(0px 6.38462px 150px rgba(248, 166, 255, 0.2))
    drop-shadow(0px 6.38462px 40px rgba(242, 98, 255, 0.5))
    drop-shadow(0px 6.38462px 100px rgba(112, 221, 255, 0.2));
  height: 350px;
  margin: 16px 0 60px;
  width: 350px;
`;

const Name = styled.div`
  color: #ffffff;
  font-size: 28px;
  font-weight: 800;
  margin-top: 60px;
`;

const Submit = styled(Button)`
  margin-top: 24px;
`;

const Title = styled.header`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
`;

interface Props {
  imageUrl: string;
  name: string;
  onNext(): void;
}

export function MintComplete(props: Props) {
  return (
    <Chrome>
      <Container
        onSubmit={e => {
          e.preventDefault();
          props.onNext();
        }}
      >
        <Title>🎉 Woohoo! You did it!</Title>
        <Name>{props.name}</Name>
        <Image style={{ backgroundImage: `url(${props.imageUrl})` }} />
        <Title>👉 Next, connect it to Twitter so all your friends can see.</Title>
        <Submit>Connect to Twitter</Submit>
      </Container>
    </Chrome>
  );
}
