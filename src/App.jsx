import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';


const reatDescriptions = ['Fundermental','Crucial','Core'];

function getRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}


function Header(){
  const description = reatDescriptions[getRandomInt(2)];
   return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}
function CoreConcept(props){
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>{CoreConcept}</h2>
        <ul>
          <CoreConcept
            title={CORE_CONCEPTS[0].title }
            img={CORE_CONCEPTS[0].image}
            description={CORE_CONCEPTS[0].description}
          />
          <CoreConcept {...CORE_CONCEPTS[1]}
          />
          <CoreConcept {...CORE_CONCEPTS[2]}
          />
           <CoreConcept {...CORE_CONCEPTS[3]}
          />
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
