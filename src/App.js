import './App.css';
import User from './components/User';
//import Header from './components/Header';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://www.pinterest.com/pin/714524297133415038/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const friends = [
  {
    id: 1,
    name: "michael"
  },
  {
    id: 2,
    name: "dwight"
  },
  {
    id: 3,
    name: "pam"
  },
  {
    id: 4,
    name: "jim"
  }
]

function App() {
  return (
    <div className="mainDiv">

    <User 
    name={"Bilal"}
    surname={"Özdemir"}
    age={22}        //sent in string but requires number
    // isLogin={true} //if I don't send any info for 'isLogin' -> defaultProps will work
    friends={friends} //takes an array of objects
    address={{
      title: "Üsküdar/İstanbul",
      zip: 34699
    }}

    />

    </div>
  )
}

export default App;
