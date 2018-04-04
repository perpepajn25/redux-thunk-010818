import React from "react";
import Hobbit from "./Hobbit";
import EditHobbit from "./EditHobbit";
import { connect } from "react-redux";
import { fetchHobbits } from './actions'

class HobbitsContainer extends React.Component {

  componentDidMount(){
    this.props.fetchHobbits()
  }

  render() {
    console.log(this.props)
    const hobsWithJobs = this.props.hobbits.map((jobbit) => {
      return <Hobbit {...jobbit} />
    })
    return (
      <div>
        <div className="logo">Jobbit</div>
        <EditHobbit />
        {this.props.loading ? <div> Loading... </div> : (
        <div className="hobbitsContainer">
          {hobsWithJobs}
        </div>)
      }
      </div>
    );
  }
}

export default connect((state)=> {
  console.log(state)
  return {
    hobbits: state.hobbits.hobbits,
    loading: state.hobbits.loading
  }
},
  { fetchHobbits })(HobbitsContainer)
