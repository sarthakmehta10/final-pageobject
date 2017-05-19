Feature: Flight Search Test
  As a user
  I can find a flight and go to the results page
  
  @desktop
  Scenario: Search the flights
    When I navigate to 'home' page
    And I enter in 'departure' field with value 'Minsk'
    And I click on 'originAirportLink' field
    And I enter in 'destination' field with value 'Moscow'
    And I click on 'destAirportLink' field
    
#    And I click on 'departure' field
#    Then I should wait for 'originModal' to open
#    And I choose 'originCountryList' as 'Belarus'
#    And I choose 'originCityList' as 'Minsk'
#    And I choose 'originAirportList' as 'Minsk (MSQ)'
#    And I click on 'selectButton' field
#    And I click on 'destination' field
#    Then I should wait for 'destModal' to open
#    And I choose 'destCountryList' as 'Russian Federation'
#    And I choose 'destCityList' as 'Moscow'
#    And I choose 'destAirportList' as 'Moscow - Domodedovo (DME)'
#    And I click on 'selectButton' field
#    And I click on select button of 'destination'
    And I click on 'depDate' field
    And I enter departure 'date' as '1'st day ahead of today
#    And I click on 'retDate' field
#    And I enter return 'retDate' as '4'th day ahead of today
#    And I click on 'adults' field
#    And I choose 'adultsOption' as '2 Adults'
#    And I add option to 'travel_with_children'
#    And I click on 'children' field
#    And I choose 'childrenOption' as '1 Child (2 to 11 years)'
#    And I click on 'infants' field
#    And I choose 'infantsOption' as '1 Infant (up to 2 years)'
#    And I click on 'findFlights' button with value 'Search flights'
#    Then I should land on 'flight-details' results page
 #   And I should check 'outbound' title
 #   And I should check 'return' title
    
  @mobile
  Scenario: Search the flights
    When I navigate to 'home' page
    And I click on 'departure' field
#    And I enter in 'departure' field with value 'Minsk'
    And I click on 'country' field
    And I choose 'countryList' as 'Belarus'
    And I click on 'city' field
    And I choose 'cityList' as 'Minsk'
    And I click on 'airport' field
    And I choose 'airportList' as 'Minsk (MSQ)'
    And I click on 'selectButton' field
#    And I enter in 'destination' field with value 'Moscow'
    And I click on 'destination' field
    And I choose 'countryList' as 'Russian Federation'
    And I choose 'cityList' as 'Moscow'
    And I choose 'airport' as 'Moscow - Domodedovo (DME)'
    And I click on 'selectButton' field