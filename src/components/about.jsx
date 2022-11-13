import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        {/* <h2>About</h2> */}
        <br />
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-sm-12 col-md-4 col-lg-4 text-center">
              <div className="about">
                <b>Sejarah</b>
                <p>
                  Persekutuan Doa Keluarga Katolik Indonesia (PDKKI) Melbourne
                  adalah sebuah organisasi yang berada di bawah naungan Keluarga
                  Katolik Indonesia (KKI) Melbourne. Menurut sejarahnya,
                  Persekutuan Doa (PD) ini pertama kali dibentuk pada tahun 1997
                  dengan nama PD Santa Maria, dan pada bulan Juli 1998
                  diresmikan menjadi bagian dari KKI dengan nama PDKKI
                  Melbourne.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 text-center">
              <div className="about">
                <b>Tujuan</b>
                <p>
                  PDKKI Melbourne, dengan segenap potensi yang berlandaskan pada
                  iman dan ajaran Gereja Katolik, memiliki tujuan utama untuk
                  membawa para anggota mengenal Yesus yang hidup, serta
                  merasakan cinta kasih Allah yang sempurna dalam bimbingan Roh
                  Kudus demi mencapai kehidupan yang kudus.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 text-center">
              <b>Kegiatan</b>
              <p>
                PDKKI Melbourne mengadakan kegiatan Persekutuan Doa (PD) rutin
                seminggu sekali yang mencakup doa, pujian dan penyembahan, misa,
                adorasi serta pengajaran/sharing/diskusi. Di samping itu,
                beberapa kegiatan lain PDKKI yang dapat membangun dan membentuk
                kehidupan rohani para anggotanya untuk mencapai tujuan di atas
                adalah:
                <br />- Kebangunan Rohani Katolik (KRK)
                <br />- Malam Penyegaran Rohani (MPR)
                <br />- Seminar Hidup Baru (SHB)
                <br />- Retret tahunan PDKKI Melbourne
              </p>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default About;
