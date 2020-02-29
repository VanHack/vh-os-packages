# This if part of the hiring processes for the [Front End position](http://bit.ly/vanhack-react-job) at VanHack

### Your goal is:
**Create a sigle page application usign React. If you follow the below instruction you should be able to finish everything without problems, but, in case you need any help or have any questions fell free to contact us by email.**

All Components are made using [ReactJS](https://reactjs.org/) and [Styled Components](https://styled-components.com/) and we use [Storybook](https://storybook.js.org/) as a renderring

# Release Current
`vanhack_test`

# Prototype

You can see the complete prototype [here](https://scene.zeplin.io/project/5e309b1a46e5cf7deacb0cd7)

But we are asking you to **implement only the Skill section below:**
![Skills](https://imgshare.io/images/2020/02/21/skills.png)


# To complete this test you must 

#Step 1:

1 - Create or Update all components needed to compose the user Skills Section
 * After run the project you'll be able to check the Section here [Skills Section](http://localhost:6007/?path=/story/sections-skills--default)
 
2 - Reuse as much as possible

3 - Create as many components as you need thinking that could be reused in the future

4 - Don't forget to cover the [LOADING, ERROR and SUCCESS] states

5 - We want to see your tests!!!

6 - Fork your new components (check the How to contribute section)

# Step 2

1 - Create a new Single Page Application project using ReactJs with 3 routes
* `/` => Home, with 2 links that will redirect to the below routes
* `/user` => The inital version of the component
* `/user/[id]` => The view of the component with preload states from our API

2 - After finishing the project, reply the email that we sent you with your GitHub project link

# API Documentation
[Swagger API](https://react-job-api-test.azurewebsites.net/swagger/index.html)

* UserId = 1:  Will return an profile
* UserId <= 0: Will return an error (profile not found)
* UserId > 1: Will return an emptity profile

# How to use the components on your local environment

* Run `yarn transpile`
* Run `npm pack`
* See `yarn link` documentations [Here](https://classic.yarnpkg.com/en/docs/cli/link/)

# How to contribute:

* Create a [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) on Github
* Keep your fork up to date
* Create a new branch from **Open RC (Release Current)** *not from MASTER*
* Commit on your own fork
* Create a pull request to **Open RC** (*Release Current*) *not against MASTER*

# How to run:

* Clone the [project](#)
* run `yarn install`
* run `yarn add styled-components` *install styled componets but discard the changes on package.json because the styled components must be installed as peerDependence*
* run `yarn start`
* The project will run at the port (http://localhost:6007)[http://localhost:6007]


# Architecture:

 ```
ROOT                      #STORYBOOK CONFIG
│
└───assets
│   └───icons                  # Put all icons inside
└───packages
│   └───Colors                 # Colors configuration
│   └───Grid                   # Grid configuration we must use this component to create all componets grid
|   └───Components    
|       └───[YOUR COMPONENT FOLDER]# Create your component here with the name
|       └───input              # All inputs should be created inside input folder
|           └───Simple         # A simple component
|               └───.spec.js   # All tests should be write in this file
|               └───index.jsx  # The component implementaion
|               └───stories.js # The component stories for the Storybok
|               └───styles.js  # If needed all component styles should be here
|
└─── .babelrc                   # BABEL CONFIGURATION
└─── package.json               # PACKAGE JSON ***(Don't commit the package.json ever)**
└─── README.md                  # README.md Changes are welcome
```

## Mandatory
> All components must be created inside `packages/Components`


# Big Thanks and [WeHackTogether](https://vanhack.com/)!!!
