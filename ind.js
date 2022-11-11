
    //<<<This code is for fetching the UPDATED AMOUNT and UPDATED TOTAL DONATORS from LOCAL STORAGE and Setting them to the webpage.>>>


    // window.addEventListener('load', () =>{
    //     let amt = localStorage.getItem('amount');

    //     if(parseInt(amt) >=0)
    //     {
    //         document.getElementById('fundtext').innerHTML = amt;
    //     }

    //     else{
    //         document.getElementById('fundtext').innerHTML = 0;
    //     }

    //     let don = localStorage.getItem('donator');

    //     if(parseInt(don) >=0)
    //     {
    //         document.getElementById('donatortext').innerHTML = don;
    //     }

    //     else{
    //         document.getElementById('donatortext').innerHTML = 0;
    //     }
        
    // });



    //<<<This code is for activating the hamburger button for Tablet and Smartphone Screen.>>>

    const hamb=document.querySelector(".hamb");
    const navMenu=document.querySelector(".nav-menu2");

    hamb.addEventListener("click", ()=>{
        hamb.classList.toggle("active");
        navMenu.classList.toggle("active");
    })



    //<<<This code is for Hide and Unhide the About Us Content on button click for SmartPhone Screen.>>>
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



    

    
   