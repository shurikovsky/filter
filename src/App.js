import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

//const [state, setCount] = useState(0);
const photoElements = [{
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
  category: "Flayers"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
  category: "Flayers"
}];

function App() {
  const [selected, onSelectFilter] = useState('All');
 const Portfolio = {
  filters: ['All', 'Websites', "Flayers", "Business Cards"],
  selected: 'All',
  projects: photoElements.filter((value) => {value.category === this.selected}),
  onSelectFilter: (filter) => {
    this.selected = filter;
}
 // const onSelectFilter = (filter) => {
 //   this.selected = filter;
  }
 // const [filter, onSelectFilter] = useState('All');
  return (
    <div class='container'>
      <Toolbar filters={Portfolio.filters} selected={Portfolio.selected} onSelectFilter={Portfolio.onSelectFilter}/>
      <div class='photos'>
        <ProjectList {... Portfolio.projects}/>
      </div>
    </div>
  );
}

export default App;
