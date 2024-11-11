
This is a self-contained **IIFE** (Immediately Invoked Function Expression) that implements infinite scrolling to fetch quotes from an API. Let’s break down each part of the code to understand how it works in detail:

### 1. **IIFE (Immediately Invoked Function Expression)**
```javascript
(function () {
    // Code...
})();
```
An **IIFE** runs immediately after it’s defined. This pattern is often used to create a private scope for variables and functions, preventing them from polluting the global scope.

---

### 2. **Selecting Elements from the DOM**
```javascript
const quotesEl = document.querySelector('.quotes');
const loaderEl = document.querySelector('.loader');
```
Here, two DOM elements are selected:
- `quotesEl`: The container where the quotes will be displayed.
- `loaderEl`: A loader element (likely a spinner or some visual indicator) that will show up when data is being fetched from the API.

---

### 3. **Fetching Quotes from the API**
```javascript
const getQuotes = async (page, limit) => {
    const API_URL = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
    const response = await fetch(API_URL);
    // handle 404
    if (!response.ok) {
        throw new Error(`An error occurred: ${response.status}`);
    }
    return await response.json();
}
```
- **getQuotes**: This is an **asynchronous function** that fetches quotes from the API. It takes two parameters:
  - `page`: The page number to fetch.
  - `limit`: The number of quotes per page.
- **API URL**: The URL is constructed dynamically using the `page` and `limit` parameters.
- **Error Handling**: If the response from the server is not `ok` (i.e., a status other than 200), an error is thrown.
- **Returns**: The function returns the fetched data after parsing it into JSON.

---

### 4. **Displaying Quotes in the DOM**
```javascript
const showQuotes = (quotes) => {
    quotes.forEach(quote => {
        const quoteEl = document.createElement('blockquote');
        quoteEl.classList.add('quote');

        quoteEl.innerHTML = `
        <span>${quote.id})</span>
        ${quote.quote}
        <footer>${quote.author}</footer>
    `;

        quotesEl.appendChild(quoteEl);
    });
};
```
- **showQuotes**: This function takes an array of `quotes` and appends each one to the `quotesEl` container.
  - For each `quote`, a new `blockquote` element is created and assigned the class `quote`.
  - The content of each `quote` is dynamically inserted into the HTML using template literals (`${}`).
  - Each `quote` contains:
    - The `id` of the quote.
    - The actual quote text.
    - The author of the quote, wrapped in a `<footer>` element.

---

### 5. **Loader Display Functions**
```javascript
const hideLoader = () => {
    loaderEl.classList.remove('show');
};

const showLoader = () => {
    loaderEl.classList.add('show');
};
```
These two functions control the visibility of the loader:
- `hideLoader`: Removes the `show` class from the loader element, hiding it.
- `showLoader`: Adds the `show` class to the loader element, making it visible.

---

### 6. **Checking If More Quotes Are Available**
```javascript
const hasMoreQuotes = (page, limit, total) => {
    const startIndex = (page - 1) * limit + 1;
    return total === 0 || startIndex < total;
};
```
- **hasMoreQuotes**: This function checks if there are more quotes to load by comparing the current `startIndex` with the total number of quotes.
  - `startIndex`: The index of the first quote on the current page. Calculated as `(page - 1) * limit + 1`.
  - **Return Value**: 
    - If `total === 0` (meaning the total number of quotes hasn't been fetched yet), it returns `true`.
    - Otherwise, it checks if the `startIndex` is less than `total` to determine if there are more quotes to fetch.

---

### 7. **Loading Quotes with a Delay**
```javascript
const loadQuotes = async (page, limit) => {
    showLoader();

    setTimeout(async () => {
        try {
            if (hasMoreQuotes(page, limit, total)) {
                const response = await getQuotes(page, limit);
                showQuotes(response.data);
                total = response.total;
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            hideLoader();
        }
    }, 500);
};
```
- **loadQuotes**: This function loads quotes for a given page and limit.
  - First, the loader is shown using `showLoader()`.
  - **setTimeout**: Introduces a 0.5-second delay before fetching quotes to simulate network latency.
  - **Try-Catch Block**: Used to handle any errors that occur while fetching the quotes.
    - **If there are more quotes** (`hasMoreQuotes()` returns `true`), it fetches them from the API and displays them using `showQuotes()`.
    - The total number of quotes (`response.total`) is stored for future checks.
  - Finally, the loader is hidden with `hideLoader()`.

---

### 8. **Scroll Event Listener**
```javascript
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5 &&
        hasMoreQuotes(currentPage, limit, total)) {
        currentPage++;
        loadQuotes(currentPage, limit);
    }
}, { passive: true });
```
- An event listener is added to the `window` to detect when the user scrolls.
  - The `scrollTop` property gives the number of pixels that have been scrolled from the top.
  - `scrollHeight` is the total height of the page, and `clientHeight` is the height of the visible part of the page.
  - If the sum of `scrollTop` and `clientHeight` is within 5 pixels of `scrollHeight`, it means the user has scrolled close to the bottom.
  - **If there are more quotes to load** (`hasMoreQuotes()`), it increments `currentPage` and calls `loadQuotes()` to fetch the next page of quotes.
  - **passive: true** is used to improve performance by allowing the browser to process scrolling faster.

---

### 9. **Initialization**
```javascript
loadQuotes(currentPage, limit);
```
Finally, the script is initialized by calling `loadQuotes()` for the first page. This loads the initial set of quotes when the page is first loaded.

---

### **Summary**
- The script fetches quotes from an API and displays them on the page.
- When the user scrolls near the bottom, more quotes are fetched automatically, simulating infinite scrolling.
- The loader is shown while new quotes are being fetched, and it hides once they are loaded.
- Error handling is built in to manage potential issues with the API request.

This creates a smooth, user-friendly experience where content loads dynamically without requiring the user to manually request more data.