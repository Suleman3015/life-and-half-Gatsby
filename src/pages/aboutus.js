import React from 'react'
import Layout from "../template/Layout"
import Header from '../components/about/header'
import Ourstory from '../components/about/ourstory'
import Ourvalues from '../components/about/ourvalues'
import Teamprofile from '../components/about/teamprofile'
export default function AboutUs() {
    return (
        <Layout>
            <Header />
            <Ourstory />
            <Ourvalues />
            <Teamprofile />

        </Layout>

    )
}