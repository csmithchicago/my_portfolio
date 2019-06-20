import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled  from 'styled-components'
import tw from 'tailwind.macro'

const StyledLink = styled(Link)`
    ${tw`text-white text-center`};
    text-decoration: none;
    &:hover {
        ${tw`text-black underline`};
    };
`;

const Li = styled.li`
    ${tw`text-white text-center sm:text-xl`};
    padding: 1rem;
    list-style-type: none;
`;

const Title = styled.h1`
    ${tw`text-white text-left sm:text-4xl`};
    margin: 0; 
    flex: 1; 
`;

const Header = ({ menuLinks }) => (
  <header
    style={{
      background: "rebeccapurple",
      marginBottom: 0,
      verticalAlign: "text-bottom"
    }}
  >
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
            {" Corey Deon"}
          </StyledLink>
        </Title>
          <nav style={{ verticalAlign: "text-bottom" }}>
            <ul style={{ display: "flex", flex: 1, 
                verticalAlign: "text-bottom"}}>
              {menuLinks.map(link => (
                <Li key={link.name} >
                  <StyledLink to={link.link} >
                    {link.name}
                  </StyledLink>
                </Li>
              ))}
            </ul>
          </nav>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header