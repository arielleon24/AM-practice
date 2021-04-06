const delayPrint = (arg) => {
  const arr = arg.split(" ")
  let timer = 0
  arr.forEach(element => {
    timer += 1000
    setTimeout(()=> console.log(element), timer);
  });
  
}

delayPrint('4311o th3r3 w0r1d')


//Goal is to have all 3 words in one string printed out to console with delay of 1 sec