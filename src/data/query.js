import { graphql } from 'gatsby'

export const contenful = graphql`
  query AboutQuery {
    me: allContentfulAboutMe {
      nodes {
        name
        node_locale
        photo {
          fixed(width: 200, height: 200, quality: 100) {
            src
          }
          title
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
          fluid(maxWidth: 2000) {
            src
          }
        }
        bannerList
      }
    }
    menu: allContentfulMenu(sort: { order: ASC, fields: position }) {
      nodes {
        position
        node_locale
        name
        title
        node_locale
      }
    }
    experience: allContentfulExperiences(sort: { fields: [startYear], order: DESC }) {
      nodes {
        id
        node_locale
        startYear
        title
        period
        icon
        image {
          file {
            url
          }
          fixed(width: 120) {
            src
          }
          title
        }
        country {
          name
          icon {
            title
            file {
              url
            }
          }
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    interest: allContentfulInterests(sort: { order: ASC, fields: position }) {
      nodes {
        icon
        name
        node_locale
      }
    }
    education: allContentfulEducation(sort: { fields: [startYear], order: DESC }) {
      nodes {
        node_locale
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
        country {
          name
          icon {
            title
            file {
              url
            }
          }
        }
      }
    }
    skill: allContentfulSkills(filter: { node_locale: { eq: "en" } }) {
      nodes {
        level
        name
        type
        node_locale
        logo {
          fixed(width: 32, height: 32, quality: 100) {
            src
          }
          title
        }
        category {
          name
          id
          code
          root
          category {
            code
            name
            root
            category {
              code
              name
              root
            }
          }
        }
      }
    }
    site: allContentfulSite {
      nodes {
        node_locale
        title
        url
        description
        image {
          fluid {
            src
          }
        }
      }
    }
    skillCategory: allContentfulSkillCategory {
      nodes {
        name
        node_locale
        code
        root
        category {
          code
          name
          root
          category {
            code
            name
            root
          }
        }
      }
    }
  }
`
