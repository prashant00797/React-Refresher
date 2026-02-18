# React-Refresher

Refreshing React Skills

1. TODO
2. TODO
3. ---> building scripts to run commands
   "dev":"parcel src/index.html",
   "build":"parcel build src/index.html",

   ---> npx parcel index.html = npm start dev where dev ="parcel src/index.html" since both calls the parcel from the node modules and excutes the index.html. npx is directly executing the parcel package whereas from npm we look into the script tag inside package json which ultimalely indicates to parcel in node modules only

   ---> React element != an HTML element , its an JS object

   ---> remember finally .render() will finally replace whatever writting inside the root element , not APPEND

   --->JSK != React. It is not a part of React core library.

   ----> JSX != HTML inside JS. Its just a syntax which is SIMILIAR to HTML mixed with JS.

   --->FLOW WITH CORE REACT.CREATEELEMENT
   React.createElement => React Element created which is a JS object => ReactDOM.createRoot() creates a root and then .render() to render into an HTML Element.

   --->FLOW WITH JSX
   JSX (Babel transpiles JSX to JS , Parcel bundles runs and final JavaScript Code goes to JS engine as js engine only understands ecma script js code) then interanlly React.createElement => React Element created which is a JS object => ReactDOM.createRoot() creates a root and then .render() to render into an HTML Element.

   ---> Babel does many more things apart from this refer to Babel Docs.

   ---> Camel Casing in JSX attributes

   ---> Multiple components require open and close branckets () to help babel understand

   ----> Name components with capital letter to distinguish them from noraml html elements. Its the way how JSX work or react understands which is an HTML element and which is a component

   ---> A react functional component is basically a function that return a piece of JSX (React Element)

   ---> export const App = () => (
     <div>
       <h1>asdas</h1>
     </div>
   );
   is equilavant to

export const App = () => {
return (

<div>
<h1>Test</h1>
</div>
);
};

crux - if not returning just use open and close brackets () other wise curly braces followed by return

---> React Element → An object that represents a DOM node.

     React Component → A function (class-old way) that returns React elements.

---> Component Composition = Component inside another component

---> Whatever you put inside {}, React shows it as text — not as HTML. Thats sanitization which helps in XSS attacks -- see docs and gpt

---> Title() i.e. calling a react functional component === <Title/> ==== <Title></Title> --- see code
.
.
.
.
.

4. ---> BUILDING A FOOD ORDERING APP

---> Component Structuring
1--Header
1.1--Logo
1.2--Nav Items
2--Body
2.1--Search
2.2--RestaurantContainer
2.2.1--RestaurantCards
3--Footer

--->inline style attribute in JSX is passed as an JS object

---> passing an argument to a function = passing props to a component. so props = arguments

--->Config Driven UI which i have worked on

---> JS DOUBTS - 1) anything you print inside a HTML element JS automatically converts it to a STRING. Hence that array got converted to a string 2) Option Chaining in JS - resData?.data - basically if data exists then access it or otherwise return undefined. Its totally different from conditional operators

-->The key property is important while using map() because it helps React uniquely identify list items during reconciliation, so it can efficiently update the DOM. That’s why React shows a warning in the console when a key is missing.

It’s better not to use the index as a key because if the order of items changes, the index changes too. When that happens, React loses the identity of components, which can lead to incorrect UI updates or state bugs.

Therefore, we should use a stable and unique key (like an id) that does not change between renders.

React doesn’t care about uniqueness once — it cares about stability across re-renders.
---------------------For now not building the project here only maintaining the notes and functionality----------------------------------

---> render multiple items using map technique
be carefull while use return structure see code
.
.
.
.
.

# 5 ---> File Structuring, HOOKS,EXPORT IMPORTS, REACT FUNDAMENTALS

---> File structuring is not compulsory but its convenient to have a simple folder structure

---> js or jsx file extension doesnt impact the code.

---> basic convention use `export default <component>` and then import it. Also while importing its not necessary to write the extension of the file in the relative path `.components/<component>.js` or `.components/<component>`

---> no constants or harcoded data in main component file. Better to create a separate file like industry standards utils or common etc. Keep the constants name in caps with snake case(eg- BASE_URL).

##### EXPORT IMPORTS

---> named export = exporting multiple files
default export = by default the file would export that particular thing only. Only one default in a file.

--> name export then while importing use {curly braces} while importing and exact name must match. Reason for curly braces is inside js it happens like -

what we wrote -
export const Dummy = () => {};
export const Test = () => {};

internally -
// module object
{
Dummy: ...,
Test: ...
}
So when importing: You are saying: "Give me the property named Dummy from that module.

--->default export then no curly braces normal importing and also can be renamed.No {} because you’re not selecting a property —
you’re getting the default value.

--> it’s JavaScript module syntax.

