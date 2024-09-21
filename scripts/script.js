// Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector('main');

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do
// this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;

// Add a class of flex-ctr to mainEl. // Hint: Use the Element.classList API.
mainEl.classList.add(`flex-ctr`);

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuE1 = document.getElementById(`top-menu`);
console.log(topMenuEl)
// Set the height of the topMenuEl element to be 100%.


// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom
// property.


// Add a class of flex-around to topMenuEl.
