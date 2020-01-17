# chif-example

## Overview

This is an example of using C-Hear's file technology called **CHIF** (.chif) in a React App.

### What is a .chif?

CHIF stands for *C-Hear Intelligent File*. It was created by the company **C-Hear** to help make *websites and apps more digitally accessible for people with disabilities and visual impairments*.

- A .chif is made up of audio, text and metadata inside an image. 

- The small file size takes away the need to host videos on a video hosting site and allows the file to live right on your site/app. 

- There's no need to worry about slow loading due to the amount of images you may have on your site. An eCommerce site can use this easily and without loading issues.

### How to create a .chif?

Go to C-Hear's **CHIF Builder**, create it, download and save it in a directory on your computer. 
  
Follow the link below:
 
 https://chearprod.appspot.com/builder

### How to use a .chif in a React App?

In the index.html file in the following section: 
```html 
<head>
````

1. Add the following:

 ```html 
 <link rel="stylesheet" href="https://chifplayercdn.blob.core.windows.net/player2/chearPlayer_1.0.0.css" />
 ````

 ```html
 <script src="https://chifplayercdn.blob.core.windows.net/player2/chearPlayer_1.0.0.js"></script>
 ````

 2. Make sure to add the .chif you created to the desired directory.

 ![chif directory setup](/src/images/chiffile.png?raw=true "Chif File Setup")

 3. To use a **.chif** in a *Class Component*, first import it as you would an image and to get it to run, add the following function inside **componentDidMount()**:
 

 ```js
 window.chifPlayer.streamFiles();
````
 
Example of using a **.chif** in a *Class Component*:

 ```js
 import React from 'react';

import chif from '../chifs/blackpug.chif';

export default class ClassEx extends React.Component {
	componentDidMount() {
		window.chifPlayer.streamFiles();
	}
	render() {
		return (
			<div class='page'>
				<h3>Class Example</h3>
				<chear src={chif}></chear>
			</div>
		);
	}
}
````

4. To use a **.chif** in *Functional Components*, first import it as you would an image and to get it to run, add the following function inside the **useEffect** hook:

 ```js
 window.chifPlayer.streamFiles();
````

Example of using a **.chif** in a *Functional Component*:

```js
import React, { useEffect } from 'react';

import chif from '../chifs/blackpug.chif';

const FuncEx = props => {
	useEffect(() => {
		window.chifPlayer.streamFiles();
	}, []);
	return (
		<div class='page'>
			<h3>Functional Example</h3>
			<chear src={chif}></chear>
		</div>
	);
};

export default FuncEx;
````
![Chif React Demo](/src/gifs/appgif.mov?raw=true "Chif React Demo")

