import React from "react"
import { Link } from "gatsby"
import styled  from 'styled-components'
import tw from 'tailwind.macro'
const scrollToElement = require('scroll-to-element')

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

const Header = ({ menuLinks }) => (
  <header
    style={{
      background: "rebeccapurple",
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
          {" Corey Deon"}
        </StyledLink>
      </Title>
        <nav style={{ verticalAlign: "text-bottom" }}>
          <ul style={{ display: "flex", flex: 1, 
              verticalAlign: "text-bottom"}}>
            {menuLinks.map(link => (
              <List key={link.name} >
                <StyledLink to={link.link} >
                  {link.name}
                </StyledLink>
              </List>
            ))}
          </ul>
        </nav>
    </div>
  </header>
);
export default Header



export const Header2 = ({ menuLinks }) => (
<div>
    {
      menuLinks.map(link => (
        <List key={link.name} >
          <StyledLink 
            to={link.link}
            onClick={event => handleLinkClick(event, link.anchor)}
          >
            {link.name}
          </StyledLink>
        </List>
      ))
    }
    </div>
)

function handleLinkClick(event, target){
  if (typeof window !== undefined) {
    event.preventDefault()
    scrollToElement(target, {offset: -95, duration: 1000})
  }
}


// // this helpful functionality came from
// //https://chaseohlson.com/gatsby-link-anchor-navigation
// export class Header2 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//   }

//   render() {
//     return (
//     <div>
//     {
//       menuLinks.map(link => (
//         <List key={link.name} >
//           <StyledLink 
//             to={link.link}
//             onClick={event => handleLinkClick(event, link.anchor)}
//           >
//             {link.name}
//           </StyledLink>
//         </List>
//       ))
//     }
//     </div>
//     )
//   }
// }