## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: 
1. getElementById:
>> Selects a single element by its id attribute.
>> Returns a single DOM element or null if not found.
>> IDs should be unique in HTML. If multiple elements have the same ID, it only selects the first one
>> Very fast because it directly accesses the element by the browser’s internal ID map.

2. getElementsByClassName:
>> Selects all elements that have a certain class name.
>> Returns a live HTMLCollection not an array.
>> Live means the collection automatically updates if elements are added or removed from the DOM.

3. querySelector:
>> Select elements using CSS selectors.
>> returns the first match
>> returns all matches as a static NodeList (not live).

### 2. How do you create and insert a new element into the DOM?

Ans: Creating and inserting elements into the DOM in JavaScript is a two-step process:
1) first create the element, 
2) then insert it at the right place in the DOM. 

### 3. What is Event Bubbling? And how does it work?

Ans: Event Bubbling is the process by which an event triggered on a child element “bubbles up” through its ancestors in the DOM tree, from the innermost element up to the document root.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a powerful JavaScript pattern that leverages event bubbling to handle events efficiently.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: 1) preventDefault():
>> Prevents the default action that the browser would normally perform for an event.
>> Does NOT stop the event from bubbling.

2) stopPropagation():
>> Stops the event from bubbling up (or capturing down) the DOM tree.
>> Does NOT prevent the default browser action.

