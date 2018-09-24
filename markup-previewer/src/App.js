import React from 'react';
import { Grid, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import marked from 'marked';

import './App.css';

//let { Grid, Row, Col, Button, Jumbotron } = ReactBootstrap;

/* Main app */
class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text:  
`# Welcome to a React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`
    }   
    
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.getMarkedText = this.getMarkedText.bind(this);
    this.clearText = this.clearText.bind(this);
    this.showPreview = this.showPreview.bind(this);
  }
  
  componentDidMount() {
    document.getElementById("preview").innerHTML = this.getMarkedText();
  };

  
  handleTextAreaChange(event){
    event.preventDefault();
    this.setState({text: event.target.value },
                 this.showPreview
                 );   
  };

  
  clearText() {
    this.setState({text: ""});
    document.getElementById("editor").value = "";
    document.getElementById("preview").innerHTML = "";
  };
  

  showPreview() {  
    document.getElementById("preview").innerHTML = this.getMarkedText();
  };

  
  getMarkedText(){
    return marked( this.state.text, 
      {
        renderer: new marked.Renderer(),
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: true,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      });
  }

  
  render() {
    return (
      <Jumbotron>
        <Grid> 
          <Row className="show-grid">
                 
            <Col xs={12} md={5}>
              <Button onClick={this.clearText} bsStyle="primary">Clear</Button>
              <textarea id="editor"
                onChange={this.handleTextAreaChange}
                defaultValue = {this.state.text}/> 
            </Col>
            <Col xs={12} md={7}>
              <div id="preview"></div>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    );
  }
}

export default App;
