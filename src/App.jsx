// Correct import statements
import { CORE_CONCEPTS } from './data.js'; // Assuming data.js is in the same directory as App.jsx
import CoreConcept from './components/CoreConcept.jsx'; // Corrected path for CoreConcept.jsx
import Header from './components/Header.jsx'; // Corrected path for Header.jsx

// Other JavaScript code can follow after the import statements
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];



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
