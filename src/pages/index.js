import React, { useState } from 'react'
import { graphql } from 'gatsby'

import '../styles/index.scss'
import '../components/utils/i18n'
import '../components/utils/fa'

import SEO from '../components/utils/seo'
import Factory from '../components/section/factory/factory'
import Footer from '../components/section/footer/footer'
import Navigation from '../components/ui/navigation/navigation'

import { useTranslation } from 'react-i18next'
import LocalePicker from '../components/ui/locale-picker/locale-picker'

const IndexPage = ({ data }) => {
  const { i18n } = useTranslation()

  let [locale, setLocale] = useState('en')

  let localeData = {
    menu: data.menu.nodes.filter(isCurrentLocale),
    experience: data.experience.nodes.filter(isCurrentLocale),
    education: data.education.nodes.filter(isCurrentLocale),
    hobbie: data.hobbie.nodes.filter(isCurrentLocale),
    me: data.me.nodes.find(isCurrentLocale),
  }

  function isCurrentLocale(item) {
    return item.node_locale === locale
  }

  function switchLang(locale) {
    i18n.changeLanguage(locale)
    setLocale(locale)
  }

  return (
    <div>
      <LocalePicker locale={locale} callback={switchLang} />
      <SEO
        title={localeData.me.designation}
        keywords={[`Rohit Gupta`, `Frontend Developer`, `Developer`]}
      />
      <Navigation menu={localeData.menu} />

      {localeData.menu.map(function(item, key) {
        return <Factory component={item} data={localeData} key={key} />
      })}
      <Footer siteName={data.site.siteName} />
    </div>
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
    site: contentfulSite {
      siteName
      siteDescription
      logo {
        file {
          url
        }
      }
    }
  }
`
