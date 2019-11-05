import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

const ImportHar = ({ onDataLoad }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const reader = new FileReader();

    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        onDataLoad(data);
      } catch (error) {
        console.log('Error while parsing HAR file', error);
      }
    };

    acceptedFiles.forEach(file => reader.readAsText(file));
  }, [onDataLoad]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.har',
    multiple: false,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive
          ? <p>Drop the files here ...</p>
          : <p>Drag and drop a file here, or click to select file</p>
      }
    </div>
  );
};

ImportHar.propTypes = {
  onDataLoad: PropTypes.func.isRequired,
};

export default ImportHar;
