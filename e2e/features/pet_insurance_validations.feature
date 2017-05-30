Feature: Pet Insurance Test
  As a user
  I can check validations and verify the results
  
  @desktop @mobile 
  Scenario: Get pet insurance quotes
    When I navigate to 'home' page and see 'logo' or 'logoMobile' is visible
    And I choose 'insuranceType' as 'Pet Insurance'
    Then I should be taken to 'pet-insurance' page and see 'logo' is visible
    And I click on 'getQuote' button
    Then I should be taken to 'pet-details' page and see 'stepPageLogo' is visible
    And I click on 'stepOneSubmit' button
    Then I should check the error rows count is equal to the number in error message