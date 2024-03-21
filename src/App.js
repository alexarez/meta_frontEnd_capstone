import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import greekSalad from './assets/greek salad.jpg';
import bruchetta from './assets/bruchetta.jpg';
import lemonDessert from './assets/lemon dessert.jpg';
import avatar1 from './assets/avatar1.jpg';
import avatar2 from './assets/avatar2.jpg';
import avatar3 from './assets/avatar3.jpg';
import avatar4 from './assets/avatar4.jpg';
import star4 from './assets/star4.svg';
import star5 from './assets/star5.svg';

const dishes = [
  {
    image: greekSalad,
    title: 'Greek salad',
    cost: '12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
  },
  {
    image: bruchetta,
    title: 'Bruchetta',
    cost: '5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
  },
  {
    image: lemonDessert,
    title: 'Lemon Dessert',
    cost: '5.00',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
  },
];

const testimonials = [
  {
    rating: star5,
    avatar: avatar1,
    name: 'Kathleen Price',
    review: 'Best experience ever! The food was cooked to perfection.'
  },
  {
    rating: star4,
    avatar: avatar2,
    name: 'Mathew Jacobs',
    review: 'It was much better than I expected. I was happy to see how clean everything was.'
  },
  {
    rating: star5,
    avatar: avatar3,
    name: 'Mark Richards',
    review: 'It was much better than I expected. I was happy to see how clean everything was.'
  },
  {
    rating: star5,
    avatar: avatar4,
    name: 'Stephanie Carr',
    review: 'Delectable flavors, impeccable service, a culinary experience worth savoring again.'
  },
];

function App() {
  return (
    <>
      <Header />
      <Main dishes={dishes} testimonials={testimonials} />
      <Footer />
    </>
  );
}

export default App;