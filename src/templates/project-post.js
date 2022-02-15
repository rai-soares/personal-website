import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import * as S from "../components/Post/styles"

const BlogPost = ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout>
            <Seo />
            <h1>Title: {post.frontmatter.title}</h1>
            <S.PostHeader>
                <S.PostDate>
                    {post.frontmatter.date} • {post.timeToRead} min de leitura
                </S.PostDate>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </S.MainContent>
        </Layout>
    )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`

export default BlogPost