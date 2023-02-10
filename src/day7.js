// //?Remember Pure JS class and child
// //?imagine this what we import from REact package
// // class Component {
// //     constructor (props) {}
// // }

// //?this how we make class components bt inheriting from the parent

// // class Child extends Component {
// //     constructor (props) {
// //         super (props)
// //     }
// // }


// //! Functional React component

// import React from 'react'
// import ReactDOM from 'react-dom'





// //!Header Component
// //!Functional component

// // const Header = () => (
// //     <header>
// //         <div className="header-wrapper">
// //             <h1>Welcome to 30 days of React</h1>
// //             <h2>Getting Started React</h2>
// //             <h3>JavaScript Library</h3>
// //             <p>Engin Caglar</p>
// //             <small>Feb 9, 2023</small>
// //         </div>
// //     </header>
// // ) 

// //!!!! CLASS  BASE COMPONENT
// class Header extends React.Component{
//     constructor(props){
//         super(props)
//         //the code inside the constructor run before any other code
//     }
//     render(){
//         return(
//             <header>
//             <div className='header-wrapper'>
//             <h1>Welcome to 30 Days Of React</h1>
//             <h2>Getting Started React</h2>
//             <h3>JavaScript Library</h3>
//             <p>Asabeneh Yetayeh</p>
//             <small>Oct 7, 2023</small>
//         </div>
//             </header>
//         )
//     }
// }



// //** TechList Component */
// //** functional Component */

// // const TechList = () => (
// //     const techs = ['HTML', 'CSS', 'JavaScript']
// //     const techsFormatted = techs.map ((tech) => <li key={tech}>{tech}</li> )
// //     return techsFormatted
// // )


// //**TechList Component
// //**Class base component

// class TechList extends React.Component {
//     constructor (props) {
//         super(props)
//     }
//     render() {
//         const techs = ['HTML', 'CSS', 'JavaScript']
//         const techsFormatted = techs.map ((tech) => <li key={tech}>{tech}</li> )
//         return techsFormatted
//     }
// }

// //*Main Component
// //*Functional Component

// // const Main = () => ()
// //     <main>
// //         <div className="main-wrapper">
// //             <p>Prerequisite to get started react.js:</p>
// //             <ul>
// //                 <TechList />
// //             </ul>
// //         </div>
// //     </main>
// // )

// //*Main Component
// //*Class Component
// class Main extends React.Component {
//     constructor (props){
//         super(props)
//     }
//     render(){
//         return(
//             <main>
//         <div className='main-wrapper'>
//           <p>Prerequisite to get started react.js:</p>
//           <ul>
//             <TechList />
//           </ul>
//         </div>
//       </main>
//         )
//     }
// }

// //* Footer Component
// //* Functional component

// // const Footer = () => (
// //     <footer>
// //         <div className="footer-wrapper">
// //             <p>Copyright 2023</p>
// //         </div>
// //     </footer>
// // )

// //*Footer Component
// //*Class base component

// class Footer extends React.Component {

//     constructor (props) {
//         super(props)
//     }
//     render(){
//         return(
//             <footer>
//                 <div className='footer-wrapper'>
//                 <p>Copyright 2020</p>
//                 </div>
//             </footer> 
//         )
//     }
// }


// //! The App, or the parent component or the container component
// //! Functional Component

// // const App = () => (
// //     <div className="app">
// //         <Header />
// //         <Main />
// //         <Footer />
// //     </div>
// // )

// //! Class Component App
// class App extends React.Component {
//     constructor (props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div className="app">
//                 <Header />
//                 <Main />
//                 <Footer />
//             </div>
//         )
//     }
// }









// const rootElement = document.getElementById('root')
// ReactDOM.render (<App />, rootElement)


//TODO ACCESSING PROPS IN CLASS COMPONENTS (using this keyword)

// import React from 'react'
// import ReactDOM from 'react-dom'

// //class base component

// class Header extends React.Component {
//     constructor(props) {
//         super(props)
//         //the codde inside the constructor before any other code
//     }

//     //?? instead of writin al the time this.data. ...  we will use constructing
//     // render(){
//     //     return (
//     //         <header>
//     //             <div className="herader-wrapper">
//     //                 <h1>{this.props.data.welcome}</h1>
//     //                 <h2>{this.props.data.title}</h2>
//     //                 <h3>{this.props.data.author.firstName} {this.props.data.author.lastName}</h3>
//     //                 <small>{this.props.data.date}</small>
//     //             </div>
//     //         </header>
//     //     )
//     // }

