
const cards = (state, action) => {
    switch (action.type){
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date
            });

            return state.concat([newCard]);
        default:
            return state ||[];
    }
};

const store = Redux.createStore(Redux.combineReducers({
    cards: cards
}));


const App = (props) => {
    return (
        <div className="App">
            {props.children}
        </div>
    );
};

const Sidebar = React.createClass({
    render() {
     return (
         <div className="Sidebar">
            <h2>list of Decks</h2>
            <ul>
            { this.props.decks.map( (deck, i) => 
                <li Key={i}> {deck.name} </li>
            )}
            </ul>
            {this.props.addingDecks && <input ref="Add"/>}
        </div>);   
    }
});
ReactDOM.render(<App> 
        <Sidebar decks={[{name:'deck1'}, {name:'deck2'}]} addingDecks={false} />
    </App>,document.getElementById('root'));