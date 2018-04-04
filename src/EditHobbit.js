import React from "react";
import { connect } from "react-redux";
import { patchHobbit } from './actions'


class EditHobbit extends React.Component {

  state = {
    id: this.props.id,
    name: this.props.name,
    title: this.props.title,
    key_skill: this.props.key_skill
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      id: nextProps.id,
      name: nextProps.name,
      title: nextProps.title,
      key_skill: nextProps.key_skill
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.patchHobbit(this.state)
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>{this.state.name}</div>
        <form onSubmit={this.handleSubmit}>
          <h5> {this.state.name} </h5>
          <label>
            Title
          </label>
          <input name="title" value={this.state.title} onChange={this.handleChange}/>
          <label>
            Key Skill
          </label>
          <input name="key_skill" value={this.state.key_skill} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}


export default connect((state)=>{
  return {
    id: state.hobbits.selectedHobbit.id,
    name: state.hobbits.selectedHobbit.name,
    key_skill: state.hobbits.selectedHobbit.key_skill,
    title: state.hobbits.selectedHobbit.title
}
}, { patchHobbit })(EditHobbit)
