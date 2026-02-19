const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  const webstore = await cds.connect.to('metadata');

  const CUSTOM = new Set([
    'storeLocationName',
    'storeLocationCity',
    'storeLocationCountry'
  ]);

this.on('READ', 'Stores', async (req) => {
  try {
    const q = req.query.clone();
    // ... your select-strip code ...

    const data = await webstore.run(q);

    const rows = Array.isArray(data) ? data : [data];
    for (const s of rows) {
      const storeName = s.name || s.Name || s.storeName || s.StoreName;
      s.storeLocationName = storeName ? `${storeName} Location` : 'Default Location';
      s.storeLocationCity = 'Colombo';
      s.storeLocationCountry = 'Sri Lanka';
    }
    return Array.isArray(data) ? rows : rows[0];

  } catch (e) {
    console.error('READ Stores failed:', e);
    req.reject(500, e.message);
  }
});

  this.on('READ', 'StoreSettings', (req) => webstore.run(req.query));
  this.on('READ', 'CountryVH', (req) => webstore.run(req.query));
});



// const cds = require('@sap/cds');
 
// module.exports = cds.service.impl(async function () {
//   const webstore = await cds.connect.to('metadata');
 
//   this.on('READ', 'Stores', req => webstore.run(req.query));
//   this.on('READ', 'StoreSettings', req => webstore.run(req.query));
//   this.on('READ', 'CountryVH', req => webstore.run(req.query));
// });



