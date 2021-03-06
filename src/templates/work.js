import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

// import Layout from "../components/layout"

export const query = graphql`
  query($id: Int!) {
    strapiWork(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      image {
        publicURL
      }
    }
  }
`

const Work = ({ data }) => {
  const work = data.strapiWork
  console.log(work)
  return (
    <>
      <p>{work.title}</p>
      <ReactMarkdown source={work.content} />
    </>
    // <Layout>
    //   <div>
    //     <div
    //       id="banner"
    //       className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
    //       data-src={article.image.publicURL}
    //       data-srcset={article.image.publicURL}
    //       data-uk-img
    //     >
    //       <h1>{article.title}</h1>
    //     </div>

    //     <div className="uk-section">
    //       <div className="uk-container uk-container-small">
    //         <ReactMarkdown source={article.content} />
    //         <p>
    //           <Moment format="MMM Do YYYY">{article.published_at}</Moment>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </Layout>
  )
}

export default Work