export default Component --- import Component from "path"
export const Component --- import {Component} from "path"

##### HOOKS

---> event handlers expects a callaback function.
---> Hooks = normal js functions.
---> state variable for re rendering -> use state(). its contains one variable and a variable Update function. we can set by default value in () this.

-->>> WHENVER A STATE VARIABLE CHANGES REACT RE-RENDERS THE COMPONENT
The core power of REACT IS EFFECTIVE DOM MANUPULATION which is like updating a component with state variables and all.
REMEMEBER THIS LINE - REACTS KEEP SYNC BETWEEN THE UI LAYER AND DATA LAYER VERY EFFIECIENTLY

--> Virtual DOM existed way before React was developed. Virtual DOM existed → React implemented its own reconciliation → later rewrote it as Fiber

--> React is fasst because of this only efficient dom manipulation by using the above alogrithm.

--> The creation of the second function in useState is hence create to START THE TRIGGER for the diffing algorithm

--> Dont get confused with the useState syntax which is basically array destructing
const [state, setState] = useState();
or const arr = useState()
==> const [state, setState] = arr;
or
const state = arr[0];
const setState = arr[1];
`basically normal js code`
.
.
.
SOME IMPORTANT TERMS - see gpt created a chat + refernce react documentations
1)REACT RECONCILIATION ALGORITHM -
2)DIFFING ALGORITHM
3)REACT FIBER
4)VIRTUAL DOM

--->React uses the concept of Virtual DOM and implements reconciliation internally. React Fiber is the modern engine that performs reconciliation in a more advanced and efficient way.
.
.
.
.

# 6. Architecture, USE EFFECT USAGE, UNDERSTANDING MORE ABOUT USE STATE AND RENDER CONTROL, TOGGLE FUNCTIONALITY, SEARCH FUNCTIONALITY(Most Imp)

---> Monolithic architecture vs Micro service architecture
---> Seperation of concerns and Single Responsibility Principle is the core of Micro Service architecture
--->Each microservice runs on its specific port… All these ports are then mapped to a domain name.

---> Approaches for loading a page =

1. User Page loads -> make the api call -> render page
2. User Page loads -> render the initial UI(UI like Shimmer) -> Make an API call -> Update

The second approach is better way as the user experience will be much better in that

##### USE EFFECT HOOK

1. The body component renders and after that the use effect hooks gets rendered. It consists of a callback function and an dependency array

2. Hence to get the data for the first time after the component is rendered we use the useffect hook
   .
   .
   .
   .
   .

   ---> Fetch api is given by the browser not js itself.

3. Ours browser (say chrome) restricts or block us (localhost) from one origin to another origin i.e, calling an outside api from our localhost.
4. Shimmer UI is a good practice of lazy loading.
5. Concept of conditional rendering is used in shimmer UI

6. # const with useState and components

   🔹 Why we use const?

const prevents reassignment of the variable.

It does NOT prevent React from updating state.

🔹 How state updates work?

We never change state directly.

We use the setter function (setCount()).

When state updates:

React re-runs the component.

A new variable is created with the new value.

🧠 Key Line:

State doesn’t change — component re-runs with new value.

📌 2️⃣ const with Component
const Body = () => { ... }

🔹 What const means here?

The function reference cannot be reassigned.

The component itself can run multiple times.

🔹 On re-render:

React calls the same function again.

It does NOT modify the function.

It just executes it again.

🧠 Key Line:

Component is constant, execution is not.

useState -> Setter function reference stays same -> New state value & new variable per render changes
Component -> Function reference stays same -> Function execution & internal variables changes

# V.V.V.IMP THE SEARCH FUNCTIONALITY

1. Usage of controlled component means assign value attribute of an input field to a state variable i.e., now react controls it behaviour and without an onchange handler we wont be able to type in it

2. React renders everytime on onchange event as the state variable changes but only efficient changes occur by comparing the old VDOM vs the new VDOM and only updates whats necessary.

3. REMEMBER THIS FLOW FOR A SIMPLE SEARCHING ---
   ----> First create a separate state which contains the same data as of the data of the main component which is rendering. example - in my case i kept the food main api data as a copy in filtered data state also and on useffect we update each with the initial api data
   ----> Second its very important that search will occur on all the data present so basically our original state which has the api data which never changes. example - cardata state in my code
   ---->Third, rendering of the component will always be based on the filtered data not the original data because the component has a feature of being changed as its attached to a filter function so wee need to update it continously hence rendering must be with a state of filtered data not overall data basic logic. eg -- used filtered state data to view components and carddata to filterout data which never changes and keeps all the data of the api that we get on first call.
   ----> Small logic of includes must be know to match string and why "prashant.includes("") = true" this logics must be known as on empty string entire list is rendered as `Empty string is considered present inside every string, so .includes("") always returns true.` and filter passes all data thus we seach every card.
