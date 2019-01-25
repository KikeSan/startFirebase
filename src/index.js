import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import reducers from './reducers'
import firebase from 'firebase'

var config = {
	apiKey: 'AIzaSyAxt-MnqrVcRWrPeAcWYt_ApueQIuiokUU',
	authDomain: 'todoapp-c0094.firebaseapp.com',
	databaseURL: 'https://todoapp-c0094.firebaseio.com',
	projectId: 'todoapp-c0094',
	storageBucket: 'todoapp-c0094.appspot.com',
	messagingSenderId: '372140339810'
}
var defaultApp = firebase.initializeApp(config)
var database = firebase.database()
console.log(defaultApp.name)
var starCountRef = firebase.database().ref('task/')
starCountRef.on('value', function(snapshot) {
	//updateStarCount(postElement, snapshot.val());
	console.log('result:::', snapshot.val())
})

const store = createStore(reducers)

const root = document.getElementById('root')
root
	? ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			root
	  )
	: false
