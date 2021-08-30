import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      //as chaves que vai pegar de data [{}]
      footer_text: footerHtml = '', //in case of caliing with no data so it wont return undefined
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;

    return {
      //return do map
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};

const dados = require('./dados.json');
console.log(mapData(dados));
