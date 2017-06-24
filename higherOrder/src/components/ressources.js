import React from 'react';

export default () => {
  return (
    <div>
      secret special content here
    </div>
  );
};

/*
  different approach to include HOC would be this

import React from 'react';
import Authentication from './require_auth';

const Ressources = () => {
  return (
    <div>
      secret special content here
    </div>
  );
};
export default requireAUTH(Ressources);

//instead of doing it in index.js and wrap the routes component there
*/
