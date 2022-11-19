import { gql } from '@apollo/client'

const GET_PODCASTS = gql`
  query GET_PODCASTS {
    podcasts {
      nodes {
        title
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        content
        excerpt
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        podcastAcf {
          newEpisode
          listenOn {
            applePodcasts
            googlePodcasts
            spotify
          }
        }
        tags {
          nodes {
            name
          }
        }
        date
        slug
      }
    }
  }
`
const GET_POSTS = gql`
  query GET_POSTS {
    posts {
      nodes {
        postId
        slug
        author {
          node {
            name
          }
        }
        content
        excerpt
        categories {
          nodes {
            name
          }
        }
        date
        title
      }
    }
  }
`
const GET_TRENDING_EPISODE = gql`
  query GET_TRENDING_EPISODE {
    themeGeneralSettings {
      themeSettings {
        trendingEpisode {
          ... on Podcast {
            title
            excerpt
            podcastAcf {
              listenOn {
                applePodcasts
                googlePodcasts
                spotify
              }
            }
            podcastId
          }
        }
      }
    }
  }
`
const GET_MENU = gql`
  query GET_MENU {
    menus(where: { location: PRIMARY }) {
      nodes {
        menuItems {
          edges {
            node {
              path
              label
              connectedNode {
                node {
                  ... on Page {
                    isPostsPage
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
const GET_GALLERY = gql`
  query GET_GALLERY {
    themeGeneralSettings {
      themeSettings {
        gallery {
          sourceUrl
          altText
        }
      }
    }
  }
`
const GET_FOOTER_OPTIONS = gql`
  query GET_FOOTER_OPTIONS {
    acfOptionsFooter {
      footerOptions {
        footerLogo {
          altText
          sourceUrl
        }
        podcastsLinks {
          apple
          googlePodcasts
          spotify
        }
        siteDescription
        socialMediaLinks {
          facebook
          instagram
          linkedin
          skype
        }
        copyrightText
      }
    }
  }
`
const GET_HEADER_OPTIONS = gql`
  query GET_HEADER_OPTIONS {
    acfOptionsHeader {
      headerOptions {
        homebanneImage {
          altText
          sourceUrl
        }
        mainLogo {
          sourceUrl
        }
        signIn {
          signInUrl
          signInText
        }
        subscribeButton {
          subscribeLink
          subscribeText
        }
      }
    }
  }
`
const GET_GENERAL_OPTIOS = gql`
  query GET_GENERAL_OPTIOS {
    themeGeneralSettings {
      themeSettings {
        generalConfiguration {
          favicon {
            sourceUrl
          }
          siteDescription
          tagline
        }
        newsletter {
          newsletterContent
        }
      }
    }
  }
`

export {
  GET_PODCASTS,
  GET_POSTS,
  GET_TRENDING_EPISODE,
  GET_MENU,
  GET_GALLERY,
  GET_FOOTER_OPTIONS,
  GET_HEADER_OPTIONS,
  GET_GENERAL_OPTIOS,
}
