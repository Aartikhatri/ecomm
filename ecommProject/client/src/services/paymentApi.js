
import axios from 'axios';

const url = 'http://localhost:8000'

export const payment = async (data) => {
    try {

        return await axios.post(`${url}/order`, data).then((res) => handleRozarpay(res.data.data));

    } catch (error) {
        console.log('error', error.message);
    }
};



const handleRozarpay = async (data) => {
 
    const options = {
        key : 'rzp_test_jdwGaYlxNAdsEx' ,
        amount : Number(data.amount) ,
        currency : data.currency , 
        name : 'Book-Chor',
        order_id : data.id,
        handler : async function  (response){
          return  await axios.post(`${url}/verify`, { response : response} ).then((res) => console.log(res , '25' ) );
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            
        }
    };


    const rzp = new window.Razorpay(options);

    rzp.open()
}