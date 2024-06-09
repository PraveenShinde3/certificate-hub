import { Button, Column, Container, Html, Row, Text } from "@react-email/components";
import React from "react";

export default function Email({ certificate_name, company, level, email, site_url }) {


  return (
    <Html>
      <Container>
        <Row>
          <Column>Certificate Name </Column>
          <Column>Company</Column>
          <Column>Level</Column>
          <Column>Site Url</Column>
        </Row>
        <Row>
          <Column>{certificate_name}</Column>
          <Column>{company}</Column>
          <Column>{level}</Column>
          <Column>{site_url}</Column>
        </Row>
      </Container>
    </Html>
  );
}