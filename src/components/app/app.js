import './app.scss';
import LogoCard from 'components/logo-card/logo-card';

const TYPE_NAMES = ['webpack', 'babel', 'react', 'eslint'];

const App = () => {
  return (
    <div className="container">
      <h1 className="app-title">Webpack React&nbsp;Starter Template</h1>
      <div className="logo-cards-wrapper">
        {
          TYPE_NAMES.map((name, index) => {
            return (
              <LogoCard
                key={index}
                type={name}
              />
            );
          })
        }
      </div>
      <p className="app-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illo repudiandae vitae sequi deleniti vero corporis sint, asperiores quibusdam consectetur, praesentium maxime at nisi dolores officia optio nesciunt tenetur deserunt. Doloremque quia temporibus natus doloribus quis saepe consequuntur aut provident! Atque, quam. Autem maxime repellat, voluptas culpa aspernatur sed et corrupti doloribus hic, facilis dicta id rem perspiciatis consequuntur nihil magni qui magnam debitis earum? Dolore repellendus molestias quis porro laboriosam. Repellendus quis, ab suscipit esse velit eligendi quo perspiciatis eveniet saepe placeat atque eaque deleniti vel odio est, adipisci blanditiis modi nemo corrupti nihil amet, ut facilis earum repudiandae?</p>
    </div>
  );
};

export default App;
