import React from "react";
import { Link, graphql , StaticQuery} from "gatsby";
import { css } from "@emotion/core"
import styled  from 'styled-components'
import tw from 'tailwind.macro'


// Components
import BlogLayout from '../components/BlogLayout'
import {BigTitle, Par, StyledDiv, StyledBackgroundImage} from '../templates/blog-post'

export const StyledLink = styled(Link)`
    ${tw`text-center`};
    text-decoration: none;
    &:hover {
        ${tw`underline`};
        text-decoration-color: #e07628;
    };
`;

const ProjectsPage = () => (
  <StaticQuery
    query={graphql`
    query{
      contentfulAsset(id: {eq: "a247dc5f-8caf-5337-89ff-3559f87f1889"}){
        description
        fluid(maxWidth: 2048, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }`}
    render={ data => (
      <BlogLayout>
      <StyledBackgroundImage
        alt={data.contentfulAsset.description}
        fluid={data.contentfulAsset.fluid}
      />

    <StyledDiv>
      <h1 style={{borderBottom: "1px solid", textAlign: "center",
                  fontFamily: 'Cormorant Garamond', fontWeight: "700"
                  }}
      >
        Projects
      </h1>

      Coming Soon to You!
        </StyledDiv>
    </BlogLayout>
    )}
  />
);

export default ProjectsPage;