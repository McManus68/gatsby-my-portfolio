import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { ParallaxProvider } from 'react-scroll-parallax'

import Intro from '../components/intro/intro'
import AboutMe from '../components/about-me/about-me'
import Experiences from '../components/experience/experiences'
import Hobbies from '../components/hobbie/hobbies'
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
    allContentfulService {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
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
    allContentfulTestimonials {
      edges {
        node {
          name
          subTitle
          description {
            childMarkdownRemark {
              html
            }
          }
          avatarImage {
            fluid(maxWidth: 200) {
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
      }
    }
    allContentfulWorks {
      edges {
        node {
          siteName
          url
          image {
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
  }
`
