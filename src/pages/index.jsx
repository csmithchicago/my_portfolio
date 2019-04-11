import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
// import Image from 'gatsby-image'

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

import avatar from '../images/avatar.jpg'

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
// const StyledAvatar = styled(GatsbyImage)`
// ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
// `

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
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

const Index = () => (
  <>
    <Layout />
    <Parallax pages={7}>
      <Hero offset={0}>
        <BigTitle>
          hi, <br /> i'm corey smith.
        </BigTitle>
        <Subtitle>i am a phd student in chicago working on building my programing skills.</Subtitle>
      </Hero>
      <Projects offset={1}>
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
      <Projects offset={3}>
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

      <About offset={5}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Corey Smith" />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
            Emoji into my speech to better express myself. Winky face.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel
          every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should
          make me your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids
          want to know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all
          right?
        </AboutDesc>
      </About>
      <Contact offset={6}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
          <Link to="/blog">Check Out My Blog!</Link>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Corey Smith.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Gatsby Starter</a>. Made with{' '}
          <a href="https://www.gatsbyjs.org/">GatsbyJS</a>.
          Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
