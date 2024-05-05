import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import HomePage from './customer/Pages/Homepage/HomePage';
import footer from './customer/components/footer/footer.jsx'
function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <HomePage/>
      </div>
      <footer/>
    </div>
  );
}

export default App;
