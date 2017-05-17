Feature: Flight Search Test
  As a user
  I can find a flight and go to the results page
  
  @desktop
  Scenario: Search the flights
    When I navigate to 'home' page
    And I click on 'departure' field
    And I choose 'countryList' as 'Belarus'
    And I choose 'cityList' as 'Minsk'
    And I click on 'destination' field
    And I choose 'countryList' as 'Russian Federation'
    And I choose 'cityList' as 'Moscow'
    And I click on 'depDate' field
    And I enter departure 'date' as '1'st day ahead of today
    And I click on 'retDate' field
    And I enter return 'retDate' as '4'th day ahead of today
    And I click on 'adults'
    And I choose 'adults' as '2 adults'
    And I click on 'children'
    And I choose 'children' as '1 child'
    And I click on 'infants'
    And I choose 'infants' as '1 infant'
    And I click on 'findFlights' field
#    Then I should land on 'flight-details' results page
 #   And I should check 'outbound' title
 #   And I should check 'return' title
    
  @mobile
  Scenario: Search the flights
    When I navigate to 'home' page
    And I choose 'menu' with title 'BOOK A FLIGHT'
    And I click on 'departure' field
    And I set 'depInput' as 'Minsk'
    And I click on 'destination' field
    And I set 'destInput' as 'Moscow'
    And I select my trip mode as 'roundTrip'
    And I click on 'depDate' field
    And I enter departure 'date' as '1'st day ahead of today
    And I click on 'retDate' field
    And I enter return 'retDate' as '4'th day ahead of today
    And I click on 'adults'
    And I choose 'adults' as '2 adults'
    And I click on 'children'
    And I choose 'children' as '1 child'
    And I click on 'infants'
    And I choose 'infants' as '1 infant'
    And I click on 'findFlights' field