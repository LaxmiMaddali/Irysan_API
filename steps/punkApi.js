const {
    Given,
    When,
    Then,And
  } = require('cucumber');
  const axios = require('axios');
  var expect = require('expect');

  let get_response;

  Given('I call the punk api with beer id 192', async () => {
      get_response = await axios.get(`https://api.punkapi.com/v2/beers/192`)
  })

  Then('I expect a {int} status response', async function (status) {
   expect(get_response.status).toEqual(status);
  });

  Then('The malt is {string}', function (maltName) {
   expect(get_response.data[0].ingredients.malt[0].name).toEqual(maltName);
  })

  Then('The malt value is {float} and the unit is {string}', function (maltValue, maltUnit) {
    expect(get_response.data[0].ingredients.malt[0].amount.value).toEqual(maltValue);
    expect(get_response.data[0].ingredients.malt[0].amount.unit).toEqual(maltUnit);
  })