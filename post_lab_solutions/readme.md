# Post-Lab Solutions

###### This repository contains assignment solutions written by the CodeCore community.

###### The master branch contains official solutions vetted by an Instructor/TA. Use it to compare your own solutions.

###### If you have a different solution we encourage you to contribute (_see contributing_ section below).
---
## Set Up
In your desired directory clone the repository with
```
  git clone https://github.com/CodeCoreYVR/post_lab_solutions.git
```
then cd into the directory
```
  cd post_lab_solutions
```
while inside the directory run
```
  npm install
```
and
```
  bundle
```
this will install the [linters](https://en.wikipedia.org/wiki/Lint_(software))


Then install the Visual Studio Code extensions:
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [ruby-rubocop](https://marketplace.visualstudio.com/items?itemName=misogi.ruby-rubocop)

These extensions will automatically run the linters and highlight code that is not adhering to the styling standards.
Only solutions that adhere to styling standards will be merged into master.

## Contributing

- Create a branch off of the master
- Add your solution to the branch and push it to the github repository
- Make a Pull Request (PR) with your solution.
- Use snake_case for class names and assignment names.
- Create a sub-directory with the class name found on http://codecore.certified.in. Inside, create a sub-directory for each assignment.
- Name the assignment sub-directory after the assignment in snake_case.
- Write your solution code inside the assignment sub-directory.
- Include a readme.md file that contains the assignment description.
- If not stated otherwise the entry point to your solution should be called index.js


Example structure for several assignments in no particular order:

```
.
.
├── js_basics
│   ├── fibonacci_sequence
│   │   ├── fibonacci.js
│   │   └── readme.md
│   └── pyramid_of_hashtags
│       ├── index.js
│       └── readme.md
├── js_functions_and_arrays
│   ├── is_even
│   │   ├── index.js
│   │   └── readme.md
│   └── zip
│       ├── index.js
│       └── readme.md
├── .eslintrc.json
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
```

Once you have submitted a PR ping a TA on slack with the url to the PR. We have small prizes for all PR's that have been successfully merged into master.
