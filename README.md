# React-Lerna Example
## Motivation
You are working on multiple React projects and have some shared components throughout them. In the event of a change, instead of having edit one component multiple times, you can have edit the component just once with a **monorepo** file structure.

### Why Lerna with React?
1) There is no need to publish to a private registry (such as npm)
2) [Lerna](https://github.com/lerna/lerna) is highly popular (16k stars)

## File Structure
```
packages
  |__ common
  |__ webapp

lerna.json
package.json
```
The **common** folder would be where you store your shared components/utils.  
The **webapp** folder is your React project.

## Setup
1) cd into **common** folder and run 
`yarn`
2) cd into the **webapp** folder and run 
`yarn`
3) Go back to the root folder and run `lerna bootstrap`.  
   (This does symbolic linking between your packages to ensure that your dependencies across different folders can be detected.)
4) cd into **common** folder and run `yarn transpile`.  
    (This script copies the build files into the **dist** folder)
5) cd into the **webapp** folder and run `yarn start` to start the application. You should see the shared components on the page.

## Notes
### package.json settings  
In the package.json in the common folder, we see the following:

`"module": "dist/index.js"`

This ensures that any imports from another project will import from this location with the transpiled code. 

### Babel
Babel plays an important role to **transpile** the JSX code into vanilla javascript code to be interpreted by the compiler. Hence, it is important to have your **babelrc** file.