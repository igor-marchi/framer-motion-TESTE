import React from 'react';
import GlobalStyles from './styles/global';

import { Main, Section, Stick } from './styles';
import FirstAndSecond from './components/FirstAndSecond';
import Header from './components/Header';

function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  },[]);


  return (
    <div className="App">
      <>
        <GlobalStyles/>

        <Header />

        <Main style={{ height: '1610vh' }}>
          <Section style={{ height: '72.7%' }}>
            <FirstAndSecond />
          </Section>

          <Section style={{ height: '9.7%' }}>
            <Stick className="third" />
          </Section>

          <Section style={{ height: '10.1%' }}>
            <Stick className="fourth" />
          </Section>
        </Main>
      </>
    </div>
  );
}

export default App;
