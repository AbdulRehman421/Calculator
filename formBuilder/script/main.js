let logo = document.querySelectorAll(".logos");
let logo_button = document.querySelector('#logo');
let text = document.querySelector('#add-input');
let form_elements = document.querySelector('.form-elements');
let input_elements = document.querySelectorAll('.input-elements');

function random_number() {
  let a = Math.floor(Math.random() * 1000);
  return a;
}

// ======================================== Drag Start Event 

input_elements.forEach((element, index) => {
  element.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData("text", e.target.id);
    switch (index) {
      case 0:
        logo.forEach((el, i) => {
          if (!el.childNodes.length)
            el.style.backgroundColor = "red";


        })

        break;
      case 1:
        form_elements.style.backgroundColor = "red";
        break;
      case 2:
        form_elements.style.backgroundColor = "red";
        break;
      case 3:
        form_elements.style.backgroundColor = "red";

    }

  })

  // ================================================= Drag End Event

  element.addEventListener('dragend', () => {

    switch (index) {
      case 0:
        logo.forEach(el => {
          el.style.backgroundColor = "white";
        })
        break;
      case 1:
        form_elements.style.backgroundColor = "white";
        break;
      case 2:
        form_elements.style.backgroundColor = "white";
        break;
      case 3:
        form_elements.style.backgroundColor = "white";

    }
  })
})


logo.forEach((el, i) => {
  el.addEventListener('dragover', (e) => {
    if (el.style.backgroundColor == "red") {
      e.preventDefault();

    }
  })

  el.addEventListener('drop', (e) => {
    let index = i;
    let input = document.createElement("input");
    input.type = "file";
    let input_id = "input_file" + random_number();
    input.setAttribute('id', input_id);
    input.className = "temp_class";
    e.target.appendChild(input);
    let Img = document.createElement("img");
    let img_id = "image" + random_number();

    Img.src = "";
    Img.setAttribute('id', img_id);

    Img.setAttribute('width', '100%');
    Img.setAttribute('height', '100%');
    e.target.appendChild(Img);
    Img.style.display = 'none';
    preview(el, index, input_id, img_id);
  })
})


form_elements.addEventListener('dragover', (e) => {
  e.preventDefault();
})

