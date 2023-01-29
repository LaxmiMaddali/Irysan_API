Feature: Validating

  Scenario: Validating
  Given I call the punk api with beer id 192
  Then I expect a 200 status response
  Then The malt is 'Extra Pale'
  And The malt value is 5.3 and the unit is 'kilograms'