import React from 'react';
import '../style/Step3.css'

class CheckBoxList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    props.values.map((v, i) => {

      return (this.state[v] = false)
    })
  }

  onChange(key, value) {
    this.setState({ [key]: value }, (state) => {
      return (this.props.onChange(this.state))
    })
  }

  render() {
    return (
      <div className="list-group-item">
        {this.props.values.map((value, i) => (
          <div className="checkox" key={i}>
            <label>
              <input
                onChange={(e) => this.onChange(value, e.target.checked)}
                type='checkbox'
                value={this.state[value]}
              />
              {value}
            </label>
          </div>
        ))}
      </div>
    )
  }
}

export default CheckBoxList