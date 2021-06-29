import React from "react"
import Hero from "../components/home/hero-section"
import Layout from "../template/Layout"
import MiddleContent from "../components/home/MiddleContent"
import Qoute from "../components/home/Qoute"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <MiddleContent />
      <Qoute />
    </Layout>
  )
}
