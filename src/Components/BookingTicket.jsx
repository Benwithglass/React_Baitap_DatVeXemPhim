import React from "react";
import "./../index.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "./../data/danhSachGhe.json"
import HangGhe from "./HangGhe";



const BookingTicket = () => {
  const renderHangGhe = () => {
    return danhSachGheData.map((dayGhe, index) => {
        return (
            <div key={index} >
                <HangGhe dayGhe={dayGhe} soHangGhe={index}/>
            </div>
        );
    });
  };

  return (
    <div className="tong">
      <div className="tong-bg">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1 className="title">MOVIE SEAT SELECTION</h1>
              <div className="layout-booking">
                <div className="layout-content">
                  <h3 className="d-flex justify-start">Fill The Required Details Below And Select Your Seats</h3>
                  <div className="">
                    <div className="register">
                      <div className="mb-3 flex">
                        {/* Name */}
                        <div className="name-form">
                          <label htmlFor className="form-label me-2">
                            <span className="text-white">Name</span>{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            className="form me-4"
                            id
                            aria-describedby="helpId"
                            placeholder
                          />
                        </div>
                        {/* Number of seats */}
                        <div className="seat-form">
                          <label htmlFor className="form-label me-2">
                            <span className="text-white">Number of Seats</span>{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            className="form"
                            id
                            aria-describedby="helpId"
                            placeholder
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success mt-4 mb-4"
                      >
                        Start Selecting
                      </button>
                      <div className="seat-legend">
                        <i class="fa-solid fa-square-full text-success me-1"></i>{" "}
                        <span>Selected Seat</span>
                        <i class="fa-solid fa-square-full text-danger me-1"></i>{" "}
                        <span>Reversed Seat</span>
                        <i class="fa-solid fa-square-full text-white me-1"></i>{" "}
                        <span>Empty Seat</span>
                      </div>
                    </div>
                    {renderHangGhe()}
                    <div className="booking-movie">
                      <div className="screen">
                        <h2>SCREEN THIS WAY</h2>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-light mt-2 mb-4 text-white"
                      >
                        Confirm Selection
                      </button>
                      <div className="layout-ghe">
                        <ThongTinDatGhe/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTicket;
