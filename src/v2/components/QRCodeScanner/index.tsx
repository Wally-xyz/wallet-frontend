import * as React from "react";
import QrScanner from "qr-scanner";

interface Props extends React.VideoHTMLAttributes<HTMLVideoElement> {
  validator(url: string): boolean;
  onSuccess(url: string): void;
  onFailure?(): void;
}

export function QRCodeScanner(props: Props) {
  const { validator, onSuccess, onFailure, ...rest } = props;

  const videoEl = React.useRef<HTMLVideoElement>(null);
  const scanner = React.useRef<QrScanner | null>(null);

  const onScan = React.useCallback(async (data: QrScanner.ScanResult) => {
    const validated = props.validator(data.data);

    if (validated) {
      onSuccess(data.data);
    } else {
      onFailure?.();
    }
  }, []);

  React.useEffect(() => {
    if (videoEl.current) {
      scanner.current = new QrScanner(videoEl.current, onScan, {
        highlightCodeOutline: true,
        highlightScanRegion: true,
      });
      scanner.current.setCamera("user");
      scanner.current.setInversionMode("both");
      scanner.current.start();
    }

    return () => {
      scanner.current?.stop();
    };
  }, [videoEl.current, onScan]);

  return <video {...rest} ref={videoEl} />;
}
