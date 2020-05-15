import React from 'react';
import Layout from "../components/layout"
import Img from "gatsby-image"
import {graphql} from "gatsby";

export default function About( {data} ){
    return(
        <Layout>
            <h1>About Page</h1>
            <Img className={"image"} fixed={data.file.childImageSharp.fixed} alt={"some image"}/>
            <p style={{textAlign:"justify"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis hendrerit mauris et luctus. Nam dapibus risus id lectus sollicitudin tincidunt ut id ligula. Morbi auctor justo at malesuada porta. Mauris ut enim suscipit, imperdiet sapien eu, pulvinar arcu. Nulla lorem sapien, lacinia cursus pretium vitae, fermentum non lorem. Sed dignissim fringilla lectus eu fermentum. Donec imperdiet massa nec dui malesuada dignissim.
            </p>
            <p style={{textAlign:"justify"}}>
                Suspendisse non varius felis, eget ultrices sapien. Nulla ex dui, sollicitudin sed aliquet vel, vehicula nec nibh. Suspendisse non fringilla nunc. Sed erat sem, cursus sit amet ultricies ut, luctus sed ipsum. Sed cursus ullamcorper urna nec suscipit. Integer quis odio et nisl cursus aliquet nec ac nibh. Curabitur feugiat turpis ac libero dapibus vestibulum. Sed leo nisi, tincidunt sit amet bibendum eget, pellentesque ac ipsum. Phasellus vitae accumsan quam. Sed ut molestie erat.
            </p>
        </Layout>
    )
};

export const query = graphql`
  query {
    file(relativePath: { eq: "images/image1.jpeg" }) {
      childImageSharp {
        fixed(width: 610, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }

`;