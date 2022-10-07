import React from 'react';

import { useQrReadFromUrl } from './hooks';


export const QrReaderFromUrl = ({
  containerStyle,
  scanDelay,
  className,
  onResult,
}) => {
  const { onChange, url } = useQrReadFromUrl({
    scanDelay,
    onResult,
  });

  return (
    <section className={className} style={containerStyle}>
      <div
      >
        <input onChange={onChange} type="file" accept="image/*" />
        <br />
        <img
          src={url}
          style={{
            width: "100px",
            height: "100px"
          }}
        />
      </div>
    </section>
  );
};

