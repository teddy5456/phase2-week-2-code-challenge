import React, { Component } from 'react';
import './BotCollection.css'

class BotCollection extends Component {
  state = {
    bots: []
  }

  componentDidMount() {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => {
        this.setState({ bots: data });
      })
      .catch(error => console.error(error));
  }

  handleAddBot = (bot) => {
    this.props.addBot(bot);
  }

  render() {
    return (
      <div className='BotCollection'>
      <h2>Bot Collection</h2>
      <ul className='BotList'> 
        {this.state.bots.map(bot => (
          <li key={bot.id} className='BotItem' onClick={() => this.handleAddBot(bot)}>
            <h3>{bot.name}</h3>
            <img src={bot.avatar_url} alt={`${bot.name}'s avatar`} />
            <p>{bot.bot_class}</p>
            <p>Health:{bot.health}</p>
            <p>Damage:{bot.damage}</p>
            <p>Armor:{bot.armor}</p>
            <div className='catchphrase'>
              <p>{bot.catchphrase}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    );
  }
}

export default BotCollection;
