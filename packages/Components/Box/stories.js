import React from "react";
import { storiesOf } from "@storybook/react";
import VHBox from ".";
import { Row } from "../../Grid";

storiesOf("Components|Box", module)
    .add("Types", () => (
      <div style={{ width: '589px', padding: "24px"}}>
        <Row row>
          <VHBox flex='2' bg="#ffA">flex 2</VHBox>
          <VHBox flex='1' bg="#f9a">flex 1</VHBox>
        </Row>
        <br />
        <VHBox paddingLeft='30px' bg="#ffA">padding-left</VHBox>
        <br />
        <VHBox flex='2' marginLeft='30px' bg="#f9a">margin-left 1</VHBox>
        <br />
        <Row row>
          <VHBox bg="#ffA">simple div</VHBox>
          <VHBox flex='2' marginLeft='50px' bg="#f9a">margin-left 1</VHBox>
        </Row>
      </div>
    ));
