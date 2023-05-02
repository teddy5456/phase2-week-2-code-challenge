import React, { Component } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './App.css'

class App extends Component {
  state = {
    army: []
  }

  handleAddBot = (bot) => {
    if (!this.state.army.some(b => b.id === bot.id)) {
      this.setState(prevState => ({ army: [...prevState.army, bot] }));
    }
  }

  handleReleaseBot = (bot) => {
    this.setState(prevState => ({ army: prevState.army.filter(b => b.id !== bot.id) }));
  }

  handleDischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: 'DELETE' })
      .then(() => {
        this.setState(prevState => ({ army: prevState.army.filter(b => b.id !== bot.id) }));
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <div className='mainTitle'>
        <h1>
        <img src='https://robohash.org/similiquereprehenderitet.png?size=300x300&set=set1'></img>
          Bot Battlr</h1>
        </div>
         <YourBotArmy
          army={this.state.army}
          releaseBot={this.handleReleaseBot}
          dischargeBot={this.handleDischargeBot}
        />
        <BotCollection addBot={this.handleAddBot} />
      </div>
    );
  }
}

export default App;
