import reactLogoUrl from '@/assets/images/react.svg';
import webpackLogoUrl from '@/assets/images/webpack.svg';
import eslintLogo from '@/assets/images/eslint.svg';
import babelLogo from '@/assets/images/babel.svg';
import styles from './app.module.css';

export const App = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.header}>React Project Template</h1>
      <div className={styles.logos}>
        <div className={styles['logo-wrapper']}>
          <img className={styles.logo} src={webpackLogoUrl} alt="Webpack logo" />
        </div>
        <div className={styles['logo-wrapper']}>
          <img className={styles.logo} src={babelLogo} alt="Babel logo" />
        </div>
        <div className={styles['logo-wrapper']}>
          <img className={styles.logo} src={eslintLogo} alt="Eslint logo" />
        </div>
        <div className={styles['logo-wrapper']}>
          <img
            className={`${styles.logo} ${styles['logo-spin']}`}
            src={reactLogoUrl}
            alt="React logo"
          />
        </div>
      </div>
      {/* eslint-disable-next-line max-len */}
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illo repudiandae vitae
        sequi deleniti vero corporis sint, asperiores quibusdam consectetur, praesentium maxime at
        nisi dolores officia optio nesciunt tenetur deserunt. Doloremque quia temporibus natus
        doloribus quis saepe consequuntur aut provident! Atque, quam. Autem maxime repellat,
        voluptas culpa aspernatur sed et corrupti doloribus hic, facilis dicta id rem perspiciatis
        consequuntur nihil magni qui magnam debitis earum? Dolore repellendus molestias quis porro
        laboriosam. Repellendus quis, ab suscipit esse velit eligendi quo perspiciatis eveniet saepe
        placeat atque eaque deleniti vel odio est, adipisci blanditiis modi nemo corrupti nihil
        amet, ut facilis earum repudiandae?
      </p>
    </main>
  );
};
