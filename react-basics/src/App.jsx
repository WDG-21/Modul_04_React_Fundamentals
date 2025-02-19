import Dynamic from './components/Dynamic';
import Footer from './components/Footer';
import Form from './components/Form';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className='app'>
      <h1>APP.JSX</h1>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Footer /> * */}

      {/* <Products
        title='Amazon Echo'
        description='Your AI Assistant'
        price='29,99'
      /> */}
      {/* <Products
        title='Amazon Kindl'
        description='you can read books and'
        price='70,00'
      /> */}

      <Dynamic />

      <Form />
    </div>
  );
}

export default App;
