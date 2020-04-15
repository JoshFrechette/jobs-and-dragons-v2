import React from 'react';
import OracleBox from '../assets/OracleBox.png';
import GuardianBox from '../assets/GuardianBox.png';
import BardBox from '../assets/BardBox.png';
import { usePlayerContext } from '../contexts/PlayerContext';
import { useUserContext } from '../contexts/UserContext';
// import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

// Dialogue box content needs to be replaced with dynamic content determined by props
const Dialogue = (props) => {
  const [gameState] = usePlayerContext();
  const [state] = useUserContext();
  console.log(gameState);
  const imgStyle = {
    float: 'right',
    width: '100px',
  };
  const modalStyle = {
    color: 'white',
    backgroundColor: 'black',
    position: 'absolute',
    top: '33%',
    left: '33%',
    width: '700px',
    height: '300px',
    padding: '20px',
  };
  if (gameState.currentMap === 'dungeon') {
    console.log('dialogue', props);
    return (
      <div className='modal-content' style={modalStyle}>
        <div style={{}}>
          <div className='row'>
            <img style={imgStyle} src={OracleBox} alt='Profile of the Oracle' />
            <h4>The Oracle of Secivres Reerac</h4>
          </div>
          <div className='row'>
            <p>
              Welcome {state.user.name} to the beginning of your journey! I am
              the Oracle of Secrives Reerac and I am here to guide you on your
              quest. Are you ready to begin?
            </p>
            <ul>
              <li>
                {gameState.currentMap === 'dungeon' ? (
                  <Link
                    to='/userinfo'
                    onClick={(e) => {
                      // e.preventDefault();
                      props.handleAccept();
                    }}
                  >
                    Yes!
                  </Link>
                ) : gameState.currentMap === 'guild' ? (
                  <Link to='/joblisting'>Yes!</Link>
                ) : null}
              </li>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleDecline();
                  }}
                >
                  Um...not yet...
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (gameState.currentMap === 'guild') {
    return (
      <div className='modal-content' style={modalStyle}>
        <div style={{}}>
          <div className='row'>
            <img
              style={imgStyle}
              src={GuardianBox}
              alt='Profile of the Guardian'
            />
            <h4>The Guardian of Namuh Secruoser</h4>
          </div>
          <div className='row'>
            <p>
              Well, you look like you're looking for some action...but are you
              ready? Guess there's only one way to find out! Are you up to
              hunting some of the finest game in the kingdom?
            </p>
            <ul>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleAccept();
                  }}
                >
                  Let's do it!!
                </a>
              </li>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleDecline();
                  }}
                >
                  You're scary, maybe next time.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (gameState.currentMap === 'playhouse') {
    return (
      <div className='modal-content' style={modalStyle}>
        <div style={{}}>
          <div className='row'>
            <img
              style={imgStyle}
              src={BardBox}
              alt='Profile of the Bard'
            />
            <h4>The Javan Playhouse Bard</h4>
          </div>
          <div className='row'>
            <p>
              Ah, welcome {state.user.name}! I've heard the rumours and I guessed that you would come seeking my aid.
              I'm taking an ...intermission, in writing my next masterpiece. Are you ready to write your first script?
            </p>
            <ul>
            <Link
                    to='#!'
                    onClick={(e) => {
                      // e.preventDefault();
                      props.handleAccept();
                    }}
                  >
                    I'm ready!
                  </Link>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleDecline();
                  }}
                >
                  I think I need more practice first.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Dialogue;
