import {Component} from 'react';
import {connect} from 'react-redux';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {hasError: false};
	}

	static getDerivedStateFromError(error) {
		return {hasError: true};
	}

	async forceLogout() {
		const {dispatch} = this.props;

		await dispatch.auth.logout();
	}

	render() {
		if (this.state.hasError) {
			this.forceLogout();
		}

		return this.props.children;
	}
}

export default connect()(ErrorBoundary);
