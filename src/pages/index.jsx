import React from 'react'
import { Link, graphql } from 'gatsby'
import styled, { keyframes, css } from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import Img from 'gatsby-image'
import get from 'lodash/get'

// Animations
// import { rotateAnimation } from '../styles/animations'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import PublicationCard from '../components/PublicationCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import triangle from '../images/triangle.svg'
import ContactForm from "../components/ContactForm"

import contentfulLogo from '../images/PoweredByContentful_DarkBackground.svg'
import gatsbyLogo from '../images/gatsbyjs-ar21.svg'
import styles from '../styles/style.css'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const rotateAnimation = length => css`
  animation: ${rotate} ${length} linear infinite;
`

export const StyledLink = styled(Link)`
    ${tw`text-white text-center text-4xl`};
    text-decoration: none;
    font-family: 'Cormorant Garamond';
    font-weight: 700;
    &:hover {
        ${tw`underline`};
        text-decoration-color: #e07628;
    };
`;

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 75em) {
    grid-gap: 3rem;
  }
  @media (max-width: 56em) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`
const Span = styled.span`
  &:before {
    content: '';
    background: url(${triangle});
    position: absolute;
    ${rotateAnimation('4s')};
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled(Img)`
  ${tw`h-auto w-32 xl:w-48 flex-none`};
`

const AboutSub = styled.div`
  ${tw`flex-auto text-white pt-16 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
  font-family: 'Cormorant Garamond';
  font-weight: 600;
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl text-center`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

// const Index = ({data}) => (
class HomePage extends React.Component {
  render() {
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const bio = author.node.shortBio

    return (
    <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hi, <br /> I'm Corey Smith.
        </BigTitle>
        <Subtitle>
          Medical Physicist <Span style={{color: "#e07628"}}> &#10031; </Span> Data Scientist <span style={{color: "#e07628"}}>  &#10031;  </span> PhD Candidate
        </Subtitle>
      </Hero>
      <About offset={1}>
        <Title>About</Title>
        <AboutHero>
          <Avatar fluid={author.node.heroImage.fluid} alt="profile picture"/>
          <AboutSub dangerouslySetInnerHTML={{
            __html: bio.childMarkdownRemark.html }}>
            {/* {author.node.shortBio.shortBio}   */}
          </AboutSub>
        </AboutHero>
      </About>
      <Projects offset={2}>
        <Title name="#projects" >Projects</Title>
        <ProjectsWrapper>
        <ProjectCard
            title="r/Loseit Challenge Analysis"
            link="https://github.com/csmithchicago/Loseit"
            bg="#794acf"
          >
            Analysis of Past Reddit Weight Loss Challenges
          </ProjectCard>
          <ProjectCard
            title="My Weight Loss Tracker"
            link="https://github.com/csmithchicago/weightlosstracker"
            bg="#794acf"
          >
            This is an ongoing project I created to help people keep track of their weight loss progress.
          </ProjectCard>
        </ProjectsWrapper>
        <br/><br/><br/>
        <StyledLink to="/blog" style={{ margin: '0 auto', textAlign: "center" }}> Check Out My Blog For More</StyledLink>
      </Projects>
      <About offset={3}>
      <Inner>
          <Title>Get in Touch</Title>
          <ContactForm/>
        </Inner>
      </About>
      <Contact offset={4}>

        <Footer>
        <p>
          <a href="https://www.contentful.com/" rel="nofollow noreferrer" target="_blank">
            <img src={contentfulLogo}
            style={{width: "40%"}}
            alt="Powered by Contentful"/>
          </a>
          <br/>
          &copy; 2019 by Corey Smith.{' '}
        </p>
        </Footer>
      </Contact>
    </Parallax>
  </>
    )
  }
}
export default HomePage

export const query = graphql`
query IndexQuery {
  allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
    edges {
      node {
        name
        shortBio {
          shortBio
          childMarkdownRemark {
            html
          }
        }
        title
        heroImage: image {
          fluid(
            maxWidth: 512
            maxHeight: 512
          ) {
            ...GatsbyContentfulFluid_tracedSVG
            }
        }
      }
    }
  }
}
`