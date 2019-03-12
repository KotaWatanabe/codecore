function maskify(cc) {
    let password = cc.toString();
    let passwordArray = password.split('');
    for(let i = 0; i < password.length-4; i++){
        passwordArray[i] = "#";
    }
    return passwordArray.join('');

    
  //   const openWord = cc.slice(-4);
    
  }
  // console.log(maskify("mtakmtak"));
  console.log(maskify(12345678));
