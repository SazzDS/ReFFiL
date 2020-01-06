import React, {Component} from 'react';
import axios from 'axios';

class GET extends Component {
	constructor(props) {
		super(props)

		this.state = {
	      posts: [],
	      errorMsg: ''
		}
	}

	componentDidMount() {
		axios
			.get('https://siksah.com/staff/showStaffList',{
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo'
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
			.then(response => {
				console.log(response)
				this.setState({ posts: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

	render() {
		const { posts, errorMsg } = this.state
		return (
			<div>
				List of posts
				{posts.length ? posts.map(post => <div key={post.sl_staff}>{post.name}</div>) : null}
		        {errorMsg ? <div>{errorMsg}</div> : null}
			</div>
		)
	}
}

export default GET