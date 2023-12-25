import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

export default function Servers() {
        const [games, setGames] = useState([]);
        const gameNames = ['Minecraft', 'Rust', 'FiveM']; // Add more game names as needed
      
        useEffect(() => {
          gameNames.forEach(gameName => {
            axios.get(`https://eager-handbag-fish.cyclic.app/${gameName}`)
              .then(response => {

                
               
                if (!response.data.error) {

                  if (response.status === 200 && response.data) {
                    // Generate a unique ID for the game
                    const playerLength = response.data.players.length;
                    const gameWithId = { ...response.data, id: gameName, online: playerLength, gametitle: gameName };
                    
                      setGames(games => {
                        // Check if the game already exists in the array
                        const gameExists = games.some(game => game.id === gameWithId.id);
                        if (!gameExists) {
                          // If the game doesn't exist, add it to the array
                          return [...games, gameWithId];
                        } else {
                          // If the game exists, return the existing array
                          return games;
                        }
                      });

                  } else {
                    console.log(response.data)
                  }
                  
                } else {

                  const gamesWithId = { ...response.data.error, id: gameName, gametitle: gameName, status: 'Offline'}
                  
                  setGames(games => {
                    // Check if the game already exists in the array
                    const gameExists = games.some(game => game.id === gamesWithId.id);
                    if (!gameExists) {
                      // If the game doesn't exist, add it to the array
                      return [...games, gamesWithId];
                    } else {
                      // If the game exists, return the existing array
                      return games;
                    }
                  });
                }

                }
                
              )
              .catch(error => {
                console.log(error);
              });
          });
        }, []);
      
        return (
          <>
            <Header />
            <div className='flex flex-col items-center text-center gap-8 pt-32'>
              <span className='font-bold text-3xl border-b-[1px] w-96 md:w-[34rem] lg:w-[42rem] '>Servers</span>


              <div className='flex flex-col gap-8 lg:flex-row items-center'>
                {games.map(game => (
                  <div className='bg-slate-500 rounded-lg shadow-md w-96 h-40 flex flex-col justify-center gap-2 hover:w-[25rem] hover:h-[11rem] ease-in-out duration-150' key={game.id}>
                    <h1>{game.gametitle}</h1>
                    <h2>{game.name}</h2>
                    {game.status != 'Offline' ? (
                      <>
                        <p>{game.online}/{game.maxplayers} Players</p>
                        <p>{game.ping}ms</p>
                      </>
                    ) : (
                      <>
                        <p className='text-red-600 text-lg font-bold drop-shadow-sm'>Server is offline</p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      }