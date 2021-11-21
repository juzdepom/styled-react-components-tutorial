### SEE THE PROJECT HERE

https://juzdepom.github.io/styled-react-components-tutorial/

### YOUTUBE TUTORIAL

Styled Components Crash Course & Project by Traversy Media:

https://www.youtube.com/watch?v=02zO0hZmwnw

How to build a mobile responsive React project with styled-components

### TRAVERSY'S GITHUB PROJECT
https://github.com/bradtraversy/huddle_styled_components

### MY NOTES

Traversy explains that his main goal with styled components is not to use any classes.
He explains that he likes the advantage of knowing where all your styles are and that they are encapsulated.
If Traversy is doing projects in React or Next, he will usually used styled-components

2:20 <b>npm i styled-components</b>

12:00 talks about the ThemeProvider from styled-components which allows you to access different global themes from your individual styled components

In App.js...

```javascript
import { ThemeProvider } from 'styled-components';
```

and return this element encircling everything...

<ThemeProvider theme = {theme}>

and create a const...

```javascript
const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  }
}
```

In order to access the global themes in styled components such as Header.styled.js...

```javascript
import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    padding: 40px 0;
`
```
15:00 talks about the GlobalStyles which is pretty much like App.css

How to accept props in styled component, but if have no props, show a default value 👇

```javascript
background-color: ${({ bg }) => bg || '#fff'};
```

How to pass in props into the styled component 👇 

```javascript
<Button bg='#ff0099' color='#fff'>
```

27:30 - Traversy starts talking about media queries for mobile responsiveness
An example styled component with a media query 👇

```javascript
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
```

and the const theme object in App.css 👇...

```javascript
const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px'
}
```

43:30 <b>npm i react-icons</b>

If you ever want to use FontAwesome with React, this is useful

```javascript
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
```
and then call them like this 👇 

```javascript
<FaTwitter />
```
