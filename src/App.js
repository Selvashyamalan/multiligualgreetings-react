import {Component} from 'react'
import Language from './components/Language'
import Tabs from './components/Tabs'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  activeTabId = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  filteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = languageGreetingsList.filter(
      eachLanguage => eachLanguage.id === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const {activeTabId} = this.state
    const filteredProjects = this.filteredProjects()

    return (
      <div className="main-container">
        <h1 className="greetings">Multilingual Greetings</h1>
        <ul className="tab-container">
          {languageGreetingsList.map(tabDetails => (
            <Tabs
              key={tabDetails.id}
              tabDetails={tabDetails}
              clickTabItem={this.activeTabId}
              isActive={activeTabId === tabDetails.id}
            />
          ))}
        </ul>
        {filteredProjects.map(eachDetails => (
          <Language key={eachDetails.id} languageDetails={eachDetails} />
        ))}
      </div>
    )
  }
}

export default App
