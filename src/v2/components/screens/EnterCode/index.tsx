import * as React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { Chrome } from "../../Chrome";
import { Input as _Input } from "../../Input";
import { Button } from "../../Button";
import { API_URL } from "../../../../constants/default";

const Container = styled.form`
  box-sizing: border-box;
  max-width: 1000px;
  padding: 20px;
  width: 100%;
`;

const Explanation = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weigt: 400;
  opacity: 0.5;
`;

const Input = styled(_Input)`
  margin-top: 90px;
  max-width: 250px;
  width: 100%;
`;

const Submit = styled(Button)`
  margin-top: 34px;
`;

const Title = styled.header`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
`;

interface Props {
  email: string;
  code: string;
  onCodeChange(code: string): void;
  onSubmit(data: { address: string; authToken: string }): void;
}

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export function EnterCode(props: Props) {
  const query = useQuery();

  const verifyCode = async (email:string, code:string) => {
    const body = {
      email,
      code,
    };
    await fetch(
      `${API_URL}/auth/verifyemail?email=${encodeURIComponent(email)}&code=${code}`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
      .then(response => response.json())
      .then(response => {
        if (response.access_token) {
          const ls = window.localStorage;
          ls.setItem("token", response.access_token);
          props.onSubmit({ address: response.user.address, authToken: response.access_token });
        }
      });
  };

  React.useEffect(() => {
    const email = query.get('email')
    const code = query.get('code')
    if (email && code) {
      verifyCode(email, code)
    }
  }, [])

  return (
    <Chrome>
      <Container
        onSubmit={e => {
          e.preventDefault();
          verifyCode(props.email, props.code);
        }}
      >
        <Title>✅ Nice! Check your email for the magic code.</Title>
        <Explanation>Or click the “Authorize” button on your email.</Explanation>
        <Input
          placeholder="magic code"
          value={props.code}
          onChange={e => props.onCodeChange(e.currentTarget.value)}
        />
        <Submit disabled={!props.code}>Submit code</Submit>
      </Container>
    </Chrome>
  );
}
