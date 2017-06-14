# TypingJs
Easiest library for typing effect(443 bytes)
Use 'new typing(elementSelector,text)' for using;
CSS styles for cursor:
'
.cursor{
  font-weight:bold;
  -webkit-animation: cursorAnim 0.7s infinite;
  -moz-animation: cursorAnim 0.7s infinite;
  animation: cursorAnim 0.7s infinite; 
}
@keyframes cursorAnim{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@-webkit-keyframes cursorAnim{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@-moz-keyframes cursorAnim{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
'