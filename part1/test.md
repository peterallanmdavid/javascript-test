## React interview questions

1. What is state and props in reactjs?
   - State are data that are initialized and managed inside the component, props on the other hand are data passed to the component.
2. What is higt order component? How do you use it?
   - It is a function/component that wraps a component to manipulate its properties, and returns a new component with its relative properties injected into it. It is commonly used was a function that takes component as an arugement, and returns a that same component with injected new properties e.g. (Injecting the authentication properties on a certain component)
3. What is context? What are the benefits of it?

4. How to assign and change the value of state in a component?
   - by using setState
5. Could you explain the life-cycle of a react component?
   1. setting of props, initialization of state on the constructor
   2. Mounting of component
   3. Update of Component based from the state and props changes
   4. Unmounting
6. What is fragment in react?
   - It is a component that lets you group children component without the need of adaing a parent node/container/component
7. What is ref in react?

   - It is represent the react element and provide access to it

8. What is container component? What is presentational component?
   - Container Component - component that manages the data that will be used on the presentational component, usually this is the one that access the data from a redux store or just simply that component that initializes the state of the component
     Presentational Component - the one that just renders the html, its data is just coming from the props given by the container Component
9. How to pass a function to a component?
   Not sure exactly what is the question specifies to but if were talking about passing function as props to a component. heres an example
   ```js
   const customFunction = () => {
     console.log('this is my function')
   }
   const MyComponent = ({ onClickMyFunction }) => {
     return <div onClick={customFunction}>My Function</div>
   }

   const ParentCompoennt = () => {
     return (
       <div>
         This contains ChildrenComponent
         <MyComponent onClickMyFunction={customFunction} />
       </div>
     )
   }
   ```

```

10. What is portal?
    - this is used to render the childern component denoted by this.props.children
```
