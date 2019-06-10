import React from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return <div>{ReactHtmlParser(this.props.paymentresponse)}</div>;
  }
}
