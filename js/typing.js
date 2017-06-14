const cursorSymbol = '/',
      cursorClass = 'cursor';
class typing{
  constructor(el,text='TEST',auto=true){
    this.el = document.querySelector(el);
    this.text=text;
    this.currentText='';
    this.isFinished=false;
    this.cursor='<span class="'+cursorClass+'">'+cursorSymbol+'</span>'
    this.auto = auto;
    this.currentSymb = 0;
    this.el.innerHTML=this.cursor;
    var self = this;
    if(this.auto){
      self.timer = setInterval(function(){self.type(self)},100);
    }
  }
  type(_this=this){
    var self = _this;
    self.currentText=self.text.substr(0,self.currentSymb);
    self.el.innerHTML=self.currentText+self.cursor;
    self.currentSymb+=1;
    if(self.currentText.length==self.text.length)clearInterval(self.timer)
  }
}