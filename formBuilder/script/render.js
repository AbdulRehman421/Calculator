












































// let form_body = document.querySelector('#form_body');
// let header_images = document.querySelector('#header_images');
// let banner_image = document.querySelector('#banner');
// // let header_img1 = document.querySelector('#header_img1');
// let header_img2 = document.querySelector('#header_img2');
// let header_img3 = document.querySelector('#header_img3');
// let footer_images = document.querySelector('#footer_images');

// function renderFormInputs(input_collection) {
//     input_collection.forEach(i => {
//         let div = document.createElement('div');
//         div.classList.add('input_boxes');
//         let form = document.createElement('form');
//         let input = document.createElement("input");
//         let label = document.createElement("label");

//         label.innerHTML = i.label;
//         input.type = i.type;
//         input.required = i.required;
//         input.placeholder = i.placeholder;

//         form_body.appendChild(div);
//         div.append(form)
//         form.append(label);
//         form.append(input);
//     });
// }




// function renderLogo(section) {
//     if (section === header) {
//         for(let i in header) {
//         if (header[i]) {
           
//            let header_img = document.createElement('img');
//            header_img.src=section[i]
//            header_images.appendChild(header_img)  
           
//         }}
   

//     }
//     else {
//         for(let i in footer) {
//             if (footer[i]) {
//                 let footer_img = document.createElement('img');
//                 footer_img.src=section[i]
//                 footer_images.appendChild(footer_img)
               
//             }}


          
//     }



// }

// function renderBanners(url) {
//   if(url)  
//   {
//     banner_image.style.visibility="visible";
//     banner_image.src = url;
// }}


// function renderPage() {
//     renderFormInputs(input_collection);
//     renderBanners(banner)
//     renderLogo(header)
//     renderLogo(footer)
// }

// let a=[];
// a=xForm.getForm(formData);
// console.log(a);
