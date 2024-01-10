import React from 'react';
import './App.css';
import Axios from 'axios';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import Country from './Country';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

interface CountryContinent {
  country: string;
  continent: string;
}
interface CountryLanguages {
  country: string;
  languages: string[];
}
interface Country {
  country: string;
  city: string;
}
interface CountryState {
  country: string;
  city: string;
  languages: string[];
}

type Continents = {
  [key: string]: CountryState[];
};

const gettingCountinentsData = async () => {
  const respContinents = await Axios.get<CountryContinent[]>(
    'https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-continent.json'
  );
  const respCountries = await Axios.get<Country[]>(
    'https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-capital-city.json'
  );
  const respCountriesLanguages = await Axios.get<CountryLanguages[]>(
    'https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-languages.json'
  );
  const continents: Continents = {};

  for (const data of respContinents.data) {
    const countryInfo = respCountries.data.find(
      country => data.country == country.country
    );
    const countryLangs = respCountriesLanguages.data.find(
      country => data.country == country.country
    );

    if (countryInfo && countryLangs) {
      if (continents?.[data.continent]) {
        continents?.[data.continent].push({
          ...countryInfo,
          languages: countryLangs?.languages
        });
      } else {
        continents[data.continent] = [
          { ...countryInfo, languages: countryLangs?.languages }
        ];
      }
    }
  }
  return continents;
};

function App() {
  const [continents, setContinents] = React.useState<Continents>({});

  React.useEffect(() => {
    // no catch i assume everything goes well
    gettingCountinentsData().then(data => setContinents(data));
  }, []);

  return (
    <div className='App'>
      <div className='content'>
        <Tabs
          aria-label='Vertical tabs'
          orientation='vertical'
          sx={{ minWidth: 300 }}
        >
          <TabList>
            {Object.entries(continents).map(([continent, countries]) => (
              <Tab value={continent}>{continent}</Tab>
            ))}
          </TabList>
          {Object.entries(continents).map(([continent, countries]) => (
            <TabPanel value={continent}>
              <Country countries={countries} />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default App;
