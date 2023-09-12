function signup(){
    var housenumber=document.getElementById('houseno').value 
    var ownername=document.getElementById('owname').value 
    var mambers=document.getElementById('members').value 
    var psw1=document.getElementById('psw1').value 
    var psw2=document.getElementById('psw2').value

    const family={
        housenumber,
        ownername,
        mambers,
        psw1,
        psw2,
        balance:0
    }
    if(psw1==psw2){
        if(housenumber in localStorage){
            alert('user already registerd')
            document.getElementById('houseno').value=''
            document.getElementById('owname').value='' 
            document.getElementById('members').value='' 
            document.getElementById('psw1').value='' 
            document.getElementById('psw2').value=''
        }else if(housenumber.length!=0 && ownername.length!=0 && mambers.length!=0 && psw1.length!=0){
        localStorage.setItem(housenumber,JSON.stringify(family))
        window.location='./index.html'
        }else{
            alert('please fill')
        }
    }else{
        alert('confirm password isnt match')
    }
}

function login(){
    var housenum=document.getElementById('housenum').value 
    var psw3=document.getElementById('psw3').value 

    if(housenum in localStorage){
        details=JSON.parse(localStorage.getItem(housenum))
        if(psw3==details.psw2){
            localStorage.setItem('loginid',housenum)
            window.location='./home.html'
            
            
        }else{
            alert('incurrect password')
        }
    }else(
        alert('no such users')
    )
}