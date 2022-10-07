let getResponse = localStorage.getItem('form_response');

let table = JSON.parse(getResponse)
console.log(table);
console.log(table.labels);
console.log(table.labels.length);

let container = document.querySelector('#container_div');
// console.log(container);

    let response_table = document.createElement('table');
    let th = document.createElement('th');
    let th_td1= document.createElement('td');
    th_td1.innerHTML = "Fields";
    let th_td2= document.createElement('td');
    th_td2.innerHTML = "Response";
   th.append(th_td1);
   th.append(th_td2);
   response_table.appendChild(th)

    for(let i=0; i<table.labels.length; i++){
        let table_row = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            td1.innerHTML =table.labels[i] ;
            td2.innerHTML =table.response[i];
        
            table_row.append(td1);
            table_row.append(td2);
        

            response_table.appendChild(table_row);
        }


    // for (let i of table.labels){
    //     console.log(i)
        
    //     let table_td = document.createElement('td');
    //     table_td.innerHTML = i;
    //     table_row.append(table_td);
    // }
    // for (let i of table.response){
    //     console.log(i)
      
    //     let table_td = document.createElement('td');
    //     table_row.append(table_td);
    //     response_table.appendChild(table_row);
    //     table_td.innerHTML = i;
    // }
 


    
    container.append(response_table);
    
    let print_response = document.querySelector('#print_responses')
    
    print_response.addEventListener('click', (e)=>{
        window.print();
        
    })
