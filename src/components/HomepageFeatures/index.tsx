import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Hosted service',
    description: (
      <>
        Grab a no-cost Red Hat Developer Subscription and go to the <a href="https://console.redhat.com/insights/image-builder">Red Hat Hybrid Cloud Console</a> to bake your fresh image.
      </>
    ),
  },
  {
    title: 'Local package',
    description: (
      <>
        Install osbuild-composer, composer-cli on Fedora, CentOS Stream or RHEL and build your images locally.
      </>
    ),
  },
  {
    title: 'Container',
    description: (
      <>
        Use podman to turn your <a href="https://centos.github.io/centos-bootc/">bootc-enabled</a> container images into bootable artifacts!
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
