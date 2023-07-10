import React, { Component } from "react";
import {connect} from 'react-redux';
// import danhSachGheDangDat from './../redux/BaitapDatVeReducer';

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.dayGhe.danhSachGhe.map((seat, index) => {
      let cssReserved = "";
      // đặt đk disable cho ghế đã đc đặt
      let disabled = false;
      // th: ghế đã bị đặt
      if (seat.daDat) {
        cssReserved = "gheDuocChon";
        disabled = true;
      }

      // th: ghế đang muốn đặt 
      // let cssGheDangDat = '';
      // let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === seat.soGhe);
      // if (indexGheDangDat !== -1) {
      //   cssGheDangDat = 'gheDangChon';
      // }

      return (
        <button
          onClick={() => {
            
          }}
          disabled={disabled}
          className={`ghe ${cssReserved} `}
          key={index}
        >
          {seat.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.dayGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber">
        {hang.soGhe}
      </button>
    })};

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div className="ml-4">
          {this.props.dayGhe.hang} {this.renderSoHang()}
      </div>
    } else {
      return (
        <div>
          {this.props.dayGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return <div className="text-white mr-3 mt-4">{this.renderHangGhe()}</div>
  };
}

const mapStateToProps = state => {
  return {
    // danhSachGheDangDat: state.BaitapDatVeReducer.danhSachGheDangDat
  }
}

export default connect (mapStateToProps)(HangGhe);