import renderContactCards from '../../functions/renderContactCards';
import './Home.css'

const Home = () => {
  return (
    <>
      <h1 style={{ margin: 0 }}>Contact List</h1>
      <div className="contact-list">
        { renderContactCards() }
      </div>
    </>
  );
}

export default Home;
