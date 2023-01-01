export const fetchUser =()=>{
    
    return localStorage.getItem('user')!=='undefined'?JSON.parse(localStorage.getItem('user')):localStorage.clear();
    
}
export const fetchMoviesLocal =()=>{
 return localStorage.getItem('movies')!=='undefined'?JSON.parse(localStorage.getItem('movies')):localStorage.clear();  
}
export const fetchMoviesLocalTopRated =()=>{
    return localStorage.getItem('topRated')!=='undefined'?JSON.parse(localStorage.getItem('topRated')):localStorage.clear();  
   }
   export const fetchMoviesLocalNaija =()=>{
    return localStorage.getItem('naija')!=='undefined'?JSON.parse(localStorage.getItem('naija')):localStorage.clear();  
   }
export const randomIntFromInterval=(min, max) =>{ // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }