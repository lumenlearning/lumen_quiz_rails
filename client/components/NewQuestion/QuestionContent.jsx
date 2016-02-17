import React from 'react';
import TinyMCEInput from 'react-tinymce-input';

export default class QuestionContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  render() {
    return (
      <div id='tinymice'>
        <TinyMCEInput
          value={this.state.content}
          tinymceConfig={{
            plugins: 'link image lists preview table autoresize media preview',
            toolbar: ' bold italic | fontsizeselect | image media link | table | preview',
            menubar: false,
            media_live_embeds: true,
            selector: 'div#tinymice',
            body_class: 'custom_tinymce',
            fontsize_formats: '10pt 12pt 14pt 18pt 24pt 36pt',
            font_formats: 'Raleway, Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;AkrutiKndPadmini=Akpdmi-n'
          }}
          onChange ={(text) => this.handleQuestion(text)}
          className="tiny-form" 
        />
      </div>
    )
  }

  handleQuestion(text) {
    this.setState({
      content: text
    })
  }

}
