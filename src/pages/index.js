import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { ParallaxProvider } from 'react-scroll-parallax'

import Intro from '../components/intro/intro'
import AboutMe from '../components/about-me/about-me'
import Experiences from '../components/experience/experiences'
import Educations from '../components/education/educations'
import Hobbies from '../components/hobbie/hobbies'
import Contact from '../components/contact/contact'

import { initIcons } from '../components/fa'

// Initialize Font Awesone icons
initIcons()

const IndexPage = ({ data }) => (
  <ParallaxProvider>
    <Layout header="home">
      <SEO
        title={data.contentfulAboutMe.designation}
        keywords={[`Rohit Gupta`, `Frontend Developer`, `Developer`]}
      />
      <Intro data={data.contentfulAboutMe}></Intro>
      <AboutMe data={data.contentfulAboutMe}></AboutMe>
      <Experiences data={data.allContentfulExperiences.nodes}></Experiences>
      <Hobbies data={data.allContentfulHobbies.nodes}></Hobbies>
      <Educations data={data.allContentfulEducation.nodes}></Educations>
      <Contact data={data.contentfulAboutMe}></Contact>
    </Layout>
  </ParallaxProvider>
)

export default IndexPage

export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutMe {
      name
      photo {
        file {
          url
        }
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      designation
      age
      facebook
      github
      gmail
      id
      instagram
      linkdin
      twitter
      location
      descriptionTitle
      description {
        childMarkdownRemark {
          html
        }
      }
      bannerImage {
        fluid(maxWidth: 1500) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      bannerList
    }
    allContentfulBlogs(limit: 5) {
      edges {
        node {
          title
          slug
          featureImage {
            fluid(maxWidth: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          createdAt
        }
      }
    }
    contentfulPhotos {
      photos {
        fluid(maxWidth: 600) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
    contentfulSiteInformation {
      menus
    }
    allContentfulExperiences(sort: { fields: [startYear], order: DESC }) {
      nodes {
        id
        startYear
        title
        period
        icon
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulHobbies(sort: { order: ASC, fields: position }) {
      nodes {
        icon
        name
      }
    }
    allContentfulEducation(sort: { fields: [startYear], order: DESC }) {
      nodes {
        id
        startYear
        title
        period
        icon
        description
      }
    }
  }
`
