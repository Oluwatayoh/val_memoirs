import React, { Component } from 'react'
import ImgList from './ImageComponent/ImgList'
// import cred from './cred.js';
import logo from '../assets/logo.PNG'

export default class ImageShow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imgs: []
        }
    }

    componentDidMount() {
        fetch('https://api.unsplash.com/photos/?client_id=f3c4dd0154dbb1786399b01b6ff72f8a2a858b01637d0cee2e760bfb3ffbfb24')
            .then(res => res.json())
            .then(data => {
                this.setState({ imgs: data });
            })
            .catch(err => {
                console.log('Error happened during fetching!', err);
            });
    }


    render() {
        return (
            <div>
                <div className="logo_container">
                    <img className="logo" alt="logo" src={logo} />
                </div>
                <div className="main-content">
                    <ImgList data={this.state.imgs} />
                </div>
            </div>
        )
    }
}
