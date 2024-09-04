import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingSSR = ({ serverData }) => {
  return (
    <Layout>
      <h1>Server-side Rendered Page</h1>
      <p>Here is a random image of a Shiba Inu:</p>
      {serverData.message ? (
        <img src={serverData.message} alt="A random Shiba Inu" style={{ maxWidth: "300px", borderRadius: "8px" }} />
      ) : (
        <p>No image available.</p>
      )}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Using SSR" />

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    const data = await res.json()
    return {
      props: data, // Assuming the API returns the image in a `message` property
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {
        error: error.message, // Adding error message for debugging purposes
      },
    }
  }
}