import * as React from "react";
import styled from "styled-components";
import QrScanner from "qr-scanner";

const SQRCodeScannerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  margin: 0 auto !important;
  background: rgb(0, 0, 0);
`;

const SQRCodeScannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SCloseButton = styled.div`
  transition: all 0.2s ease-in-out;
  width: 25px;
  height: 25px;
  position: absolute;
  z-index: 10;
  top: 15px;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
  &:hover {
    opacity: 0.5;
  }
`;

const SFirstLine = styled.div`
  position: absolute;
  width: 90%;
  border: 1px solid rgb(255, 255, 255);
`;

const SSecondLine = styled(SFirstLine as any)`
  transform: rotate(90deg);
`;

export interface IQRCodeValidateResponse {
  error: Error | null;
  result: any | null;
}

interface IQRCodeScannerProps {
  onValidate: (data: string) => IQRCodeValidateResponse;
  onScan: (data: any) => void;
  onError: (error: Error) => void;
  onClose: () => void;
}

const QRCodeScanner = (props: IQRCodeScannerProps) => {
  const stopRecording = async () => {
    qrScanner?.stop();
  };

  const handleScan = (data: string) => {
    if (data) {
      const { result, error } = props.onValidate(data);
      if (result) {
        stopRecording();
        props.onScan(result);
      } else {
        handleError(error);
      }
    }
  };

  const handleError = (error: Error | null) => {
    if (error) {
      props.onError(error);
    }
  };

  const onClose = async () => {
    try {
      await stopRecording();
      props.onClose();
    } catch (error) {
      handleError(error);
    }
  };

  // const videoElem: React.RefObject<HTMLVideoElement> = React.useRef(null);
  let videoElem: HTMLVideoElement | undefined;
  let qrScanner: QrScanner | undefined;
  const videoRef: React.RefCallback<HTMLVideoElement> = React.useCallback(node => {
    if (node !== null) {
      videoElem = node;
      qrScanner = new QrScanner(videoElem, result => handleScan(result.data), {
        'highlightScanRegion': true,
        'highlightCodeOutline': true,
      });
      qrScanner.setCamera('user');
      qrScanner.setInversionMode("both");
      qrScanner.start();
    }
  }, []);

  return (
    <SQRCodeScannerContainer>
      <SCloseButton onClick={onClose}>
        <SFirstLine />
        <SSecondLine />
      </SCloseButton>
      <SQRCodeScannerWrapper>
        <video ref={videoRef} />
        <div>
          Hold the phone close to the camera and then slowly move it backward
        </div>
      </SQRCodeScannerWrapper>
    </SQRCodeScannerContainer>
  );
}

export default QRCodeScanner;
