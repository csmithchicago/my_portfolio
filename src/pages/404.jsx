import React from "react";
import { Link, graphql , StaticQuery} from "gatsby";
import { css } from "@emotion/core"
import styled  from 'styled-components'
import tw from 'tailwind.macro'


// Components
import BlogLayout from '../components/BlogLayout'
import {Footer, BigTitle, Par, StyledDiv, StyledBackgroundImage} from '../templates/blog-post'



export default () => (
    // <p>Thanks For Stopping By!</p>

    <BlogLayout>
  <StyledDiv>
    <h3 style={{textAlign: "center",
                fontFamily: 'Cormorant Garamond', fontWeight: "700"
                }}
    >
      This Page Does Not Exist
    </h3>
    </StyledDiv>
    </BlogLayout>
);



