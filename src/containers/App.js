import React,{Component} from 'react';
import {connect} from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import {setSearchField, requestBots} from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestBots.robots,
		isPending: state.requestBots.isPending
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
			onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
			onRequestBots : () => dispatch(requestBots())
		}	
}

class App extends Component{

	componentDidMount(){
		this.props.onRequestBots();
		// console.log(this.props.store)
		// fetch('https://jsonplaceholder.typicode.com/users')
		// .then(response =>  response.json())
		// .then(users => {this.setState({ robots: users})});
	}

	render(){
			const {searchField, onSearchChange, robots, isPending} = this.props;
			const filteredRobots  = robots.filter (robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		return isPending ?
		<h1 className = 'tc'>Loading...</h1>:
		(
			<div className='tc'>
				<h1 className ='f1 	bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>BotBuddies</h1>
				<SearchBox searchChange = {onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots  = {filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		); 
	}	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);