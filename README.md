# SINAI Frontend Coding Exercise

### The Exercise

At SINAI, we are all about taking a numerical approach to carbon management. As part of that effort, we have to compute the carbon footprint of everyday activities. While we focus on business processes, you can apply similar methodologies to personal activities.

Your task is to build a personal carbon footprint calculator application, providing interfaces for at least two of the following categories:
- Food
- Mobile Transportation
- Electricity

*Hint*: if you need some inspiration, check out the EPA’s household calculator (use zip code 94114)

In this repository, you will find there is a backend server ready to serve data for these three categories. Please see the code in `packages/server/index.js` to see the endpoints available and the data it returns. Generally, each endpoint returns some data including emissions factors for some gases (`co2`, `ch4`, `n2o`) as well as a unit and some categorization data. *Note* that the unit property is representing the amount of the gas emitted per amount of the item. For example, if you see `"unit": "g/mile", "n2o": 0.5` then that means for that given item that `0.5g` of `n2o` will be emitted per mile traveled.

### Getting Started

**System Requirements**
- [Node](https://nodejs.org/en/) 12 or later
- [Yarn](https://yarnpkg.com/) 1 or later (this repo is using [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/))

**Adding your code to the project**

We use React here at SINAI, so if you are familiar with it, then we suggest using it for your coding challenge. However, if you are not familiar with React or if you feel that your skills will be better represented using another framework such as Angular or Vue, then that is OK, too!

We also recommend using an available component library instead of styling everything by hand (we use [Ant.Design](https://ant.design/)).


Put your client code inside `packages/client` and be sure to add to `packages/client/package.json` a start script. You can add packages to the client from the repo's root directory by entering `yarn workspace client add {package-name}`

**Running the code (server & client)**

You can run the server with `yarn server:start`. Once you have the client start script, you can run both simultaneously with `yarn start` (which will call both the server and client's `start` command).

### Our Expectations

- Documented, stable, and well-abstracted code
- Clear understanding of UI fundamentals such as state management and handling network requests
- Utilization of git to track changes

If you get stuck, run into problems, or have any questions, then please send an email to [Aaron](mailto:aaron@sinaitechnologies.com) and [Ben](mailto:ben@sinaitechnologies.com).
