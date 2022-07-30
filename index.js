let arr=new stack("aloo","kachaloo", "kahan", "gaye", "the")
function stack(){
    Object.defineProperty(this, "length",{
        vale:0,
        writable:true,
        enumerable:false,
    })
    this.length=arguments.length
    for(let i=0; i<this.length; i++){
        this[i]=arguments[i]
    }
}
stack.prototype.jodo=function(values){
     let index=this.length;
     this[index]=values;
     this.length++
}
arr.jodo("app")
console.log(arr)
stack.prototype.hatao=function(){
    let index=this.length-1;
    delete this[index]
    this.length--
}
arr.hatao()
console.log(arr)
stack.prototype.top=function(){
    let index =this.length-1
  console.log(this[index])
}
arr.top()
stack.prototype.print=function(){
    let bag =[]
    for(let i=0; i<this.length; i++){
        bag.push(this[i])
    }
    console.log(bag)
}
arr.print()
stack.prototype.printreverse=function(){
    let bag =[]
    for(let i=this.length-1; i>=0; i--){
        bag.push(this[i])
    }
    console.log(bag)
}
arr.printreverse()
stack.prototype.lambai=function (){
    console.log(this.length)
}
arr.lambai()