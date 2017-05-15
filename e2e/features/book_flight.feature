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
    And I enter departure 'date' as '20'th of current month
    And I click on 'retDate' field
    And I enter return 'retDate' as '24.05.2017'th of current month
    And I click on 'adults'
    And I choose 'adults' as '2 adults'
    And I click on 'children'
    And I choose 'children' as '1 child'
    And I click on 'infants'
    And I choose 'infants' as '1 infant'
    And I click on 'findFlights' field
    Then I should land on 'flight-details' results page
    
  @mobile
  Scenario: Search the flights
    When I navigate to 'home' page
    And I choose 'menu' as 'BOOK A FLIGHT'
    And I click on 'departure' field
    And I choose 'airport' as 'Minsk (MSQ)'
    And I click on 'destination' field
    And I choose 'airport' as 'Moscow (Sheremetyevo) (SVO)'