import React, { memo } from "react";
import { Header } from "@buffetjs/custom";
import { Table } from "@buffetjs/core";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`;

const HomePage = () => {
  const headers = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Url",
      value: "html_url",
    },
  ];

  const rows = [
    {
      name: "landing-page",
      description: "Code to the sales landing page",
      html_url: "https://github.com/agraluca/landing-page",
    },
    {
      name: "links-estudo",
      description: "Links to study",
      html_url: "https://github.com/React-Avancado/links-estudo",
    },
    {
      name: "boilerplate",
      description: "Boilerplate to use in our React Avançado course",
      html_url: "https://github.com/agraluca/boilerplate-next",
    },
    {
      name: "landing-page-api",
      description: "Api made with Strapi that we use in our landing page",
      html_url: "https://github.com/agraluca/landing-page-api",
    },
  ];

  return (
    <Wrapper>
      <Header
        title={{ label: "React Avançado Repositories" }}
        content="A list of our repositories in React Avançado course."
      />
      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
