import './App.css';
import { useEffect, useState } from 'react';
import { mapData } from './api/map-data';
import { PageNotFound } from './templates/PageNotFound';
import { Base } from './templates/Base';
import { Load } from './templates/Loading/stories';
import { GridTwoColumn } from './components/GridTwoColumn';
import { GridContent } from './components/GridContent';
import { GridText } from './components/GridText';
import { GridImage } from './components/GridImage';
import { useLocation } from 'react-router-dom';
import config from './config';

function App() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : config.defaultSlug;

    const load = async () => {
      try {
        const data = await fetch(config.url + slug);
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };
    load();
  }, [location.pathname]);

  useEffect(() => {
    if (data == undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data == undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Load />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <div>
      <Base
        links={links}
        footerHtml={footerHtml}
        logoData={{ text, link, srcImg }}
      >
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}-${index}`;
          if (component === 'section.section-two-columns') {
            return <GridTwoColumn key={key} {...section} />;
          }
          if (component === 'section.section-content') {
            return <GridContent key={key} {...section} />;
          }
          if (component === 'section.section-grid-text') {
            return <GridText key={key} {...section} />;
          }
          if (component === 'section.section-grid-image') {
            return <GridImage key={key} {...section} />;
          }
        })}
      </Base>
    </div>
  );
}

export default App;
