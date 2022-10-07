import { useState, useRef, useCallback } from 'react';
import { BrowserQRCodeReader } from '@zxing/browser';


import { isMediaDevicesSupported, isValidType } from '../QrReader/utils';


export const useQrReadFromUrl = ({
  onResult,
  scanDelay: delayBetweenScanAttempts,
}) => {
  const controlsRef = useRef(null);
  const [url, setUrl] = useState('data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=')

  const onChange = useCallback((e) => {
    const codeReader = new BrowserQRCodeReader(null, {
      delayBetweenScanAttempts,
    });
    if (
      !isMediaDevicesSupported() &&
      isValidType(onResult, 'onResult', 'function')
    ) {
      const message =
        'MediaDevices API has no support for your browser. You can fix this by running "npm i webrtc-adapter"';

      // window.URL.createObjectURL(this.files[0])
      onResult(null, new Error(message), codeReader);
    }
    codeReader.decodeFromImageUrl(window.URL.createObjectURL(e.target.files[0])).then((result) => {
      if (isValidType(onResult, 'onResult', 'function')) {

        onResult(result, {}, codeReader);
      }
    })
      .catch((error) => {
        if (isValidType(onResult, 'onResult', 'function')) {
          onResult(null, error, codeReader);
        }
      });
    setUrl(window.URL.createObjectURL(e.target.files[0]))

    // console.log(window.URL.createObjectURL(e.target));
    // codeReader.decodeFromImageUrl()

  }, [controlsRef])

  return {
    url,
    onChange
  }
}