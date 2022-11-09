
    // function show()
    // {
    //     let p2 = document.getElementById('p2');
    //     let p3 = document.getElementById('p3');
    //     let btn = document.getElementById('btn');

    //     if(p2.style.display == 'none')
    //     {
    //         p2.style.display = 'block';
    //         p3.style.display = 'block';
    //         btn.innerHTML = 'Read less';
    //     }

    //     else
    //     {
    //         p2.style.display = 'none';
    //         p3.style.display = 'none';
    //         btn.innerHTML = 'Read More';

    //     }
    // }

//     window.addEventListener('load', () =>{
//         let amt = localStorage.getItem('amount');

//         if(parseInt(amt) >=0)
//         {
//             document.getElementById('fundtext').innerHTML = amt;
//         }

//         else{
//             document.getElementById('fundtext').innerHTML = 0;
//         }

//         let don = localStorage.getItem('donator');

//         if(parseInt(don) >=0)
//         {
//             document.getElementById('donatortext').innerHTML = don;
//         }

//         else{
//             document.getElementById('donatortext').innerHTML = 0;
//         }
        


//     });



    let show = () =>
    {
        
        let p2 = document.getElementById('p2');
        let p3 = document.getElementById('p3');
        let btn = document.getElementById('btn');

        if(p2.style.display == 'none')
        {
            p2.style.display = 'block';
            p3.style.display = 'block';
            btn.innerHTML = 'Read less';
        }

        else
        {
            p2.style.display = 'none';
            p3.style.display = 'none';
            btn.innerHTML = 'Read More';

        }
    }



    

    
   
