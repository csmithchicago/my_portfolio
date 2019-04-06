import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`
const Title = styled.div`
  ${tw`text-white text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`
const PublicationCard = ({ title, link, bg }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    <Title>{title}</Title>
  </Wrapper>
)

export default PublicationCard

PublicationCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
}
