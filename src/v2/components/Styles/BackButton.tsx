import * as React from "react";
import { useNavigate } from "react-router-dom";

import { SecondaryButton } from "./Button";

export const BackButton = () => {
  const navigate = useNavigate();
  return <SecondaryButton onClick={() => navigate(-1)}>Back</SecondaryButton>;
};
