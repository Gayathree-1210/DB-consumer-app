using { metadata } from './external/webstore';

@impl: 'srv/consumer-service.js'
service ConsumerService @(path: 'ConsumerService') {

  entity Stores as projection on metadata.Stores {
    *,
    null as storeLocationName    : String,
    null as storeLocationCity    : String,
    null as storeLocationCountry : String
  };

  entity StoreSettings as projection on metadata.StoreSettings;
  entity CountryVH as projection on metadata.CountryVH;
}




// using { metadata } from './external/webstore';

// @impl: '/srv/consumer-service.js'
// @requires: 'Viewer'

// service ConsumerService @(path: 'ConsumerService') {

//   entity Stores as projection on metadata.Stores;
//   entity StoreSettings as projection on metadata.StoreSettings;
//   entity CountryVH as projection on metadata.CountryVH;

// }

