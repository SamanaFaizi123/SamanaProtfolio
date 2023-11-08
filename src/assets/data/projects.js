import { v4 as uuidv4 } from 'uuid';
import TelegramImg from "../images/telimg.jpg";
 import GuessImg from "../images/gusseimg.jpg";
import ColorImg from "../images/color.jpg"
import ShopImg from "../images/shopimg .png"
import DiceImg from "../images/diceimg.jpg"
;

const projects = [
  {
    id: uuidv4(),
    name: 'Telegram Environment',
    desc:
      'I coded the internal environment of the Telegram program ,how to sign in,how to start telegram and change your profile.',
    Img: TelegramImg,
  },
  {
    id: uuidv4(),
    name: 'Guess Number',
    desc:
      'This is a fun website where the computer randomly generates numbers between 1 and 20 and we have to guess the correct number just like a game.',
    Img: GuessImg,
  },
  {
    id: uuidv4(),
    name: 'Color game',
    desc:
      'This is a color game website, to start this game first you must press a key on the keyboard,then the system will select a color,you will play this game according to the colors.',
    Img:ColorImg ,
  },
  {
    id: uuidv4(),
    name: "Tax payee",
    desc:
      'This site is about paying the shop tax,when we click on the shop tax detail button ,the shop tax amount is displayed,and when we cilck on pay tax button, the tax is paid.',
    Img: ShopImg,
  },
  {
    id: uuidv4(),
    name: 'Dice game',
    desc:
      'This an amazing game site, this is two-player game,when the first player clicks on the roll button ,the game starts,and if he clicks on the hold button,his score is recorded and it is the turn of player2 ,and the game continues in the same way. ',
    Img:DiceImg ,
  },
];

export default projects;
