import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import GyozaLogo from '../GyozaLogo';

const FeatureList = [
  {
    title: <Translate id="feature.redeemable.title">Redeemable</Translate>,
    logoColor: '#3B82F6', // blue
    description: (
      <>
        <Translate id="feature.redeemable.desc">Each stablecoin issued by Gyoza is redeemable for $1 of collateral in the system.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="feature.decentralized.title">Decentralized</Translate>,
    logoColor: '#10B981', // green
    description: (
      <>
        <Translate id="feature.decentralized.desc">gyUSD is fully decentralized with immutable smart contracts and no admin keys.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="feature.sustainable.title">Sustainable</Translate>,
    logoColor: '#EF4444', // red
    description: (
      <>
        <Translate id="feature.sustainable.desc">gyUSD yield is sustainable and comes from multiple sources. 100% of protocol revenue is directed towards users.</Translate>
      </>
    ),
  },
];

function Feature({logoColor, title, description}) {
  return (
    <div className={clsx('col col--4')} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className={styles.featureSvg}>
          <GyozaLogo color={logoColor} />
        </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
