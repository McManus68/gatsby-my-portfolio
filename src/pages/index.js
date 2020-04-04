import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/utils/layout'
import SEO from '../components/utils/seo'
import { initIcons } from '../components/utils/fa'

import Factory from '../components/section/factory/factory'

// Initialize Font Awesone icons
initIcons()

const IndexPage = ({ data }) => (
  <Layout header="home">
    <SEO
      title={data.me.designation}
      keywords={[`Rohit Gupta`, `Frontend Developer`, `Developer`]}
    />

    {data.menu.nodes.map(function(item, key) {
      return <Factory component={item} data={data} key={key} />
    })}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query AboutQuery {
    me: contentfulAboutMe {
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
    blog: allContentfulBlogs(limit: 5) {
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
    menu: allContentfulMenu(sort: { order: ASC, fields: position }) {
      nodes {
        position
        name
        title
      }
    }
    experience: allContentfulExperiences(sort: { fields: [startYear], order: DESC }) {
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
    hobbie: allContentfulHobbies(sort: { order: ASC, fields: position }) {
      nodes {
        icon
        name
      }
    }
    education: allContentfulEducation(sort: { fields: [startYear], order: DESC }) {
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
