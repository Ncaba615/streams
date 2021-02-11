import React from "react";

//bottom component is using gapi to first load functionality 
//then load client init once that process is done using clientId and scope 
class GoogleAuth extends React.Component {

    state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "35676966658-fma86vju80b7pj6t95rjsivs5qgl2m0j.apps.googleusercontent.com",
        scope: "email",
      }).then (() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() })
      });
    });
  }

  renderAuthButton() {
      if (this.state.isSignedIn === null ) {
          return <div>I don't know if we are signed in</div>
      } else if ( this.state.isSignedIn) {
          return <div>I am signed in!</div>
      } else {
          return <div>I am not signed in</div>
      }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
