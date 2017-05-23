Feature: Pet Insurance Test
  As a user
  I can check validations and verify the results
  
  @desktop @mobile
  Scenario: Get pet insurance quotes
    When I navigate to 'home' page
    And I choose 'insuranceType' as 'Pet Insurance'
    Then I should be taken to 'pet-insurance' results page
    And I click on 'getQuote' button
    Then I should be taken to 'pet-details' results page
    
  @desktop @mobile
  Scenario: Complete pet details
    When I land on 'pet-details' page
    And I click on 'stepOneSubmit' button
    Then I should check the error rows count is equal to the number in error message