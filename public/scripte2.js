let b=document.getElementById('FIRSTE')
let bb=document.getElementById('laste')
let bbb=document.getElementById('matriculee')
let bbbb=document.getElementById('groupe')
let bbbbb=document.getElementById('module')
let bbbbbb=document.getElementById('nature')
let bbbbbbb=document.getElementById('note1')
let bbbbbbbb=document.getElementById('note2')


console.log(b)
console.log(bb)
console.log(bbb)
console.log(bbbb)
console.log(bbbbb)
console.log(bbbbbb)
console.log(bbbbbbb)
console.log(bbbbbbbb)

verifier()


function verifier(){
    

    if(b.value==""){
        FIRSTE.style.display="block"

    }
    else         FIRSTE.style.display="none"

    if(bb.value==""){
        laste.style.display="block"

    }
    else         laste.style.display="none"

    if(bbb.value==""){
        matriculee.style.display="block"

    }
    else         matriculee.style.display="none"

    if(bbbb.value==""){
        matriculee.style.display="block"

    }
    else         matriculee.style.display="none"
  
}









