import React, { FC } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'

const HomepageHeader: FC = () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>Fat Arrow</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quick-start">
            Fat Arrow Quick Start - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  )
}

export default (): JSX.Element => (
  <Layout
    title={`Home`}
    description='Description will go into a meta tag in <head />'>
    <HomepageHeader />
    <main>
      <HomepageFeatures />
    </main>
  </Layout>
)
