# Javascript Assignments
A set of Javascript assignments with tests to validate completion

## Using this repo
In a Terminal run the following commands one at a time; you can ignore the lines starting with `#`; they're just comments. 

Enter your password when/if prompted:

```bash
# Change directories to your `home` directory
cd ~

# Make a new directory called `development`
mkdir -p development

# Change directories to this new directory
cd development

# Clone this git repo to your local machine
git clone git@github.com:blakeofwilliam/javascript-assignments.git

# Change directories to the project folder
cd javascript-assignments

# Open the project folder in Visual Studio Code
code javascript-assignments
```

## Initial setup
Before doing anything in the project, run `npm i` to install this project's dependencies.

### Basic project hierarchy
This project is set up in three basic directories: 
- **prompts**: This is where the prompts for each assignment will live
- **src**: This is where the Javascript files you will be working with will live
- **test**: This is where the tests used to validate each assignment will live

### Testing that your code works
In order to validate that your code works, simply run `npm test` and ensure that all of the tests pass.

### Basic git commands for later
`git fetch --prune` fetches and cleans up all branches according to the remote repo

`git branch -a` lists all available branches

`git checkout BRANCH_NAME`

`git pull origin BRANCH_NAME` pulls the latest version of a branch from the remote repo

