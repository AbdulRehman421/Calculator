
let obj = localStorage.getItem('logoImg');;

let final_data = JSON.parse(obj);
// console.log(final_data);

let getForm = new GetFormElements(final_data);
let banner = getForm.getBanner();


let header_collection = document.querySelector("#header_images")
let header_images = getForm.getLogosBySection('header');


let form_body = document.querySelector('#form_body');
if (banner.image) {
    let img = document.createElement('img');
    img.src = banner.image;
    form_body.append(img);


}



function renderHeader() {
    for (let i in header_images) {
        if (header_images[i]) {
            // console.log(header_images[i].url)

            let header_img = document.createElement('img');
            header_img.src = header_images[i].url;
            header_collection.appendChild(header_img)

        }
    }
}


let footer_images = getForm.getLogosBySection('footer');
let footer_collection = document.querySelector("#footer")
function renderFooter() {


    for (let i in footer_images) {
        if (footer_images[i].url) {
            let footer_img = document.createElement('img');
            footer_img.src = footer_images[i].url;
            footer_collection.appendChild(footer_img);

        }
    }
}





let form_fields = getForm.getFormFields()
function renderFormInputs() {
    let form_div = document.createElement('div');
    form_div.className = "form_layout";
    form_div.setAttribute('id', 'form_layout');
    form_body.append(form_div);
    if (form_fields) {


        for (let i in form_fields) {
            let input = document.createElement("input");
            input.classList.add("form_inputs");
            let label = document.createElement("label");
            input.type = form_fields[i].type;
            input.placeholder = form_fields[i].placeholder;
            label.innerText = form_fields[i].label;
            form_div.appendChild(label)
            form_div.appendChild(input)
        }
        // renderButton()


    }
}
renderHeader()
renderFooter()
renderFormInputs()

// function renderButton(){
//     let button = document.createElement('button');
//     button.setAttribute('type', 'submit');
//     button.setAttribute('class', 'submit_form');
//     button.innerText = "submit form";
//     footer_collection.appendChild(button);
// }
// renderButton()

    let form_responses ={
        response:[],
        labels:[],
    }
    let form_inputs = document.querySelectorAll('.form_inputs');
    form_inputs.forEach(element => {
        element.addEventListener('focusout', (e) => {
            let response = element.value;
            form_responses.response.push(response);
         
        })
    })


 

    let submit_button = document.querySelector('#submit_button');

        form_fields.forEach(field => {
            let label = field.label;
            form_responses.labels.push(label);
       
        
        })
     
  
     
   
        submit_button.addEventListener('click', () => { 
            window.location.href = "responses.html"
            localStorage.setItem('form_response', JSON.stringify(form_responses))
     })