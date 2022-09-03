import React from "react";
import Upload from "src/pages/home/components/upload";

type Props = {};

function Home({}: Props) {
  return (
    <div className="bg-theme w-100 min-vh-100 d-flex justify-content-center align-items-center text-white">
      <div className="text-center  align-item-center">
        <h1 className="text-primary fw-bold fs-1">
          Linkshort'a <span className="text-white">Hoşgeldiniz</span>
        </h1>
        <div className="text-white fs-6 mb-4">
          Hızlıca belgeni yükle arkadaşlarınla kolayca paylaş.
        </div>
        <div className="text-gray mb-5">
          Not: Yüklediğiniz fotoğraflar otomatik olarak
          ziplenecektir(arşivlenecektir).
        </div>
        <Upload />
      </div>
      <p className="text-gray mb-2 position-absolute bottom-0 text-center fs-7">
        Copyright @2022 Apithon
      </p>
    </div>
  );
}

export default Home;
