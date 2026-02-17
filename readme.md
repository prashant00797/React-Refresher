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

   ---><pre> export const App = () => (
     <div>
       <h1>asdas</h1>
     </div>
   );</pre>
   is equilavant to

/\*export const App = () => {
return (

<div>
<h1>Test</h1>
</div>
);
};*/

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

4. --->CODE PUSH
