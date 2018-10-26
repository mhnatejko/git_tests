const obj = {
    a: {
        x: { 
            m: 2
        },
        y: {
            m: 3,
            n: 4
        }
    },
    b: {
        m: 1
    },
    c: { 
        x: { 
            q: {
                m : 100
            }
        },
        y: { 
            q: {
                m : 100
            }
        },
        z: {
            q: {
                m : 100
            }
        },
    }    
}

function req(obj){
    for(el in obj){
        if(typeof obj[el] === "object"){
            req(obj[el])
        }else{
            console.log(obj[el])
        }
    }
}

req(obj);