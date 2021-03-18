import React, { useState } from 'react';
import Nav from './compenents/nav';
import About from './compenents/about';
import Gallery from './compenents/gallery';
import ContactForm from './compenents/Contact';

function App() {
  // false means to prevent the contact form from showing when a user initially navigates to the homepage.
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
       categories={categories}
       setCurrentCategory={setCurrentCategory}
       currentCategory={currentCategory}
       contactSelected={contactSelected}
       setContactSelected={setContactSelected}
      ></Nav>
      <main>
      {!contactSelected ? (
          // shorthand for <React.Fragment></React.Fragment>.
            <>
              <Gallery currentCategory={currentCategory}></Gallery>
              <About></About>
            </>
          ) : (
              <ContactForm></ContactForm>
            )}
      </main>
    </div>
  );
}

export default App;