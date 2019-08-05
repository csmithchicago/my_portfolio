import React from "react"
import { Link } from "gatsby"
import styled  from 'styled-components'
import tw from 'tailwind.macro'
import logoBtn from '../images/logo_btn.svg'
import projectsBtn from '../images/projects_btn.svg'
import blogBtn from '../images/blog_btn.svg'

export const StyledLink = styled(Link)`
    ${tw`text-white text-center`};
    text-decoration: none;
    &:hover {
        ${tw`text-black underline`};
    };
`;

const List = styled.li`
    ${tw`text-white text-center sm:text-xl`};
    padding: 1rem;
    list-style-type: none;
`;

const Title = styled.h1`
    ${tw`text-white text-left sm:text-4xl`};
    margin: 0;
    flex: 1;
`;

const Header = () => (
  <header
    style={{
      height: "100px",
      marginBottom: 0,
      verticalAlign: "text-bottom"
    }} >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0rem 1.0875rem", // the left padding of title
        display: "flex",
        justifyItems: "space-between",
        alignItems: "center",
        verticalAlign: "text-bottom"
      }}
    >
      <Title>
        <StyledLink to="/">
        <img src={logoBtn} style={{paddingBottom: "25px",
             width: "140px"}} alt="site logo"/>
        </StyledLink>
      </Title>
        <nav style={{ verticalAlign: "text-bottom" }}>
          <ul style={{ display: "flex", flex: 1,
              verticalAlign: "text-bottom"}}>
              <List key={"projects"} >
                <StyledLink to="/projects">
                <img src={projectsBtn} style={{width: "110px"}} alt="site logo"/>
                </StyledLink>
              </List>
              <List key={"blog"} >
                <StyledLink to="/blog">
                <img src={blogBtn} style={{width: "110px"}} alt="site logo"/>
                </StyledLink>
              </List>
          </ul>
        </nav>
    </div>
  </header>
);
export default Header
