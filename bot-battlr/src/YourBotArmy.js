import React from 'react';
import './YourBotArmy.css';

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {

  const handleReleaseClick = (bot) => {
    releaseBot(bot);
  }

  const handleBotCardClick = (bot) => {
    releaseBot(bot);
  }

  const handleDischargeClick = async (bot) => {
    try {
      await fetch(`http://localhost:8001/bots/${bot.id}`, {
        method: 'DELETE'
      });
  
      const updatedArmy = army.filter(b => b.id !== bot.id);
      dischargeBot(updatedArmy);
      
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <section classname='YourBotArmy'>
      <h2 className='titlee'>Your Bot Army</h2>
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
            <button onClick={() => handleDischargeClick(bot)}>Discharge</button>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default YourBotArmy;
