// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: true}

  buttonClicked = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  getButtonText = () => {
    const {isLightMode} = this.state
    return isLightMode ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const buttonText = this.getButtonText()
    const {isLightMode} = this.state
    const renderClassName = isLightMode ? 'light-mode' : 'dark-mode'
    const textHeading = isLightMode ? 'light-heading' : 'dark-heading'

    return (
      <div className="bg-container">
        <div className={renderClassName}>
          <h1 className={textHeading}>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.buttonClicked}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
