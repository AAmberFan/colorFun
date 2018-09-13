import axios from 'axios';

export const loadColor = function () {
    return (dispatch)=>{
        return axios.get("http://www.colr.org/json/color/random")
            .then(res=>{
                dispatch(changeColor("#"+res.data.new_color));
            })
            .catch(error=>{
                console.log(error);
            })
    }
};

export const changeColor = function (color) {
    return {
        type: "CHANGE_COLOR",
        color:color
    }
};