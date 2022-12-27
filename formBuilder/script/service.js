class Form {
    // constructor(form_collection=[]){
    //  this.form_collection = form_collection;
    // }
    form_collection = [];
    setForm(form_collection) {
        this.form_collection = form_collection;
    }
   
    setLogo(section, index,url){
        
        this.form_collection.logo[section].push({index, url})
      
    }
    setBanner(url){
       
        this.form_collection.banner.image = url;
        console.log(this.form_collection)
    }
    setFormInput(label, type, placeholder){
        this.form_collection.form.push({label, type, placeholder});
    }
   
   
}

class GetFormElements{
constructor(collections=[]){
    this.collections = collections;
    
}
getLogosBySection(section) {
       
    return this.collections.form_collection.logo[section];

}
getBanner() {
    return this.collections.form_collection.banner;
    // return this.form_collection.banner.image;
}
getFormFields() {
    return this.collections.form_collection.form;
}



}



// class Logo {
//     constructor(arr = [],banner=[]) {
//       this.arr = arr;
//       this.banner = banner;
      
//     }
  
//     geturl(url, index) {
//       return this.arr.push({ url, index });
    
//     }
//     getcover(url){
//       return this.banner.push(url)
//     }
//   }
  