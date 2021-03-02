import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';
import API from "./utils/API";

class App extends Component {

  state = {
    users: [],
    search: "",
    original: [],
    ascending: true
  }

  componentDidMount() {
    API.getRandomUser()
      .then(users => {
        this.setState({
          users: users.data.results,
          original: users.data.results
        })
      })
  }

  handleSearch = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    console.log(value);
    const filteredFirst = this.state.original.filter(user => {
      return user.name.first.toLowerCase().includes(value)
    })
    this.setState({
      users: filteredFirst
    })
  }

  handleSort = () => {
    if (this.state.ascending) {

      const sortedUsers = this.state.users.sort((a, b) => {
        return a.name.first.localeCompare(b.name.first)
      })
      this.setState({ users: sortedUsers, ascending: false })
    } else {
      const sortedUsers = this.state.users.sort((a, b) => {
        return b.name.first.localeCompare(a.name.first)
      })
      this.setState({ users: sortedUsers, ascending: true })
    }
  }

  render() {

    return (
      <div>
        <Header />

        <div className="container">

          <Search search={this.state.search} handleSearch={this.handleSearch} />
          <br />
          <Table users={this.state.users} handleSort={this.handleSort} />

        </div>

      </div>
    )
  }
}

export default App;
