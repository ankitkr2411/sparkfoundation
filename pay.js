function pay() {

    var name = jQuery('#name').val();
    var email = jQuery('#email').val();
    var contact = jQuery('#contact').val();
    var amt = jQuery('#amt').val();
    var id = Math.floor(10000000 + Math.random() * 90000000);
    id = "OID"+id

    var options = {
        "key": "rzp_test_KTatJ8FpcN3Dc1",
        "amount": amt * 100,
        "currency": "INR",
        "name": "S Charity",
        "description": "A Solution for Poor Child Education",
        "image": "https://cdn.dribbble.com/userupload/3000719/file/original-da4a03bf50562a068dff070bc691f9dc.jpg?compress=1&resize=752x",
        // "account_id": "acc_Ef7ArAsdU5t0XL",
        // "order-id": id,
        "handler": function (response) {
            // console.log(response);
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature)
            jQuery.ajax({
                success:function(result){

                    let amtsum;
                    if(parseInt(localStorage.getItem('amount')) >= 0)
                    {
                        let am = parseInt(localStorage.getItem('amount'));
                        amtsum = am+parseInt(amt);
                        
                    }

                    else{
                        amtsum = parseInt(amt);
     
                    }

                    localStorage.setItem("amount",amtsum);


                    let donasum;
                    if(parseInt(localStorage.getItem('donator')) >= 0)
                    {
                        let dona = parseInt(localStorage.getItem('donator'));
                        console.log(dona);
                        donasum = dona+1;
                        
                    }

                    else{
                        donasum = 1;

                        
                    }

                    console.log(donasum);
                    localStorage.setItem("donator",donasum);
                     window.location.href="thanks.html"
                    
                }
            })
        },

        "prefill": {
            "name": name,
            "email": email,
            "contact": contact
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
    });
    rzp1.open();
}