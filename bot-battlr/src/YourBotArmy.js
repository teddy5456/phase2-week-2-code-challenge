import React from 'react';
import './YourBotArmy.css';

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {

  const handleReleaseClick = (bot) => {
    releaseBot(bot);
  }

  const handleBotCardClick = (bot) => {
    dischargeBot(bot);
  }

  return (
    <section>
      <h2 className='titlee'>
        Your Bot Army</h2>
      <div className='BotArmy'>
        {army.length === 0 && <p>No bots enlisted. Enlist some!</p>}
        {army.map(bot => (
          <div key={bot.id} className='BotItem2' onClick={() => handleBotCardClick(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Class: {bot.bot_class}</p>
            <p>Health: {bot.health}</p>
            <p className='p2'>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default YourBotArmy;
