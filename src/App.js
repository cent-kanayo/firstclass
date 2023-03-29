import Article from './Article';
import Image from './Image';
import local from './images/coke.png';
function App() {
  return (
    <div>
      <section>
        <Image image="https://pixels.com/images/overview/homeDecor/coffeeMugs001.jpg" />
        <Image image={local} />
      </section>
      <h1>Airbnb mini clone</h1>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '40px',
        }}
      >
        <Article
          title="Apartment In Lagos"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
            fugiat!"
          rooms="2 rooms"
          price="#30,000"
          image="https://pixels.com/images/overview/apparel/mensTshirts002.jpg"
        />
        <Article
          title="Apartment In Abuja"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
            fugiat!"
          rooms="5 rooms"
          price="#140,000"
          image="https://pixels.com/images/overview/apparel/mensTshirts002.jpg"
        />
        <Article
          title="Apartment In Port-Harcourt"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
            fugiat!"
          rooms="8 rooms"
          price="#240,000"
          image="https://pixels.com/images/overview/apparel/tankTops001.jpg"
        />
        <Article
          title="Apartment In Owerri"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
            fugiat!"
          rooms="2 rooms"
          price="#60,000"
          image="https://pixels.com/images/homepage/ourProductsAcrylic002.jpg"
        />
      </section>
    </div>
  );
}

export default App;
