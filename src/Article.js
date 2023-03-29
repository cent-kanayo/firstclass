import Image from './Image';

const Article = (banana) => (
  <article>
    <Image image={banana.image} />
    <h4>{banana.title}</h4>
    <p>{banana.desc}</p>
    <p>{banana.rooms}</p>
    <p>{banana.price}</p>
  </article>
);

export default Article;
