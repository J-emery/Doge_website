import './App.css';
import PictureHolder from './Containers/PictureHolder';
import Header from './Containers/Header';
import Footer from './Containers/Footer'

function App() {
  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Header></Header>
          <PictureHolder></PictureHolder>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
