import React from 'react';
import '../App.css';


class TopButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          is_visible: false
        };
      }

      componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
          scrollComponent.toggleVisibility();
        });
      }

      toggleVisibility() {
        if (window.pageYOffset > 300) {
          this.setState({
            is_visible: true
          });
        } else {
          this.setState({
            is_visible: false
          });
        }
      }

      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

  render(){
    const { is_visible } = this.state;
    return (
      <div >
        {is_visible && (
          <div className="scroll-to-top" onClick={() => this.scrollToTop()}>

          
          <a href="" id="return-to-top"><i  id="return-to-top" class="fa fa-arrow-circle-up" aria-hidden="true"></i></a>
      
          </div>
        )}
      </div>
    );
  }
}
export default TopButton;