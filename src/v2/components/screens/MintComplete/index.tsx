import * as React from "react";
import styled from "styled-components";

import { Chrome } from "../../Chrome";
import { Button } from "../../Button";

const Container = styled.form`
  box-sizing: border-box;
  max-width: 1100px;
  padding: 40px;
  width: 100%;
`;

const Content = styled.div`
  align-items: center;
  display: grid;
  gap: 80px;
  grid-template-columns: 350px 1fr;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const Disclaimer = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  line-height: 19px;
  font-weight: 600;
  margin-top: 24px;

  @media (max-width: 940px) {
    text-align: center;
  }
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
  margin-top: 16px;
  width: 350px;
`;

const Name = styled.div`
  color: #ffffff;
  font-size: 28px;
  font-weight: 800;
  text-align: center;
`;

const OpenSea = styled.a`
  color: rgba(255, 255, 255, 0.5);
  display: block;
  font-size: 18px;
  line-height: 25px;
  margin: 8px 0 32px;
  text-decoration: none;

  strong {
    color: rgba(255, 255, 255, 1);
    text-style: normal;
  }

  @media (max-width: 940px) {
    text-align: center;
  }
`;

const RightCol = styled.div`
  @media (max-width: 940px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

const Submit = styled(Button)`
  margin-top: 24px;
`;

const Title = styled.header`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;

  @media (max-width: 940px) {
    text-align: center;
  }
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
        <Content>
          <div>
            <Name>{props.name}</Name>
            <Image style={{ backgroundImage: `url(${props.imageUrl})` }} />
          </div>
          <RightCol>
            <Title>🎉 Woohoo! You did it!</Title>
            <OpenSea>
              Your NFT now lives in a bunch of places. Check it out on <strong>OpenSea</strong>, a
              marketplace for NFTs.
            </OpenSea>
            <Title>👉 Next, connect it to Twitter so all your friends can see.</Title>
            <Submit>Connect to Twitter</Submit>
            <Disclaimer>️To connect your NFT, you must be subscribed to Twitter Blue.</Disclaimer>
          </RightCol>
        </Content>
      </Container>
    </Chrome>
  );
}
