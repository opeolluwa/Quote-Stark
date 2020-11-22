# quotJS
**JavaScript onload random quote engine**

1. Refrence the build *stylesheet* **(quot.css)** or the minified version **(quote.min.css)** in the `<head> ... <\head>` element. 
```html
<head>
...
 <link rel="stylesheet" href="quot.min.css"/>
 ...
 </head>
 ```
2. Refrence the *JavaScript* **(quot.js)** file or the minified version *(quote.min.js)* Just before the closing tag of `<body>...</body>` element
```html
<body>
 ...
 <script src="quot.min.js"></script>

</body>
```
3. Intialize by passing the **HTML *Node ID*** as function parameter to the initializer **$quot()**.
```html 
 <script> $quot("exampleId")</script>
 ```

Also, you can initialize the script in your *main.js* file thus :

```JavaScript
$quot(exampleId)
```





## Source Control
[version 0.00](https://github.com/opeolluwa/quotJS/tree/main/V0.00)
  * created : October 21, 2020
  * updated : October 23, 2020
  
 [version 0.10]()
 * Pulled from [version 0.00](https://github.com/opeolluwa/quotJS/tree/main/V0.00)
 * updated: November 21 2020
 

## Goal track
- [x] Use **.json** file as database
- [ ]    ![29%](https://progress-bar.dev/29?title=Reach **1000+** _quotes_) Attained
- [ ] Incorporate on focus animation
- [ ] Offer on [CDN](https://www.google.com/search?q=cdn&oq=cdn&aqs=chrome..69i57j0i67j69i60l2j5i44.2641j0j1&sourceid=chrome-mobile&ie=UTF-8)
