import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class FileUploader extends Component {
  state = { files: [] }

  onDrop(files) {
    this.setState({ files });
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            accept="image/jpeg, image/png"
            onDrop={this.onDrop.bind(this)}>
            <p>Try dropping a jpg or png image here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
}

export default FileUploader;
