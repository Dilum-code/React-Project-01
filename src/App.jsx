import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';



function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>CoreConcept</h2>
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
        <section>
          <h2>Examples</h2>
          <menu>
            {/* <TabButton>Components</TabButton> */}
            <TabButton label='Components'></TabButton>
            <TabButton label='JSX'></TabButton>
            <TabButton label='Props'></TabButton>  
            <TabButton label='State'></TabButton>


          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;
