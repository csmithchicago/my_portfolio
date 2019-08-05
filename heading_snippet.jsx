import logoBtn from '../images/logo_btn.svg'
import projectsBtn from '../images/projects_btn.svg'
import blogBtn from '../images/blog_btn.svg'



const scrollToElement = require('scroll-to-element')

/*Strip the ul of padding and list styling*/

const Ul = styled.ul`
  list-style-type:none;
  /* display:inline-block; */
  float: right;
  /*margin:5em;
  padding:0;*/
`
const Heading = styled.header`
  /* margin: '0 auto';
  max-width: 960; */
  height: 100px;
  display: inline-block;
  margin: "0 auto";
  max-width: 960;
  padding: "0rem 1.0875rem";
  display: "flex";
  justify-items: "space-between";
`
const List = styled.li`
  padding: 10px;
  list-style-type: none;
  /* margin: '0 auto';
  max-width: 960; */
  float: right;
  display: flex;
  flex: 1;
  /* display:inline-block; */
  /* @media screen and (min-width: 600px) {
    width: 120px;
    border-bottom: none;
    height: 50px;
    line-height: 50px;
    font-size: 1.4em;
  } */
`

const Header = ({ menuLinks }) => (
  <Heading>
    <nav>
    <List style={{ float: "left" }}>
      <Link to="/">
        <img src={logoBtn}
        style={{width: "125px"}}
        alt="site logo home button"/>
      </Link>
    </List>
      <Ul >
        <List>
          <Link to="/projects">
            <img src={projectsBtn}
              style={{width: "95px"}}
              alt="project button"/>
          </Link>
        </List>
        <List>
          <Link to="/blog">
            <img src={blogBtn}
              style={{width: "95px"}}
              alt="blog button"/>
          </Link>
        </List>
      </Ul>
    </nav>
  </Heading>
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
