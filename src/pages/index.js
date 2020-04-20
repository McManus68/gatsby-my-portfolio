import React, { useState } from 'react'
import { graphql } from 'gatsby'

import '../styles/main.scss'

import '../components/utils/i18n'
import '../components/utils/fa'

import SEO from '../components/utils/seo'
import Factory from '../components/section/factory/factory'
import Footer from '../components/section/footer/footer'
import Navigation from '../components/ui/navigation/navigation'

import { useTranslation } from 'react-i18next'

const IndexPage = ({ data }) => {
  const { i18n } = useTranslation()
  const themesCount = 4
  const [locale, setLocale] = useState(i18n.language.substr(0, 2))
  const [theme, setTheme] = useState(1)

  /**
  Initiliaze data from current language
   */
  const getLocalizedData = () => {
    const isLocale = (item) => item.node_locale === locale
    return {
      menus: data.menus.nodes.filter(isLocale),
      experiences: data.experiences.nodes.filter(isLocale),
      educations: data.educations.nodes.filter(isLocale),
      interests: data.interests.nodes.filter(isLocale),
      me: data.me.nodes.find(isLocale),
      site: data.site.nodes.find(isLocale),
      skills: data.skills.nodes,
      categories: data.categories.nodes,
    }
  }

  let localeData = getLocalizedData()

  const switchLang = (newLocale) => {
    if (newLocale !== locale) {
      i18n.changeLanguage(newLocale)
      setLocale(newLocale)
    }
  }

  const switchTheme = () => {
    theme < themesCount ? setTheme(theme + 1) : setTheme(1)
  }

  return (
    <main className={'theme-' + theme}>
      <SEO title={localeData.site.title} />
      <Navigation
        menus={localeData.menus}
        locale={locale}
        switchLang={switchLang}
        switchTheme={switchTheme}
      />
      {localeData.menus.map(function (item, key) {
        return <Factory component={item} data={localeData} key={key} />
      })}
      <Footer me={localeData.me} site={localeData.site} />
    </main>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query contentfulQuery {
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
    menus: allContentfulMenu(sort: { order: ASC, fields: position }) {
      nodes {
        position
        node_locale
        name
        title
      }
    }
    experiences: allContentfulExperiences(sort: { fields: [startYear], order: DESC }) {
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
    interests: allContentfulInterests(sort: { order: ASC, fields: position }) {
      nodes {
        icon
        name
        node_locale
      }
    }
    educations: allContentfulEducation(sort: { fields: [startYear], order: DESC }) {
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
    skills: allContentfulSkills(
      sort: { fields: level, order: DESC }
      filter: { node_locale: { eq: "en" } }
    ) {
      nodes {
        level
        name
        node_locale
        logo {
          fixed(width: 64, height: 64, quality: 100) {
            src
          }
          title
        }
        category {
          name
          id
          code
          root
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
    categories: allContentfulSkillCategory(
      sort: { fields: order, order: ASC }
      filter: { node_locale: { eq: "en" } }
    ) {
      nodes {
        name
        order
        code
        root
      }
    }
  }
`
