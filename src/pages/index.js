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
  const getLocalizedData = function () {
    const isLocale = (item) => item.node_locale === locale
    return {
      menu: data.menu.nodes.filter(isLocale),
      experience: data.experience.nodes.filter(isLocale),
      education: data.education.nodes.filter(isLocale),
      interest: data.interest.nodes.filter(isLocale),
      me: data.me.nodes.find(isLocale),
      site: data.site.nodes.find(isLocale),
      skill: data.skill.nodes,
    }
  }

  let localeData = getLocalizedData()

  const switchLang = function (newLocale) {
    if (newLocale !== locale) {
      i18n.changeLanguage(newLocale)
      setLocale(newLocale)
    }
  }

  const switchTheme = function () {
    theme < themesCount ? setTheme(theme + 1) : setTheme(1)
  }

  return (
    <main className={'theme-' + theme}>
      <SEO title={localeData.site.title} />
      <Navigation
        menu={localeData.menu}
        locale={locale}
        switchLang={switchLang}
        switchTheme={switchTheme}
      />
      {localeData.menu.map(function (item, key) {
        return <Factory component={item} data={localeData} key={key} />
      })}
      <Footer me={localeData.me} site={localeData.site} />
    </main>
  )
}

export default IndexPage

export const pageQuery = graphql`
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
  }
`
