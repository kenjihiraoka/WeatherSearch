import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = { term: '' };
		//fix the bug with this.onInputChange
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event){
		//tells the browser don't submit the form
		event.preventDefault();

		//we need to go and fetch the data
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render(){	
		return(
			//we used a form instead of a div, cuz we need to implement just one handler to submit
			//if we used a div, we'll need to implement 2 handlers to submit
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five-day forecast in your favorites cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn" >
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

//we used null cuz we know redux is maintaning some state but this container don't care for it
export default connect(null, mapDispatchToProps)(SearchBar);