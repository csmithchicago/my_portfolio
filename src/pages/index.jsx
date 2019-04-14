import React from 'react'
import { Link, graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import Img from 'gatsby-image'
import get from 'lodash/get'

// Animations
import { rotateAnimation } from '../styles/animations'

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

import contentfulLogo from '../images/PoweredByContentful_DarkBackground.svg'
import gatsbyLogo from '../images/gatsbyjs-ar21.svg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`
export const Span = styled.span`
  &:before {
    content: '';
    ${rotateAnimation('4s')};
  }
`
// const StyledAvatar = styled(GatsbyImage)`
// ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
// `

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled(Img)`
  ${tw`h-auto w-32 xl:w-48 flex-none`};
`

const AboutSub = styled.span`
  ${tw`flex-auto text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

// const Spinner = styled.animate`
//   animation: rotate 4s linear infinite;
// `

// const Index = ({data}) => (
class HomePage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
    <>
    <Layout />
    <Parallax pages={7}>
      <Hero offset={0}>
        <BigTitle>
          hi, <br /> i'm corey smith.
        </BigTitle>
        <Subtitle>
          phd candidate <span style={{color: "#e07628"}}>  &#10031;  </span> programmer <span style={{color: "#e07628"}}>  &#10031;  </span> medical physicist
        </Subtitle>
      </Hero>
      <About offset={1}>
        <Title>About</Title>
        <AboutHero>
          <Avatar fluid={author.node.heroImage.fluid} alt="profile picture"/>
          <AboutSub>
            {author.node.shortBio.shortBio}  
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          {/* {author.node.shortBio.shortBio} */}
        </AboutDesc>
      </About>
      <Projects offset={2}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="my weight loss tracker"
            link="https://github.com/csmithchicago/weightlosstracker"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            this is a project that i created that can help people keep track of their weight loss progress.
          </ProjectCard>
          <ProjectCard
            title="this portfolio"
            link="https://coreydeon.com"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            i started this site to have an easy way to summarize and show off the different skills and tools i use.
          </ProjectCard>
          <ProjectCard
            title="Loseit Challenge Analysis"
            link="https://github.com/csmithchicago/Loseit"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            analysis that i performed for reddit weight loss challenges.
          </ProjectCard>
          <ProjectCard
            title="2018 Midterm Election"
            link="https://github.com/csmithchicago/DFP_WTHH_Data"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            election analysis using survey data acquired by data for progress.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <Projects offset={4}>
        <Title>Publications</Title>
        <ProjectsWrapper>
          <PublicationCard
            title="Reflective imaging improves spatiotemporal resolution and collection efficiency in light sheet microscopy"
            link="https://www.ncbi.nlm.nih.gov/pubmed/29129912"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
          </PublicationCard>
          <PublicationCard
            title="Sensitivity evaluation and selective plane imaging geometry for x-ray-induced luminescence imaging"
            link="https://www.ncbi.nlm.nih.gov/pubmed/28703922"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
          </PublicationCard>
          <PublicationCard
            title="Simultaneous multiview capture and fusion improves spatial resolution in wide-field and light-sheet microscopy"
            link="https://www.ncbi.nlm.nih.gov/pubmed/27761486"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
          </PublicationCard>
        </ProjectsWrapper>
      </Projects>
      <Contact offset={6}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText> 
          <Link to="#">Check Out My Blog!</Link>
          <br></br>
          </ContactText>
        </Inner>
        <Footer>
        <p>
          <a href="https://www.contentful.com/" rel="nofollow" target="_blank">
            <img src={contentfulLogo}
            style={{width: "80%"}}
            alt="Powered by Contentful"/>
          </a>
          {/* {'      '}
          <a href="https://www.gatsbyjs.org/" rel="nofollow" target="_blank">
            <img src={gatsbyLogo}
            style={{width: "20%"}}
            alt="Powered by GatsbyJS"/>
          </a> */}
          </p>
          &copy; 2019 by Corey Smith.{' '}
          {/* <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Gatsby Starter</a>.
          Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by 
          <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a> */}
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
  contentfulPerson {
    name
    shortBio {
    shortBio
    }
  }
  contentfulAsset{
    fluid {
      src
    }
  }
  allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
    edges {
      node {
        name
        shortBio {
          shortBio
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

// export default Index