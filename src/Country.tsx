import React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Input from '@mui/joy/Input';

import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

interface CountryProp {
  country: string;
  city: string;
  languages: string[];
}

interface CountryProps {
  countries: CountryProp[];
}

const Country: React.FC<CountryProps> = props => {
  const [searchText, setSearchText] = React.useState<string>('');

  const filteredResults = React.useMemo(() => {
    if (searchText) {
      return props.countries.filter(
        coun =>
          coun.city
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
          coun.country
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase())
      );
    }
    return props.countries;
  }, [searchText, props.countries]);

  return (
    <div>
      <Input
        placeholder='Search....'
        onChange={event => setSearchText(event.target.value)}
      />
      <AccordionGroup sx={{ maxWidth: 800 }}>
        {filteredResults.map(country => (
          <Accordion>
            <AccordionSummary>{country.country}</AccordionSummary>
            <AccordionDetails>
              City: {country.city}
              <br />
              Languages: {country.languages.join(', ')}
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionGroup>
    </div>
  );
};

export default Country;
