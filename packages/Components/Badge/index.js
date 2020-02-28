import React from "react";

import { Container } from "./styles";

export default function Badge({ title = "" }) {
  return <Container>{title}</Container>;
}
