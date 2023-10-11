import axios from 'axios';
import xml2js from 'xml2js';

async function fetchAndParseXMLData() {
  try {
    const response = await axios.get('https://www.ilmateenistus.ee/ilma_andmed/xml/forecast.php');
    const xmlData = response.data;

    const parser = new xml2js.Parser();
    const jsonData = await parser.parseStringPromise(xmlData);

    return jsonData;
  } catch (error) {
    console.error('Error fetching or parsing XML data:', error);
  }
}
