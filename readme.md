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

1.  User Page loads -> make the api call -> render page
2.  User Page loads -> render the initial UI(UI like Shimmer) -> Make an API call -> Update

The second approach is better way as the user experience will be much better in that

## USE EFFECT HOOK

1.  The body component renders and after that the use effect hooks gets rendered. It consists of a callback function and an dependency array

2.  Hence to get the data for the first time after the component is rendered we use the useffect hook
    .
    .
    .
    .
    .

---> Fetch api is given by the browser not js itself.

3.  Ours browser (say chrome) restricts or block us (localhost) from one origin to another origin i.e, calling an outside api from our localhost.
4.  Shimmer UI is a good practice of lazy loading.
5.  Concept of conditional rendering is used in shimmer UI

6.  # const with useState and components

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
   .
   .
   .
   .
   .

7) ## SOME MORE POINTS OF USE EFFECT & USE STATE, ABOUT ROUTING - static & dynamic both
   1. Useffect runs after the component is rendered. The dependency array changes its behaviour.
      if [] is empty than it will run only once. if no dependency array then it will run every time the component renders. [statevar] if it has something than it will render when there is updation in the dependency array variable.
   2. Dont use ustate outside the body. Its used to create local state variable inside a function and always create on top since at the end the end of the day js executes line by line.
   3. Dont use conditional sentence like if/else or loops with useState and useEffect. Also dont declare them inside a separate function.

   ## ROUTING
   1. Install react router not react router dom and import from react router
   2. create approutes with the help of browser router which is an array of object taking mainly path, element, eroor element , children routes(if any)
   3. Use Router Provider now instead of the app component and pass the approutes to it with attribute routes = {appRoutes}
   4. errorElement is used to handle when / any path doesnt matches.
   5. useRouteEroor hook provided by router to get Error Response object which has more details about the error like status code, error message and all. Use it inside the error component
   6. Children routes are created inside the the parent route.
   7. Outlet helps in replacing the element when linked is click

FINAL STEPS
🔹 React Router Sequence (Nested Routing)
1️⃣ Define Route Tree

Use createBrowserRouter to create a route hierarchy.

const router = createBrowserRouter([
{
path: "/",
element: <App />,
children: [
{ index: true, element: <Card /> },
{ path: "deals", element: <Deals /> },
],
},
]);

This creates a route tree, not just an array.

2️⃣ Provide Router Context

Wrap app with:

<RouterProvider router={router} />

This:

Enables route matching

Tracks URL changes

Powers <Link>, <Outlet>, navigation

Without this → routing won’t work.

3️⃣ Parent Route = Layout Route

If a route has children, it becomes a layout route.

Example:

{
path: "/",
element: <App />,
children: [...]
}

App stays visible while children change.

4️⃣ Use <Outlet /> Inside Parent
function App() {
return (
<>
<Navbar />
<Outlet />
</>
);
}

<Outlet /> is the placeholder where matched child renders.

5️⃣ Default Child Route

For default / child:

{ index: true, element: <Card /> }

Do NOT use path: "/" inside children.

6️⃣ Child Route Rules

For nested routes:

❌ path: "/deals"

✅ path: "deals"

No leading slash.

7️⃣ Navigation Flow (What Happens Internally)

When URL changes (via <Link>):

RouterProvider detects URL change

Matches route tree

Renders parent element

<Outlet /> renders matched child

🔹 Visual Flow

For /:

App
├── Navbar
└── Card (index: true)

For /deals:

App
├── Navbar
└── Deals

That’s the complete routing sequence — clean and correct.

8.  Router provider at root level as React context flows downward.So placing it at the top ensures:Every component inside the app can access routing.If you placed it lower: Only components inside that subtree would get routing.
    .
    .
    .
    .

#### SINGLE PAGE APPLICATION (SPA)

--> Its basically the process of make a page not reload when routing occurs. It takes the help of CLIENT SIDE ROUTING.
Routing can be of two types client side as above in which we just interchange among pages and can make network calls but without changing the entire page and another one is server side routing where an http request is made to the backend and an response comes in with respect to which we see the UI.

9.  DYNAMIC ROUTING
    --->using dynamic route eg - `restaurant/:resId` we can perform dynamic routing

Steps - a) make the component you want to render as a result of dynamic routing.

b) define the route in the browserRouter Api with path as `pathname/:<keyname>`

c)On the component in which you want to redirect or routing to happen cover it with LINK tag and make sure to send the specific key (id in this case) through which api will be called in the new component which pops up after rendering eg - in cards we did to={`listRestaurantMenu/${item.info.id}`}

