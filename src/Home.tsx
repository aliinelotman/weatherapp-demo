import React from 'react';
import DataTable from './Data';
import ilmLogo from './assets/day-cloud-rainbow-icon.png'


function Home() {
  return (
    <div>
      <div>
        <a href="https://www.ilmateenistus.ee/ilm/prognoosid/4-oopaeva-prognoos/" target="_blank">
          <img src={ilmLogo} className="logo ilm" alt="Ilm logo" />
        </a>
      </div>
      <h1>Ilm Eestis praegu</h1>
      <div className="App">
      <DataTable />
    </div>
    </div>
  );
}

export default Home;