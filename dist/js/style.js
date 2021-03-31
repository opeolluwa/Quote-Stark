 let stylesheet;
 export default stylesheet = {
  "@font-face": [
    { fontFamily: "quotfont", src: "url(/5.ttf)" },
    { fontFamily: "quotrfont", src: "url(/7.ttf)" }
  ],
  "@-webkit-keyframes text-focus-in": {
    "0%": { WebkitFilter: "blur(12px)", filter: "blur(12px)", opacity: 0 },
    "100%": { WebkitFilter: "blur(0)", filter: "blur(0)", opacity: 1 }
  },
  "@keyframes text-focus-in": {
    "0%": { WebkitFilter: "blur(12px)", filter: "blur(12px)", opacity: 0 },
    "100%": { WebkitFilter: "blur(0)", filter: "blur(0)", opacity: 1 }
  },
  "quot": {
    fontSize: "110%",
    fontWeight: 300,
    fontFamily: "quotrfont",
    textAlign: "center",
    marginBottom: "1rem",
    maxWidth: "60%",
    marginLeft: "20%",
    WebkitAnimation: "text-focus-in 1000ms  1 both",
    animation: "text-focus-in 1000ms cubic-bezier(.55, .085, .68, .53) 1 both"
  },
  "quot:after,\nquot:before": { fontSize: "100%" },
  "quot:after": { content: '"\\00A0\\201D"' },
  "quot:before": { content: '"\\201C\\00A0"' },
  "quotr": {
    textAlign: "center",
    display: "block",
    fontSize: "80%",
    fontFamily: "quotrfont",
    color: "#6c757d"
  },
  "quotr:before": { content: '"\\2014\\00A0"' }
}

