
const stateDefault = {
    danhSachGheDangDat: [
        // vd: {soGhe: 1, gia: 9 tỉ}

    ]
};

const BaiTapDatVeReducer = (state = stateDefault, action) => {
    switch (action.type){
        default: return {...state}
    }
}

export default BaiTapDatVeReducer;