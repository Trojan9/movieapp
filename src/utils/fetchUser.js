export const fetchUser =()=>{
    
    return localStorage.getItem('user')!=='undefined'?JSON.parse(localStorage.getItem('user')):localStorage.clear();
    
}

export const randomIntFromInterval=(min, max) =>{ // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }