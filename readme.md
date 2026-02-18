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

# 5 ---> File Structuring, HOOKS,EXPORT IMPORTS

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