function appendInput(type) {
  let div = document.createElement("div");
  let input_div = 'input_div' + random_number();
  div.setAttribute('id', input_div);
  console.log(div);
  let div_label_btn = document.createElement("div");
  div_label_btn.className = "flex";
  let div_label = document.createElement("div");
  let div_btn = document.createElement("div");
  let div_input = document.createElement("div");


  let delete_box = document.createElement("button");
  delete_box.className = "btn red";
  delete_box.onclick = () => {
    document.getElementById(input_div).style.display = "none";
    console.log(input_div);
  }
  delete_box.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`

  let edit_input_box = document.createElement("button");
  edit_input_box.className = "btn green";
  edit_input_box.setAttribute('id', 'edit_element');
  edit_input_box.innerHTML = `<i class="fa-solid fa-pen-to-square pen"></i>`

  let label = document.createElement("label");
  let label_id = 'label' + random_number();
  label.setAttribute('id', label_id);

  label.textContent = "Input Text";

  let input = document.createElement("input");
  input.type = type;
  input.placeholder = "Enter Text";
  let input_id = 'text_box' + random_number()

  input.setAttribute('class', 'input_values');
  input.setAttribute('id', input_id);

  console.log(input);
  input.style.color = 'black';

  div_input.appendChild(input);

  div_label.appendChild(label);
  div_btn.appendChild(edit_input_box);
  div_btn.appendChild(delete_box);

  div_label_btn.appendChild(div_label)
  div_label_btn.appendChild(div_btn)

  div.appendChild(div_label_btn);
  div.appendChild(div_input);
  form_elements.appendChild(div);
  div.className = "text_box";



  let edit_btn = document.querySelectorAll('#edit_element');

  edit_btn.forEach(e => {


    e.addEventListener('click', (e) => {
      let container2 = document.querySelector('.container2');
      container2.style.display = 'block';

      let popUp_Id = 'boxDiv' + random_number();
      let popUp_div = document.createElement('div');
      popUp_div.setAttribute('id', popUp_Id);
      popUp_div.setAttribute('class', 'edit_popup');


      let h1 = document.createElement('h1');
      h1.setAttribute('class', 'popup_h1');
      h1.innerText = 'Edit input File';

      let Id1 = 'inputId' + random_number();
      let input1 = document.createElement('input');
      input1.setAttribute('class', 'input_popup');
      input1.setAttribute('id', Id1);
      input1.placeholder = 'Name';

      let label1 = document.createElement('label');
      label1.innerText = 'Placeholder';
      label1.setAttribute('class', 'p_popup');

      let Id2 = 'placeholderId' + random_number();
      let input2 = document.createElement('input');
      input2.setAttribute('class', 'input_popup');
      input2.setAttribute('id', Id2);
      input2.placeholder = 'Name';

      let label2 = document.createElement('label');
      label2.innerText = 'Input type';
      label2.setAttribute('class', 'p_popup');

      let select_Id = 'select_Id' + random_number();
      let select1 = document.createElement('select');
      select1.setAttribute('id', select_Id);
      select1.setAttribute('class', 'input_popup');

      let option1 = document.createElement('option');
      option1.value = 'text';
      option1.innerText = 'Text';

      let option2 = document.createElement('option');
      option2.value = 'radio';
      option2.innerText = 'Radio';

      let option3 = document.createElement('option');
      option3.value = 'checkbox';
      option3.innerText = 'CheckBox';

      let label3 = document.createElement('label');
      label3.innerText = 'Input Required';
      label3.setAttribute('class', 'p_popup');

      let select2 = document.createElement('select');
      select2.setAttribute('class', 'input_popup');

      let option4 = document.createElement('option');
      option4.value = 'Yes';
      option4.innerText = 'Yes';

      let option5 = document.createElement('option');
      option5.value = 'No';
      option5.innerText = 'No';

      let btn1 = document.createElement('button');
      btn1.innerText = 'Save changes';
      btn1.setAttribute('class', 'btn_popup_s');


      let btn2 = document.createElement('button');
      btn2.innerText = 'Close';
      btn2.setAttribute('class', 'btn_popup_c')
      btn2.setAttribute('onclick', 'close_popup()')



      container2.appendChild(popUp_div);
      popUp_div.appendChild(h1);
      popUp_div.appendChild(input1);
      popUp_div.appendChild(label1);
      popUp_div.appendChild(input2);
      popUp_div.appendChild(label2);
      popUp_div.appendChild(select1);
      select1.appendChild(option1);
      select1.appendChild(option2);
      select1.appendChild(option3);
      popUp_div.appendChild(label3);
      popUp_div.appendChild(select2);
      select2.appendChild(option4);
      select2.appendChild(option5);
      popUp_div.appendChild(btn1);
      popUp_div.appendChild(btn2);

      //   let popUp_name=document.getElementById('name');
      //    popUp_name.addEventListener('change',()=>{
      //   title.innerText=a[2].value;

      // })


      let popup = document.getElementById(popUp_Id);
      popup.style.display = 'block';

      btn1.addEventListener('click', () => {
        save_popup(popUp_Id, label_id, input_id, Id1, Id2, select_Id);
      })

      btn2.addEventListener('click', () => {
        close_popup(popUp_Id);
      })


    })


  })
}

// ============================================== Input Elements Drop 

form_elements.addEventListener('drop', (e) => {

  let input = e.dataTransfer.getData("text");
  switch (input) {
    case 'add-input':
      appendInput('text')

      break;

    case 'add-radio':
      appendInput('radio');

      // let div_radio = document.createElement("div");
      // let radio = document.createElement("input");
      // let radio_label = document.createElement("label");
      // radio_label.textContent = "Radio";
      // radio.type = "radio";
      // form_elements.appendChild(div_radio);
      // div_radio.append(radio);
      // div_radio.append(radio_label);
      break;

    case 'add-check':
      appendInput('checkbox');

    //     let div_check = document.createElement("div");
    //     div_check.setAttribute('id', 'check_div')
    //     let check_btn = document.createElement("div");
    //     let check = document.createElement("input");
    //     check.type = "checkbox";
    //     let check_label = document.createElement("label");
    //     check_label.textContent = "Terms and Conditions";
    //     let btn = document.createElement("button");
    //     btn.className = "check_close_btn"
    //     check_btn.innerHTML = `<button class ="cut"><i class="fa-sharp fa-solid fa-xmark"></i></button>`;
    //     form_elements.appendChild(div_check);
    //     div_check.append(check);
    //     div_check.append(check_label);
    //     div_check.append(btn);

    //     let cutSign = document.querySelector(".check_close_btn");
    //     let cutDiv = document.querySelector("#check_div");
    //     cutSign.addEventListener("click", () => {
    //       cutDiv.style.display = "none";

    //     });
    //     cutDiv.removeAttribute('id', 'check_div')
    // }
  }
})

// ==================================== preview

let xForm = new Form();
xForm.setForm(formData);

function preview(el, index, input_id, img_id) {
  let preview_img = document.getElementById(img_id);
  const input = document.getElementById(input_id);
  const reader = new FileReader();
  input.addEventListener('change', () => {

    reader.addEventListener("load", () => {
      preview_img.src = reader.result;

      preview_img.style.display = 'block';
      input.style.display = 'none';

      if (index < 3) {

        xForm.setLogo('header', index, preview_img.src)
      }
      else {
        xForm.setLogo('footer', index, preview_img.src)

      }

    }, false)
    if (input.files[0]) {
      reader.readAsDataURL(input.files[0]);
    }
  })

}
// ===============================================Banner Preview 

let background_cover = document.querySelector('#background_cover');
let banner_img = document.querySelector('#banner_img');
banner_img.style.display = 'none';
const reader = new FileReader();
background_cover.addEventListener('change', () => {

  reader.addEventListener("load", () => {
    banner_img.src = reader.result;

    xForm.setBanner(banner_img.src)

    background_cover.style.display = 'none';
    banner_img.style.display = 'block';
    document.getElementById('background_description').style.display = 'none';


  }, false)
  if (background_cover.files[0]) {
    reader.readAsDataURL(background_cover.files[0]);
  }

}
);

// =======================================================Preview

document.querySelector('#btn-preview').addEventListener('click', () => {
  console.log('tata');
  window.location.href = "preview.html";
})

// -----------------------------------------------Set Data
let save_form = document.querySelector('.save_form');
save_form.addEventListener('click', () => {
  localStorage.setItem('logoImg', JSON.stringify(xForm));
  console.log(xForm)
})

function close_popup(a) {
  let close = document.getElementById(a);
  close.style.display = 'none';
}
function save_popup(popUp_Id, h4, inputId, Id1, Id2, select_Id) {

  let title = document.getElementById(h4);
  let text_box_input = document.getElementById(inputId);
  let popup_input_1 = document.getElementById(Id1);
  let popup_input_2 = document.getElementById(Id2);
  title.innerText = popup_input_1.value;
  text_box_input.placeholder = popup_input_2.value;

  let select = document.getElementById(select_Id);
  text_box_input.type = select.value;

  let popUp_div = document.getElementById(popUp_Id);
  popUp_div.style.display = 'none';



  let close = document.querySelector('.edit_popup');
  close.style.display = 'none';



}

function register() {
  let input_box_collection = document.querySelector('.form-elements').children;
  for (let dropbox of input_box_collection) {
    console.log(dropbox)
    input_title = dropbox.children[0].children[0].innerText;
    input_type = dropbox.children[1].children[0].type;
    input_placeholder = dropbox.children[1].children[0].placeholder;
    console.log(input_title);
    console.log(input_placeholder);
    console.log(input_type);
    xForm.setFormInput(input_title, input_type, input_placeholder)



  }

}

