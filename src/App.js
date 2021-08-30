import './App.css';
import { Template3 } from './components/LogoLink/stories';
import { Template } from './components/MenuLink/stories';
import { Template2 } from './components/NavLinks/stories';
import { Template5 } from './components/SectionBackground/stories';
import { Template6 } from './components/Menu/stories';
import { Template7 } from './components/GridTwoColumn/stories';
import { Template8 } from './components/GridContent/stories';
import { Template9 } from './components/GridText/stories';
import { Template10 } from './components/GridImage/stories';
import { Template11 } from './components/Footer/stories';
import { Template12 } from './templates/Base/stories';
import { useEffect, useState } from 'react';
import { mapData } from './api/map-data';
import { PageNotFound } from './templates/PageNotFound';
import { Loading } from './templates/Loading';
import { Base } from './templates/Base';
import { Load } from './templates/Loading/stories';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/pages/?slug=landing-page',
        );
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };
    load();
  }, []);

  if (data == undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Load />;
  }

  return (
    <div>
      <Template12 />
    </div>
  );
}

export default App;
