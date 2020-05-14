import React from "react"
import { Link } from "gatsby"
import {graphql} from "gatsby"
import Layout from "../components/layout"

export default ({data}) =>
<Layout>
    <h1>Hello world!</h1>
    <h5>{data.allMarkdownRemark.totalCount} Posts Till Now - </h5>

    {data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
            <Link to={node.fields.slug} style={{textDecoration:"none"}}>
            <h3>{node.frontmatter.title}{" "}
                <span className={"postDate"}>
                    — {node.frontmatter.date}
                </span>
            </h3>
            </Link>

            <p>{node.excerpt}</p>
        </div>
        ))}

</Layout>

export const query = graphql`
    query MyQuery {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC    }) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
}
`;