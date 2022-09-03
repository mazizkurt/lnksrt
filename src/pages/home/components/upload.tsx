import { useDropzone } from "react-dropzone";
import React, { useCallback, useMemo, useState } from "react";
import { Alert } from "react-bootstrap";
const baseStyle = {
  padding: 20,
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#B0B0B2",
  borderStyle: "dashed",
  color: "rgb(91, 140, 219)",
  outline: "none",
  height: 200,
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};
type Props = {};
function Upload({}: Props) {
  const [error, setError] = useState([]);
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    setFiles(acceptedFiles);
  }, []);
  const onDropRejected = (e: any) => {
    setError(e);
  };
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ onDrop, maxFiles: 3, onDropRejected });
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  return (
    <>
      <div className="container h-50  ">
        <div
          {...getRootProps({ style: style })}
          className={`d-lg-flex flex-wrap scroll    ${
            files.length === 0 &&
            "flex-column align-items-center justify-content-center flex-wrap "
          }   mb-4`}
        >
          <input {...getInputProps()} />

          {files.length > 0 ? (
            files.map((file: any, index) => (
              <div className="bg-white rounded p-3 d-flex align-items-center justify-content-center me-3 mb-2 mt-2">
                <span className="text-theme">{file.name}</span>
              </div>
            ))
          ) : (
            <>
              <p className="text-gray">
                Bazı dosyaları buraya sürükleyip bırakınƒ veya dosyaları seçmek
                için tıklayın.
              </p>
              <p className="text-gray">
                Ücretsiz sürüm için 3'den fazla dosya kabul edilmemektedir.
              </p>
            </>
          )}
        </div>
        {error.length > 0 && (
          <Alert key={"danger"} variant={"danger"}>
            Ücretsiz sürüm için 3'den fazla dosya yükleyemezsiniz.
          </Alert>
        )}
      </div>
    </>
  );
}

export default Upload;
