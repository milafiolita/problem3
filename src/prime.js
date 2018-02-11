function fpb(bil){
  var pembagi=2;
  // looping dengan kondisi pembaginya kurang dari bilangan
  while (pembagi <= bil){
  // jika bilangan habis dibagi dengan pembagi dan tidak menghasilkan sisa / 0
    if (bil % pembagi == 0){
        // maka bilangan akan terus dibagi dengan pembagi
        bil /= pembagi;    
    }
    else{
        // dan jika bilangan masih ada sisa artinya pembagi akan ditambah trus sampai bisa dibagi
        pembagi++;
    }
  }
  return pembagi;
}
module.exports = fpb;
