let students_name = ['abdul','yash','sarfraj','omkar','kanika','yash'];
let result=[]
result =students_name.find(name=>name ==='yash')
if(result){
    console.log('we have found '+result)
}
if(!result) {
    console.log('No students_name found')
}
