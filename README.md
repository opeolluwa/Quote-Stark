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

