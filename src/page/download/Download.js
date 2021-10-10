import React from "react";
import "./Download.scss";
function Download() {
  const updatePackageInfo = [
    {
      date: "2021-09-23",
      oldVersion: "11.18",
      newVersion: "11.19",
    },
    {
      date: "2021-09-14",
      oldVersion: "11.17",
      newVersion: "11.18",
    },
    {
      date: "2021-08-25",
      oldVersion: "11.16",
      newVersion: "11.17",
    },

    {
      date: "2021-08-11",
      oldVersion: "11.15hotfix#1",
      newVersion: "11.16",
    },
    {
      date: "2021-07-22",
      oldVersion: "11.15",
      newVersion: "11.15hotfix#1",
    },
    {
      date: "2021-07-21",
      oldVersion: "11.14",
      newVersion: "11.15",
    },
  ];
  return (
    <>
      <div className='banner_download position-relative'>
        <div className='download_bg_blur'></div>
        <div className='download_bg' data-descr='holy shit'>
          <img
            src='https://cdn.vn.garenanow.com/web/lol-product/LOLwebsite/img/defaultbanner.jpg'
            alt='download'
          />
          <svg
            className='border_frame'
            viewBox='0 0 1456 208'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.7012 1.88667H1430.99L1454.27 28.4622V206.113H1.7012V1.88667Z'
              stroke='white'
            />
          </svg>
        </div>
      </div>
      <div className='d-flex account_download container justify-content-between my-5'>
        <div
          className='toRegister'
          style={{
            backgroundImage:
              "url(https://cdn.vn.garenanow.com/web/lol-product/LOLwebsite/img/banner/apply.jpg)",
          }}
        >
          <button className='download_btn'>Register</button>
          <h6>Garena account</h6>
        </div>
        <div
          className='toDownload'
          style={{
            backgroundImage:
              "url(https://cdn.vn.garenanow.com/web/lol-product/LOLwebsite/img/banner/download1.jpg)",
          }}
        >
          <button className='download_btn'>Download</button>
          <h6>As browser speed</h6>
        </div>
        <div
          className='toDownload_package'
          style={{
            backgroundImage:
              "url(https://cdn.vn.garenanow.com/web/lol-product/LOLwebsite/img/banner/download2.jpg)",
          }}
        >
          <button className='download_btn'>Download (fastest)</button>
          <h6>As GPC (fast)</h6>
        </div>
      </div>
      <div className='update_package container w-100 my-5'>
        <h4 className='py-2' style={{ color: "#b59668", fontWeight: "600" }}>
          <i className='bi bi-box me-2'></i>
          Update Packages
        </h4>
        <div className='table-container'>
          <table className='w-100'>
            <tr>
              <th>Date</th>
              <th>Old Version</th>
              <th>New Version</th>
              <th>Download</th>
            </tr>
            {updatePackageInfo.map((item, index) => (
              <tr key={index}>
                <td style={{ minWidth: "150px" }}>{item.date}</td>
                <td style={{ minWidth: "150px" }}>{item.oldVersion}</td>
                <td style={{ minWidth: "150px" }}>{item.newVersion}</td>
                <td>
                  <div className='download_btn'>Donwload update</div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <div className='recommendation container my-5'>
        <h4 className='py-2' style={{ color: "#b59668", fontWeight: "600" }}>
          <i className='bi bi-sliders me-2'></i>
          Recommended Configuration
        </h4>
        <div className='table-container'>
          <table className='w-100'>
            <tr>
              <th>Configuration</th>
              <th>Mininum Configuration</th>
              <th>Recommended Configuratio</th>
            </tr>
            <tr className='py-2'>
              <td>CPU</td>
              <td>2GHz</td>
              <td>4GHz Dual Core or 3GHz</td>
            </tr>
            <tr>
              <td>RAM</td>
              <td>4 GB</td>
              <td>8 GB or more</td>
            </tr>
            <tr>
              <td>HDD</td>
              <td>10 GB available</td>
              <td>14 GB available</td>
            </tr>
            <tr>
              <td>VGA</td>
              <td>DirectX 9.0c or higher</td>
              <td>
                DirectX 9.0c or higher. Nvdia GeForce 8800/AMD Radeon HD 5670 or
                equivalent (512 MB)
              </td>
            </tr>
            <tr>
              <td>OS</td>
              <td>Windows XP SP3 or higher</td>
              <td>Windows 7 or higher</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Download;

//

//           style={{backgroundImage:'url('https://cdn.vn.garenanow.com/web/lol-product/LOLwebsite/img/banner/download1.jpg')'}}>
