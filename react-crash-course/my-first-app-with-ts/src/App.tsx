import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from './components/HelloWorld3';
const App: React.FC = () => {
  return (
    <div>
      <HelloWorld />
      <HelloWorld2 name="Olumide"/>
      <HelloWorld3 name="Demilade"/>
    </div>
  );
}
export default App;
