class widget{
  constructor(){
    this.baseCSS = "site-widget";
  }
  parse(value){

  }
}

class sponsorWidget extends widget{
  constructor(name, desc, url){
    super(); //always call super in the contructor if using extends
    this.name = name;
    this.desc = desc;
    this.url = url;
  }
  render(){
    let link = this._buildLink(this.url);
    let parsename = this.parse(this.name);
    let css = this._buildCss(this.baseCSS);
  }
  _buildLink(url){
    //_ means that this method should not be called on the public
  }
  _buildCss(css){
    
  }
}

let sWidget = sponsorWidget(name, desc,url);
sWidget.render();
