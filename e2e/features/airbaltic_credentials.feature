Feature: My Airbaltic Test
  As a user
  I can enter my credentials and verify the message
  
  @desktop
  Scenario: LogIn through My Airbaltic
    When I navigate to 'home' page
    And I click on 'myAirbaltic' field
    And I enter invalid 'email' as 'sarthak123'
    And I enter invalid 'password' as '12345'
    And I click on 'LogIn' button
    Then I should get 'error' message as 'The e-mail address entered is invalid.'
    
  @mobile
  Scenario: LogIn through My Airbaltic
    When I navigate to 'home' page
    And I click on 'menu-link' field
    And I select menu-option as 'My airBaltic'
    And I enter invalid 'menu-email' as ' '
    And I enter invalid 'menu-password' as ' '
    And I click on 'menu-login' button
    Then I should get 'menu-error' message as 'This field is mandatory.'