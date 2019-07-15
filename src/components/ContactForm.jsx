import React from "react";
import { navigateTo } from "gatsby-link";
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import linkedinLogo from '../images/linkedin.svg'


const A = styled.a`
  ${tw `text-white p-3 inline-flex items-center text-xl`};
  font-family: 'Cormorant Garamond';
  font-weight: 700;
  &:hover {
        ${tw`text-white`};
    };
`;

const Title = styled.h3`
    ${tw`text-white text-4xl`};
    font-family: 'Cormorant Garamond';
    font-weight: 700;
`;

export const Par = styled.p`
  ${tw`text-3xl text-center leading-normal text-white`};
  margin: '0 auto';
  font-family: 'Cormorant Garamond';
  font-weight: 700;
`;

const Button = styled.button`
  color: #794acf;
  font-family: 'Cormorant Garamond';
  font-weight: 700;
  font-size: 1em;
  margin: 0.25em;
  padding: 0.25em .5em;
  border: 2px solid #794acf;
  border-radius: 3px;
  &:hover {
        ${tw`underline`};
    };
`;

const Text = styled.textarea`
  color: #794acf;
  font-family: 'Cormorant Garamond';
  font-weight: 700;
  font-size: 1em;
  margin: 0.25em;
  padding: 0.25em .5em;
  border: 2px solid #794acf;
  border-radius: 3px;
  background: papayawhip;
`;

const Input = styled.input`
  font-size: 1em;
  margin: 0.25em;
  padding: 0.25em .5em;
  color: ${props => props.inputColor || "#794acf"};
  background: papayawhip;
  border: 2px solid #794acf;
  border-radius: 3px;
  font-family: 'Cormorant Garamond';
  font-weight: 700;
`;


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

//   <a href="https://www.contentful.com/" rel="nofollow noreferrer" target="_blank">
//   <img src={contentfulLogo}
//   style={{width: "40%"}}
//   alt="Powered by Contentful"/>
// </a>

  render() {
    return (
      <div style={{ margin: '0 auto', maxWidth: 820, textAlign: "center" }}>
        <div className="flex">
          {/* <div className="w-1/2" style={{ margin: '0 auto' }}>   <div style={{ margin: '0 auto', maxWidth: 960}}>*/}
          <div className="flex w-1/2 object-contain"  >
            <Title>Social Media</Title>
            <A href="https://github.com/csmithchicago" title="GitHub" rel="nofollow noreferrer" target="_blank">
            <FontAwesomeIcon icon={faGithub} /> GitHub
            </A>
            <A href="https://medium.com/@corey_deon" title="Medium" rel="nofollow noreferrer" target="_blank">
              <FontAwesomeIcon icon={faMedium} /> Medium
            </A>
            <A href="https://linkedin.com/in/CoreyDeonSmith" title="LinkedIn" rel="nofollow noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </A>
          </div>
          <div className="flex w-1/2 object-contain" >
            <Title>Contact Me</Title>
            <form
            name="contact"
            method="post"
            action="/thank_you/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden className="flex-1">
                  <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={this.handleChange} />
                  </label>
              </div>

              <label>
                  <Input defaultValue="Name" type="text" name="name" onChange={this.handleChange}/>
              </label>
              <label>
                  <Input defaultValue="Your Email" type="email" name="email" onChange={this.handleChange}/>
              </label>
              <br/>
              <label>
                  <Text defaultValue="Message" name="message" onChange={this.handleChange} />
              </label>
              <br/>
              <label>
                  <Button type="submit">Send</Button>
              </label>
            </form>
          </div>
      </div>
    </div>
    );
  };
}

// style={{ minWidth:"100%", maxWidth:"100%", width: "100%" }}