d) Now in the new page a.k.a the component which comes due to routing check the data through `useParams` hook and perform whatever action you want. eg - api call to fetch the data.

10. Behind the scenes LINK tag has `a tag` is there hence LINK is kind of wrapper on the `a tag`. With the help of LINK tag it helps react router to keep a track of it.

.
.
.
.
.
.

8.  ### CLASS BASED COMPONENTS

    1.Normal javascript class that inherits property from React.component

    2.render() fn is used to print the jsx

    3.concept of super() i.e, calling parent class constructor is applied here too.
    4.props are declared in the constructor class.

    5.`this` is used to access any propoperty of the class.
    Refer for in-depth - https://chatgpt.com/share/6997271e-9874-8001-a506-cdbe301f72ca

    6.When we say we are loading a functional component its means we are invoking(mounting) the component and when we say we are loading a class based component that means we are creating an instance of that class.

    6.A state variable is a single large object where we need to define all our state variables.
    this.state = {...all state variables}
    Also the update function also expects the update in same format that is an object.
    this.setState({... state variables which we want to update in exact `key`:`action to do` pair}). inside a single setState update whatever state variables are there since react will compare only the ones which is update from the this.state object. 9. ## LIFE CYCLE METHODS IN CLASS BASE METHOD

    --->React does not wait for API calls. It renders the component first. Since API calls are side effects, we place them inside or componentDidMount in class components so that they run after the component mounts, preventing unnecessary re-renders and performance issues.

    # Life cycle method happens in batches render phase then commit phase. In render phase contructor is called first followed by the render function. This will happen in batches say 1 parent and 2 child so the process be like---

    ## parent constructor->parent render()->child1 constructor->child1 render()->child2 constructor->child2 render.

    # This ends the render phase now comes the commit phase where EXPENSIVE DOM MANIPULATION HAPPENS FIRST followed by life cyled methods like componentDidMount and all

    ## DOM UPDATED ->child1 componentDidMount called->child2 componentDidMount called->parent componentDidMount called

    # The batching takes place since DOM manipulaiton is expensive so better do all the contructor calling and render and then do dom updates

    Refer - https://chatgpt.com/share/6997271e-9874-8001-a506-cdbe301f72ca
    since more clear explanation plus comparison with useFffect which is slightly different and also for api update component did mount

    Refer - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ for life cycle diagrams

    # Never compare useffect = componentDidMount both are different

    Note : Lec 8 resource video watch again if needed since lots of theory concepts

9.  ### Single Responsibility Principle, custom hooks

    -->A module / class / component should have only one reason to change.Not “only one function” — but one responsibility. that is known as single page responsibility principle make your code modular not putting everything in one place better to have a business logic layer for the ui separate , only ui focused layer sepearate and service or api calling layer seperate but the thing is its not mandotory but good to have.

    ## Custom hooks

    --> basically normal js function. See code for implementation.
    --> naming should be started with `use` as a best practice

    ## Dynamic bundling or code splitting or chunking or lazy loading or ondemand loading or dynamic import

    Dynamic Import (JS feature)
    ↓
    Code Splitting (bundler technique)
    ↓
    Chunks generated
    ↓
    Lazy Loading (React usage)
    ↓
    On-Demand Loading (business term)
    🚀 In Modern React (React 18+ Standard Way)

    --->Use:

          -->React.lazy

          -->Suspense

          -->Route-based splitting (React Router)

          -->Dynamic import()

          --->Example (Route level splitting):

          --->const Restaurant = lazy(() => import("./Restaurant"));

          This is industry standard.

--?=>Code splitting is the technique, dynamic import is the mechanism, chunks are the result, and lazy loading/on-demand loading is the usage pattern in the UI. There is more type in which it can be loaded.

refer - https://chatgpt.com/share/69982d46-3ec0-8001-a847-5cf5ef037c5e - for the above topic
.
.
.
.
.
.

10. # STYLING

    -->css , scss/sass , chakra ui , material ui, bootstrap, ant design , tailwind.

    # INSTALLING TAILWIND WITH PARCEL
    1. install tailwind/postcss
    2. create a post css config
    3. import @tailwindcss in a global index.css file. this is basically the main configuration come overall css file
    4. import it the index.js file with just path or also we can inject style sheet in index.html but not recommended.

    --> https://chatgpt.com/share/699870f3-6708-8001-a5b8-f8efdd379597 - postcss basically Reads your CSS file . Runs plugins (like tailwindcss) Transforms your CSS Outputs final CSS

    --> it never ship unused css. only what we use gets shipped into the final bundle
