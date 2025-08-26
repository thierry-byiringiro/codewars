function bouncingBall(h,  bounce,  window) {
  if(bounce > 0 && bounce < 1){
      let multi = h * window;
      return Math.ceil(multi * bounce);
}else{
    return -1;
  }
}
console.log(bouncingBall(30.0, 0.66, 1.5))