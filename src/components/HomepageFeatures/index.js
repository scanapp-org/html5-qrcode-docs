import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Feature packed',
    Svg: require('@site/static/img/Wavy_Tech-30_Single-02-ai.svg').default,
    description: (
      <>
        Allows scanning QR Code as well as different types of bar codes. You can scan directly using the webcam or inbuilt camera or scan images on your device.
      </>
    ),
  },
  {
    title: 'Cross platform support',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Works on all platforms like Android, iOS, Windows or Mac. Works across browsers like Chrome, Firefox, Edge, Safari, etc - <a href="">Read more about support.</a>
      </>
    ),
  },
  {
    title: 'Ready for all kind of use cases',
    Svg: require('@site/static/img/19362653-ai.svg').default,
    description: (
      <>
        Package comes with end to end UI library - <code> Html5QrcodeScanner</code> as well as a low level library to build your own UI - <code>Html5Qrcode</code>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
