# quotJS
**JavaScript onload random quote engine**

1. Refrence the build *stylesheet* **(quot.css)** or the minified version **(quote.min.css)** in the `<head> ... <\head>` element. 
```html
<head>
...
 <link rel="stylesheet" href="quot/pack/dist/css/quot.min.css"/>
 ...
 </head>
 ```

2. Refrence the *JavaScript* **(quot.js)** file or the minified version *(quote.min.js)* Just before the closing tag of `<body>...</body>` element
```html
<body>
 ...
 <script src="quot/pack/dist/js/quot.min.js"></script>
</body>
```

3. Move the **data.json** to the root directory or same directory as **index.html**

4. Markup an element which will be the *quote* container. E.g :
```html
<div id="exampleId"></div>
```

5. Intialize by passing the **HTML *Node ID*** as function parameter to the initializer **QUOT.init("exampleId")**.
```html 
 <script> QUOT.init("exampleId")</script>
 ```

Also, you can initialize the script in your *main.js* file thus :

```JavaScript
QUOT.init("exampleId")
```





## Source Control
[version 0.00](https://github.com/opeolluwa/quotJS/tree/main/V0.00)
  * created : October 21, 2020
  * updated : October 23, 2020
  
 [version 0.10]()
 * Pulled from [version 0.00](https://github.com/opeolluwa/quotJS/tree/main/V0.00), November 20, 2020
 * updated: November 21 2020
 * progress : November 30, 2020. 946 _quotes_ acquired😋
 * progress :December 01, 2020 1045 _quotes_ acquired is *ECMA-404*, *RFC 7159* & *RFC 8259*  **JSON Specification**  compliant



## Goal track
- [x] Use **.json** file as database
- [x] ![100%](https://progress-bar.dev/100?title=Reach-1000-+-quotes)
- [ ] Incorporate on focus animation
- [ ] Offer on [CDN](https://www.google.com/search?q=cdn&oq=cdn&aqs=chrome..69i57j0i67j69i60l2j5i44.2641j0j1&sourceid=chrome-mobile&ie=UTF-8)
