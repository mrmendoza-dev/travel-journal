import './App.css';
import Nav from "./components/Nav"
import Card from "./components/Card";
import locations from "./data"


function App() {

  const cards = locations.map(location => {
    return (
    <Card
      key={location.id}
      location = {location}
    />
    )
  })


  return (
    <div className="App">
      <Nav />
      <div className="cards">
        {cards}
        </div>
    </div>
  );
}

export default App;
