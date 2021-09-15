/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Powerful, yet simple',
    image: '/img/simple.svg',
    description: (
      <>
        Fat Arrow lets you leverage the solidity of functional programming principles with a tiny object-oriented API
        set
      </>
    ),
  },
  {
    title: 'TypeScript first',
    image: '/img/bug.svg',
    description: (
      <>
        Forget about run-time errors! Fat Arrow is type-safe in its core, and it lets you handle uncaught exceptions and
        undefined values at compile-time
      </>
    ),
  },
  {
    title: 'React & Jest friendly',
    image: '/img/react.svg',
    description: (
      <>
        Fat Arrow comes with some handy React hooks and Jest matchers to help you use it with your favorite tools
      </>
    ),
  },
]

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
