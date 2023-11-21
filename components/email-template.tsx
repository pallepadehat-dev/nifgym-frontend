"use client";
import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
interface EmailTemplateProps {
  firstName: string;
  Email: string;
  Message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  Email,
  Message,
}) => (
  <Html>
    <Head />
    <Preview>Du har modtaget en mail fra: {firstName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img src={`/logo.png`} width="120" height="36" alt="logo" />
        </Section>
        <Heading style={h1}>Nif Gym Kontakt Formular</Heading>

        <Text className="font-bold" style={h2}>
          Navn: <span className=" font-normal">{firstName}</span>
        </Text>
        <Text className="font-bold " style={h2}>
          EMAIL: <span className=" font-normal">{Email}</span>
        </Text>

        <Text className="font-bold" style={h2}>
          Beskrivelse:
        </Text>
        <Section style={codeBox}>
          <Text style={confirmationCodeText}>{Message}</Text>
        </Section>
        <Section>
          <Row style={footerLogos}>
            <Column style={{ width: "66%" }}>
              <Img src={`/logo.png`} width="50" height="36" alt="logo" />
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

const footerLogos = {
  marginBottom: "32px",
  paddingLeft: "8px",
  paddingRight: "8px",
  width: "100%",
};

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
};

const logoContainer = {
  marginTop: "32px",
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "36px",
  fontWeight: "700",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
};

const h2 = {
  color: "#1d1c1d",
  fontSize: "17px",
  fontWeight: "700",
  margin: "0px 0",
  padding: "0",
  lineHeight: "42px",
};

const codeBox = {
  background: "rgb(245, 244, 245)",
  borderRadius: "4px",
  marginRight: "50px",
  marginBottom: "30px",
  padding: "43px 23px",
};

const confirmationCodeText = {
  fontSize: "30px",
  textAlign: "center" as const,
  verticalAlign: "middle",
};
