Feature: Pet Insurance Test
  As a user
  I can go to pet insurance results page and count the results
  
  @desktop @mobile 
  Scenario: Get pet insurance quotes
    When I navigate to 'home' page and see 'logo' or 'logoMobile' is visible
    And I choose 'insuranceType' as 'Pet Insurance'
    Then I should be taken to 'pet-insurance' page and see 'logo' is visible
    And I click on 'getQuote' button
    Then I should be taken to 'pet-details' page and see 'stepPageLogo' is visible
    And I choose 'petSpecies' for selecting pet as 'Cat'
    And I enter in 'petName' field with value 'Kitty'
    And I select 'petGender' as 'Female'
    And I click on 'monthDate' field
    And I select 'monthOption' as 'Jun'
    And I click on 'yearDate' field
    And I select 'yearOption' as '2016'
    And I select 'catType' as 'Pedigree'
    And I enter in 'petBreed' field with value 'Rag'
    And I click on 'ragdoll' field
    And I enter in 'petCost' field with value '20'
    And I set 'petNeutered' radio button as 'Yes'
    And I set 'petChipped' radio button as 'Yes'
    And I set 'petVaccine' radio button as 'Yes'
    And I set 'petMedical' radio button as 'No'
    And I set 'petComplaints' radio button as 'No'
    And I set 'petBusinessConnection' radio button as 'No'
    And I set 'petAlcoholEnvironment' radio button as 'No'
    And I set 'otherPets' radio button as 'No'
    And I click on 'stepOneSubmit' button
    Then I should be taken to 'owner-details' page and see 'stepPageLogo' is visible
    And I set 'ownerKeeper' radio button as 'Yes'
    And I click on 'ownerTitle' field
    And I select 'titleOption' as 'Mr'
    And I enter in 'firstName' field with value 'Sarthak'
    And I enter in 'lastName' field with value 'Mehta'
    And I enter in 'postCode' field with value 'NW15LA'
    And I click on 'findAddress' button
    And I select address as 'MARKS & SPENCER'
    And I set 'ownerProperty' radio button as 'No'
    And I click on 'date' field
    And I select 'datePicker' with '1'st day ahead of today
    And I enter in 'birthDay' field with value '10'
    And I enter in 'birthMonth' field with value '10'
    And I enter in 'birthYear' field with value '1994'
    And I select 'maritalStatus' as 'Single'
    And I set 'ukResident' radio button as 'Yes'
    And I enter in 'phoneNumber' field with value '+449882888882'
    And I enter in 'eMail' field with value 'abcd@gmail.com'
    And I enter in 'confirmMail' field with value 'abcd@gmail.com'
    And I select 'checkBox' as 'Email'
    And I click on 'submit' button
    Then I should be taken to 'pet-insurance-result' page and see 'stepPageLogo' is visible
    And I wait for 'loadingBox' to get closed
    Then I should check total results count is more than 'accidentOnly' results count
    And I should check total results count is more than 'timeLimited' results count
    And I should check total results count is more than 'perCondition' results count
    And I should check total results count is more than 'lifetime' results count