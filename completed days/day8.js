// import React from 'react'
// import ReactDOM from'react-dom'

// // class App extends React.Component {
// //     //declaring state
// //     state = {
// //         count: 0,
// //     }

// //     render (){
// //         // accessing the state value
// //         const count = this.state.count
// //         return (
// //             <div className="App">
// //                 <h1>{count}</h1>
// //                 <button onClick={() => this.setState({ count: this.state.count + 1})} >
// //                     Add One
// //                 </button>
// //                 <button onClick = {() => this.setState({ count : this.state.count - 1})} >Minus One</button>
// //             </div>
// //         )
// //     }

// // }

// class App extends React.Component {
//     //declaring state
//     state = {
//         count : 0
//     }
// //method which add one to the state

//     addOne = ( ) => {
//         this.setState({ count: this.state.count + 1 })
//     }

//     //method which subtract one to the state

//     minusOne = () => {
//         this.setState({ count: this.state.count - 1})
//     }

//     render(){

//         //accessing the state value
//         const count = this.state.count
//         return(
//             <div className="App">
//                 <h1>{count}</h1>
//                 <div>
//                     <button className='btn btn-add' onClick={this.addOne} >
//                         +1
//                     </button> {' '}
//                     <button className='btn btn-minus' onClick={this.minusOne}>-1</button>
//                 </div>

//             </div>
//         )
//     }


// }


// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)



// import React from 'react'
// import ReactDOM from 'react-dom'

// class App extends React.Component {
//     //declaring state
//     state = {
//         image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg',
//     }
//     changeAnimal = () => {
//         let dogURL = 
//         'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
//         let catURL =
//         'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
//         let image = this.state.image === catURL ? dogURL : catURL
//         this.setState ({ image })
//     }

//     render () {
//         // accessing the state value
//         const url = this.state.count
//         return (
//             <div className="App">
//                 <h1>30 Days Of React</h1>
//                 <div className="animal">
//                     <img src={this.state.image} alt='animal' />
//                 </div>
//                 <button onClick={this.changeAnimal} className='btn btn-add'>
//                     Change 
//                 </button>
//             </div>
//         )
//     }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

import React from "react";
import ReactDOM  from "react-dom";

//Function to show dare year

const showDate = (time) =>{
    const months =[
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

    const month = months[time.getMonth()].slice(0,3)
    const year = time.getFullYear()
    const date = time.getDate()
    return `${month} ${date}, ${year}`
}

//User Card Component
const UserCard = ({ user: {firstName, lastName, image } }) => (
    <div className="user-card">
        <img src="" alt="" />
        <h2>
            ${firstName}
            ${lastName}
        </h2>
    </div>
)

// A button component
const Button = ({ text, onClick, style }) => (
    <button style={style} onClick={onClick} >
        {text}
    </button>
)

// CSS styles in JavaScript Object
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

//class based Component

class Header extends React.Component {
    constructor(props) {
        super(props)
        //the code inside the constructor run before any other code
    }

    render() {
        console.log(this.props.data);
        const{
            welcome,
            title,
            subtitle,
            author: { firstName, lastName},
            date,
        } = this.props.data
    
    return (
        <header style={this.props.styles} >
            <div className="header-wrapper">
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


const Count = ({ count, addOne, minusOne}) => (
    <div>
        <h1>{count}</h1>
        <div>
            <Button text="+1" onClick = {addOne} style= {buttonStyles} />
            <Button text="-1" onClick = {minusOne} style= {buttonStyles} />
        </div>
    </div>
    
)

//TechList Component
//class base component

class TechList extends React.Component {
    constructor (props){
        super(props)
    }
    render() {
        const {techs} = this.props
        const techsFormatted = techs.map((tech) => <li key={tech} >{tech}</li>)
        return techsFormatted
    }
}

//Main component
//class based component
class Main extends React.Component{
 constructor (props) {
    super(props)
 }
 render () {
    const {
        techs,
        user,
        greetPeople,
        handleTime,
        changeBackground,
        count,
        addOne,
        minusOne,
    } = this.props
    return(
        <main>
            <div className="main-wrapper">
                <p>Prerequisite to get started react.js:</p>
                <ul>
                    <TechList techs = {techs} />
                </ul>
                < UserCard user = {user} />
                <Button 
                text = 'Greet People'
                onClick = {greetPeople}
                style = {buttonStyles} 
                />
                <Button 
                text = 'Show Time'
                onClick = {handleTime}
                style = {buttonStyles} 
                />
                <Button 
                text = 'Change Background'
                onClick = {changeBackground}
                style = {buttonStyles} 
                />
                <Count count={count} addOne = {addOne} minusOne = {minusOne} />
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


//app Component
//class based component
class App extends React.Component {
    state = {
        count:0,
        styles: {
            backgroundColor: '',
            color: '',
        },
    }
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

        const month = months[time.getMonth()].slice(0,3)
        const year = time.getFullYear()
        const date = time.getDate()
        return `${month} ${date},${year}`
    }

    addOne = () => {
        this.setState({ count: this.state.count + 1})
    }

    //method which subtract one to the state
    minusOne = () => {
        this.setState({ count:this.state.count - 1})
    }

    handleTime = () => {
        alert(this.showDate(new Date()))
    }

    greetPeople = () => {
        alert('Welcome to 30 Days Of React Challange, 2023')
    }

    changeBackground = () => {
        //todo fix this
  this.setState(this.backgroundColor === '' ? 'yellow' : 'green')
    
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
            const date = new Date()
            // copying the author from data object to user variable using spread operator
            const user = { ...data.author, }
            return (

                <div className="app">
                    {this.state.backgroundColor}
                    <Header data={data} />
                    <Main 
                    user={user}
                    techs={techs}
                    handleTime={this.handleTime}
                    greetPeople={this.greetPeople}
                    changeBackground= {this.changeBackground}
                    addOne = {this.addOne}
                    minusOne = {this.minusOne}
                    count= {this.state.count}
                    />
                    <Footer date={new Date()} />
                </div>
            )
        }
}




const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)




