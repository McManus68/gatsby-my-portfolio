import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/utils/layout'
import SEO from '../components/utils/seo'
import { initIcons } from '../components/utils/fa'

import Intro from '../components/section/intro/intro'
import AboutMe from '../components/section/about-me/about-me'
import Experience from '../components/section/experience/experience'
import Education from '../components/section/education/education'
import Hobbies from '../components/section/hobbie/hobbies'
import Contact from '../components/section/contact/contact'

// Initialize Font Awesone icons
initIcons()

const IndexPage = ({ data }) => (
  <Layout header="home">
    <SEO
      title={data.contentfulAboutMe.designation}
      keywords={[`Rohit Gupta`, `Frontend Developer`, `Developer`]}
    />
    <Intro data={data.contentfulAboutMe}></Intro>
    <AboutMe data={data.contentfulAboutMe}></AboutMe>
    <Experience data={data.allContentfulExperiences.nodes}></Experience>
    <Hobbies data={data.allContentfulHobbies.nodes}></Hobbies>
    <Education data={data.allContentfulEducation.nodes}></Education>
    <Contact data={data.contentfulAboutMe}></Contact>
  </Layout>
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
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
