Feature: EPAM career site tests
As a user
I want to visit the EPAM career site
So that I can apply for a job

  Scenario: CAREER_1 - Searching for jobs
    Given the EPAM career site is loaded
    When the Find button is clicked
    Then the available jobs are displayed
