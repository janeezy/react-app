

const reactDescriptions = [ 'Fundamental', 'Crucial', 'Core' ];

import { CORE_CONCEPTS } from './data.js';

import Header from './components/Header.jsx';
















function App ()
{
  return (
    <div>
<Header/>
      <main>
        <section id='core-concepts'>
        <h2>Core concept</h2>
        <ul>
          <CoreConcept
            {...CORE_CONCEPTS[0]}

            />
            <CoreConcept
{...CORE_CONCEPTS[1]}
            />
            <CoreConcept
  {...CORE_CONCEPTS[2]}
            />
            <CoreConcept
{...CORE_CONCEPTS[3]}

            />
        </ul>
            </section>
      </main>

    </div>
  );
}

export default App;
