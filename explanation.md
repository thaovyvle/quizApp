# Links 
Respiratory: https://github.com/thaovyvle/quizApp
GitHub Pages: https://thaovyvle.github.io/quizApp/
Portfolio: https://thaovyvivian.wixsite.com/thaovyleportfolio

# Explanation

I selected Option 2 for my Portfolio assignment. I decided to create a new React Native project which was an alternative design of the previous Quiz App that I created for Lab 10. In this new Quiz App, I implemented new features: login, registration, home, math problem quiz type, and fill in the blank quiz type. 


Login Component 
Requires text input for username and password. Users can login with the username "test" and password "Test1@". If the username and password are entered correctly, the user will be able to navigate to the Home screen. The user can also press the register button to register for an account instead. 


Registration Component 
Requires text input for first name, last name, email, username, password, and confirm password. Each input must be validated and an error message will be displayed when the user input does not match each criteria. The 'Register' button will be disabled until all text inputs meet the criterias. The user will be able to navigate to the Home screen once this is complete. 


Home Component
Instead of navigating directly to a Quiz screen with a new quiz type for each question, like in the Lab 10 Quiz App, the Home screen allows users to select which type of quiz they'd like to play. The Home screen consists of buttons for each quiz type: Multiple Choice, Multi-Answer, True or False Math Problems, and Fill in the Blank. When a user makes their selection, that quiz type will be passed to the Quiz component. 

The Quiz component will display one question for each screen of the questions that are based on the user selected quiz type. 


Quiz Types: Math Problem & Fill in the Blank
These two new quiz types requires text input from the user. For math problems, the user's number answer must be equivalent to the correct number answer. For fill in the blank, the user's answer must match the string of the correct answer no matter if it is upper case or lower case. 
