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
  const themesCount = 2
  let [locale, setLocale] = useState('en')
  let [theme, setTheme] = useState(1)

  let localeData = {
    menu: data.menu.nodes.filter(isCurrentLocale),
    experience: data.experience.nodes.filter(isCurrentLocale),
    education: data.education.nodes.filter(isCurrentLocale),
    interest: data.interest.nodes.filter(isCurrentLocale),
    me: data.me.nodes.find(isCurrentLocale),
    site: data.site.nodes.find(isCurrentLocale),
    skill: data.skill.nodes,
  }

  function isCurrentLocale(item) {
    return item.node_locale === locale
  }

  function switchLang(locale) {
    i18n.changeLanguage(locale)
    setLocale(locale)
  }

  function switchTheme() {
    theme < themesCount ? setTheme(theme + 1) : setTheme(1)
  }

  return (
    <main className={'theme-' + theme}>
      <SEO title={localeData.site.name} />
      <Navigation
        menu={localeData.menu}
        locale={locale}
        switchLang={switchLang}
        switchTheme={switchTheme}
      />
      {localeData.menu.map(function(item, key) {
        return (
          <Factory
            component={item}
            data={localeData}
            key={key}
            bg={key % 2 !== 0 ? 'bg1' : 'bg2'}
          />
        )
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
          fluid {
            src
          }
          title
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
      }
    }
    skill: allContentfulSkills(filter: { node_locale: { eq: "en" } }) {
      nodes {
        level
        name
        type
        node_locale
        logo {
          fluid {
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
        twitterUsername
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
