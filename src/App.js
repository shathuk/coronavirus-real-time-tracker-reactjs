import React, { useState, useEffect } from 'react';
import countries from 'countries-names';
import Spinner from './components/Spinner';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

const names = countries.names();
console.log(names);

const App = () => {
  const [country, setCountry] = useState('Sri Lanka');
  const [cases, setCases] = useState([]);

  useEffect(() => {
    var url = `https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=(Confirmed > 0) AND (Country_Region='${country}')&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths desc,Country_Region asc,Province_State asc&outSR=102100&resultOffset=0&resultRecordCount=250&cacheHint=true`;
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setCases(data.features);
        console.log(data.features);
      });
  });

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <NavBar />
      <div className='container'>
        <div class='input-field col s12'>
          <select
            value={country}
            onChange={event => {
              setCountry(event.target.value);
            }}
          >
            {names.map(country => (
              <option value={country} key={country}>
                {country}
              </option>
            ))}
          </select>
          <label>Select Your Country</label>
        </div>
        <Spinner />

        {cases.map((cases, index) => (
          <div class='col s12 m7'>
            <h4 class='header'>Country: {cases.attributes.Country_Region}</h4>
            <h4 class='header'>
              Province: {cases.attributes.Province_State || 'All Over Country'}
            </h4>
            <div class='card horizontal'>
              <div class='card-stacked'>
                <div class='card-content'>
                  <h5>Last update: {Date(cases.attributes.Last_Update)}</h5>
                </div>
                <div class='card-action orange'>
                  <h5>Confirmed: {cases.attributes.Confirmed}</h5>
                </div>
                <div class='card-action green'>
                  <h5>Recovered: {cases.attributes.Recovered}</h5>
                </div>
                <div class='card-action red'>
                  <h5>Deaths: {cases.attributes.Deaths}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />>
    </div>
  );
};

export default App;