//     render() {
//         console.log(this.props.data);
//         const {
//             welcome,
//             title,
//             subtitle,
//             author: {firstName, lastName },
//             date,
//         } = this.props.data

//         return (
//             <header>
//                 <div className="header-wrapper">
//                     <h1>{welcome}</h1>
//                     <h2>{title}</h2>
//                     <h3>{subtitle}</h3>
//                     <p>{firstName} {lastName}</p>
//                     <small>{date}</small>
//                 </div>
//             </header>
//         )
//     }
// }

// const App = () => {
//     const data = {
//         welcome: 'Welcome to 30 Days Of React',
//     title: 'Getting Started React',
//     subtitle: 'JavaScript Library',
//     author: {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     },
//     date: 'Oct 7, 2020',
//     }
//     return (
//         <div className="app">
//             <Header data={data} />
//         </div>
//     )
//    }


//    const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)



//todo Methods in Class based component


// import React from 'react'
// import ReactDOM from 'react-dom'

// //class based component

// class Header extends React.Component {
//     greetPeople = () => {
//         alert ('Welcome to 30 days of react Challange, 2023')
//     }
//     render(){
//         return (
//             <header>
//                 <div className="header-wrapper">
//                     <h1>Welcome to 30 Days Of React</h1>
//                     <h2>Getting Started React</h2>
//                     <h3>JavaScript Library</h3>
//                     <p>Asabeneh Yetayeh</p>
//                     <small>Oct 7, 2020</small>
//                     <button onClick={this.greetPeople} > Greet </button>
//                 </div>
//             </header>
//         )
//     }

// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<Header />, rootElement)


import React from 'react'
import ReactDOM from 'react-dom'
// import asabenehImage from './src/images/9008063.jpeg'

//Function to show month date year

//USer Card Component
const UserCard = ({user: {firstName, lastName, image} }) => (
    <div className="user-card">
        <img src={image} alt={firstName} />
    </div>
)

//A button component
const Button = ({ text, onClick, style}) => (
    <button style={style} onClick={onClick} >{text}</button>
)

//CSS styles in JS Object
const buttonStyles = {
    backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

//class based component
class Header extends React.Component {
    constructor (props) {
        super (props)
        //the code inside the constructor run before any pther cpde
    }

    render () {
        console.log(this.props.data);
        const {
            welcome,
            title,
            subtitle,
            author: {firstName, lastName},
            date,
        } = this.props.data

        return (
            <header>
                <div className='header-wrapper'>
                    <h1>{welcome}</h1>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>
                        {firstName} {lastName}
                    </p>
                    <small>{date}</small>
                </div>
            </header>
        )
    }
}

//TechsList component
//class based component

class TechList extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      const { techs } = this.props
      const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
      return techsFormatted
    }
  }
  
  // Main Component
  // Class Component
  class Main extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <main>
          <div className='main-wrapper'>
            <p>Prerequisite to get started react.js:</p>
            <ul>
              <TechList techs={this.props.techs} />
            </ul>
            <UserCard user={this.props.user} />
            <Button
              text='Greet People'
              onClick={this.props.greetPeople}
              style={buttonStyles}
            />
            <Button
              text='Show Time'
              onClick={this.props.handleTime}
              style={buttonStyles}
            />
          </div>
        </main>
      )
    }
  }
  
  // Footer Component
  // Class component
  class Footer extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <footer>
          <div className='footer-wrapper'>
            <p>Copyright {this.props.date.getFullYear()}</p>
          </div>
        </footer>
      )
    }
  }
  
  class App extends React.Component {
    showDate = (time) => {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
  
      const month = months[time.getMonth()].slice(0, 3)
      const year = time.getFullYear()
      const date = time.getDate()
      return ` ${month} ${date}, ${year}`
    }
    handleTime = () => {
      alert(this.showDate(new Date()))
    }
    greetPeople = () => {
      alert('Welcome to 30 Days Of React Challenge, 2020')
    }
    render() {
      const data = {
        welcome: 'Welcome to 30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library',
        author: {
          firstName: 'Asabeneh',
          lastName: 'Yetayeh',
        },
        date: 'Oct 7, 2020',
      }
      const techs = ['HTML', 'CSS', 'JavaScript']
  
      // copying the author from data object to user variable using spread operator
      const user = { ...data.author}
  
      return (
        <div className='app'>
          <Header data={data} />
          <Main
            user={user}
            techs={techs}
            handleTime={this.handleTime}
            greetPeople={this.greetPeople}
          />
  
          <Footer date={new Date()} />
        </div>
      )
    }
  }
  
  const rootElement = document.getElementById('root')
  ReactDOM.render(<App />, rootElement)

