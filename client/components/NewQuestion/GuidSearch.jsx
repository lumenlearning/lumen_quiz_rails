import React from 'react';
import Outcomes from '../../outcomes.json';
var Typeahead = require('react-typeahead').Typeahead;

export default class GuidSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOpen: false,
      closeBtn: false
    }
  }

  placeholder() {
    if (this.props.guid) {
      return this.props.guid.short_title != '' ? `Learning Outcome: ${this.props.guid.short_title}` : 'Click to Add Learning Outcome'   
    }
  }

  render() {
    return (
      <div className="typeahead-wrapper">
        <Typeahead
          options = {Outcomes}
          maxVisible = {10}
          filterOption = 'short_title'
          displayOption = 'short_title'
          onOptionSelected = {(obj) => this.saveGuid(obj)}
          placeholder = {this.placeholder()}
          ref={'typeahead'}
          customClasses={{
            typeahead: "topcoat-list",
            input: "topcoat-text-input",
            results: "topcoat-list_container",
            listItem: "topcoat-list_item",
            token: "topcoat-button",
            customAdd: "topcoat-addme"
          }}
          onKeyUp = {() => this.closeBtn()}
        /> 
        {this.renderCloseBtn()}
        <br />
      </div>
    )
  }

  closeDropdown() {
    this.refs.typeahead.setState({
      entryValue: '',
      selection: null,
      visible: []
    })
    this.setState({closeBtn: false})
  }

  closeBtn() {
    if (this.refs.typeahead.state.entryValue === '') {
      this.setState({closeBtn: false})
    } else {
      this.setState({closeBtn: true})
    }
  }

  renderCloseBtn() {
    if (this.state.closeBtn) {
      return <div className="typeahead-btn"><div onClick={() => this.closeDropdown()}>x</div></div>
    }
  }

  saveGuid(obj) {
    this.props.handleUpdateGuid(obj)
    this.refs.typeahead.setState({
      entryValue: '',
      selection: null,
      visible: []
    })
    this.setState({closeBtn: false})
  }
}