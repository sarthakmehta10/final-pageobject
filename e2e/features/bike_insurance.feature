Feature: Bike Insurance Test
  As a user
  I can go to bike insurance results page and count the results
  
  @desktop 
  Scenario: Get Bike insurance quotes
    When I navigate to 'home' page and see 'logo' or 'logoMobile' is visible
    And I choose 'insuranceType' as 'Bike Insurance'
    Then I should be taken to 'bike-insurance' page and see 'logo' is visible
    And I click on 'getQuote' button
    Then I should be taken to 'bike-details' page and see 'stepPageLogo' is visible
    And I select 'registeredBike' as 'No'
    And I click on 'registeredYear' field
    And I choose 'registeredYearOption' as '2013 = 62, 13 & 63 Reg'
    And I click on 'bikeMaker' field
    And I choose 'bikeMakerOption' as 'APACHE'
    And I click on 'bikeModel' field
    And I choose 'bikeModelOption' as 'RLX'
    And I click on 'bikeCode' field
    And I choose 'bikeCodeOption' as 'RLX 450 SPORT 0450cc'
    And I select 'ownBike' as 'No'
    And I select 'firstInsurance' as 'Yes'
    And I enter in 'bikeCost' field with value '20000'
    And I select 'ukBike' as 'Yes'
    And I select 'sideCar' as 'No'
    And I choose 'bikeSecurity' as 'Smartwater'
    And I select 'additionalSecurity' as 'No'
    And I select 'bikeChanged' as 'No'
    And I click on 'bikeUsage' field
    And I choose 'bikeUsageOption' as 'Social only (SD&P)'
    And I enter in 'bikeDistance' field with value '9000'
    And I choose 'insuranceCover' as 'Comprehensive'
    And I click on 'voluntaryExcess' field
    And I choose 'voluntaryExcessOption' as '£900'
    And I choose 'policyPayment' as 'Annual'
    And I select 'pillionPassenger' as 'Yes'
    And I choose 'policyStart' as 'Tomorrow'
    And I click on 'stepOneSubmit' button
    Then I should be taken to 'more-bike-details' page and see 'stepPageLogo' is visible
    And I choose 'ownerTitle' as 'Mr'
    And I enter in 'firstName' field with value 'Ivan'
    And I enter in 'lastName' field with value 'Kotovich'
    And I enter in 'dayDate' field with value '10'
    And I enter in 'monthDate' field with value '10'
    And I enter in 'yearDate' field with value '1985'
    And I choose 'ownerGender' as 'Male'
    And I choose 'maritalStatus' as 'Married'
    And I choose 'occupation' as 'Employed'
    And I enter in 'jobName' field with value 'Software'
    And I select 'jobNameOption' as 'Software Engineer'
    And I enter in 'industryName' field with value 'Information'
    And I select 'industryNameOption' as 'Information Technology'
    And I select 'otherJob' as 'No'
    And I select 'permanentResident' as 'Yes'
    And I select 'homeOwner' as 'Yes'
    And I enter in 'postCode' field with value 'NW15LA'
    And I click on 'findAddress' button
    And I click on 'address' field
    And I select address as 'Marks & Spencer'
    And I select 'keepHome' as 'Yes'
    And I choose 'bikeParking' as 'Garaged'
    And I choose 'licenseKind' as 'International'
    And I click on 'licenseYear' field
    And I choose 'licenseYearOption' as '5 to 6 Years'
    And I click on 'continuousRideYear' field
    And I choose 'continuousRideYearOption' as '4 to 5 Years'
    And I click on 'noClaimsYear' field
    And I choose 'noClaimsYearOption' as '1'
    And I select 'ownCar' as 'No'
    And I enter in 'phoneNumber' field with value '99155507999'
    And I enter in 'eMail' field with value 'abcd@gmail.com'
    And I enter in 'confirmMail' field with value 'abcd@gmail.com'
    And I select 'bestPrice' as 'Yes'
    And I choose 'contactMode' as 'Phone'
    And I click on 'stepTwoSubmit' button
    Then I should be taken to 'bike-insurance-result' page and see 'stepPageLogo' is visible
    And I wait for 'loadingBox' to get closed
    Then I should verify 'insuranceCover' text is 'Comprehensive cover'
    And I should verify 'voluntaryExcess' text is '£900'
    
  @mobile
  Scenario: Get Bike insurance quotes
    When I navigate to 'home' page and see 'logo' or 'logoMobile' is visible
    And I choose 'insuranceType' as 'Bike Insurance'
    Then I should be taken to 'bike-insurance' page and see 'logo' is visible
    And I click on 'getQuote' button
    Then I should be taken to 'bike-details' page and see 'stepPageLogo' is visible
    And I select 'registeredBike' as 'No'
    And I click on 'registeredYear' field
    And I choose 'registeredYearOption' as '2013 = 62, 13 & 63 Reg'
    And I click on 'bikeMaker' field
    And I choose 'bikeMakerOption' as 'APACHE'
    And I click on 'bikeModel' field
    And I choose 'bikeModelOption' as 'RLX'
    And I click on 'bikeCode' field
    And I choose 'bikeCodeOption' as 'RLX 450 SPORT 0450cc'
    And I select 'ownBike' as 'No'
    And I select 'firstInsurance' as 'Yes'
    And I enter in 'bikeCost' field with value '20000'
    And I select 'ukBike' as 'Yes'
    And I select 'sideCar' as 'No'
    And I choose 'bikeSecurity' as 'Smartwater'
    And I select 'additionalSecurity' as 'No'
    And I select 'bikeChanged' as 'No'
    And I click on 'bikeUsage' field
    And I choose 'bikeUsageOption' as 'Social only (SD&P)'
    And I enter in 'bikeDistance' field with value '9000'
    And I choose 'insuranceCover' as 'Comprehensive'
    And I click on 'voluntaryExcess' field
    And I choose 'voluntaryExcessOption' as '£900'
    And I choose 'policyPayment' as 'Annual'
    And I select 'pillionPassenger' as 'Yes'
    And I choose 'policyStart' as 'Tomorrow'
    And I click on 'stepOneSubmit' button
    Then I should be taken to 'more-bike-details' page and see 'stepPageLogo' is visible
    And I choose 'ownerTitle' as 'Mr'
    And I enter in 'firstName' field with value 'Ivan'
    And I enter in 'lastName' field with value 'Kotovich'
    And I enter in 'dayDate' field with value '10'
    And I enter in 'monthDate' field with value '10'
    And I enter in 'yearDate' field with value '1985'
    And I choose 'ownerGender' as 'Male'
    And I choose 'maritalStatus' as 'Married'
    And I choose 'occupation' as 'Employed'
    And I enter in 'jobName' field with value 'Software'
    And I select 'jobNameOption' as 'Software Engineer'
    And I enter in 'industryName' field with value 'Information'
    And I select 'industryNameOption' as 'Information Technology'
    And I select 'otherJob' as 'No'
    And I select 'permanentResident' as 'Yes'
    And I select 'homeOwner' as 'Yes'
    And I enter in 'postCode' field with value 'NW15LA'
    And I click on 'findAddress' button
    And I click on 'address' field
    And I select address as 'Marks & Spencer'
    And I select 'keepHome' as 'Yes'
    And I choose 'bikeParking' as 'Garaged'
    And I choose 'licenseKind' as 'International'
    And I click on 'licenseYear' field
    And I choose 'licenseYearOption' as '5 to 6 Years'
    And I click on 'continuousRideYear' field
    And I choose 'continuousRideYearOption' as '4 to 5 Years'
    And I click on 'noClaimsYear' field
    And I choose 'noClaimsYearOption' as '1'
    And I select 'ownCar' as 'No'
    And I enter in 'phoneNumber' field with value '99155507999'
    And I enter in 'eMail' field with value 'abcd@gmail.com'
    And I enter in 'confirmMail' field with value 'abcd@gmail.com'
    And I select 'bestPrice' as 'Yes'
    And I choose 'contactMode' as 'Phone'
    And I click on 'stepTwoSubmit' button
    Then I should be taken to 'bike-insurance-result' page and see 'stepPageLogo' is visible
    And I wait for 'loadingBox' to get closed