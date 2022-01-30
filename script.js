
// task 1
function createNewBanner(element_id,redirect_link,banner_img){
    const elementId = document.getElementById(element_id);
    const img= document.createElement('img');
    const redirectLink= document.createElement('a');
    redirectLink.setAttribute('href',redirect_link);
    img.setAttribute('src',banner_img);
    img.setAttribute('width','320');
    img.setAttribute('height','320');
    redirectLink.appendChild(img);
    elementId.appendChild(redirectLink);
     
}
///task 2
const CreateNewBannerButton =document.getElementById('createNewBannerButton');
CreateNewBannerButton.addEventListener('click',(event)=>{
    const element_id = 'banners-list';
    const redirect_link= document.getElementById('Redirect').value;
    const banner_img = document.getElementById('Banner').value;
    createNewBanner(element_id,redirect_link,banner_img);        
})
//task 3
const SaveButton= document.getElementById('save'); 
SaveButton.addEventListener('click',(event)=>{
const BannerList= [];
const divChildren= document.getElementById('banners-list').children;
if(divChildren.length>0){
    for( let i=0; i<divChildren.length; i++){
        const banner_img=divChildren[i].children[0].getAttribute('src');
        const element_id='banners-list';
        const redirect_link=divChildren[i].getAttribute('href');
        BannerList.push([element_id,redirect_link,banner_img]);
    }
    localStorage.setItem('banners-data',JSON.stringify(BannerList));
}
});
const ClearButton= document.getElementById('Clear');
ClearButton.addEventListener('click',(event)=>{
    localStorage.removeItem('banners-data');
    const divChildren= document.getElementById('banners-list');
    divChildren.textContent ='';
});
//task 4
if(localStorage.getItem('banners-data')){
    const myLocalStorage= JSON.parse(localStorage.getItem('banners-data'));
    for(let i=0; i<myLocalStorage.length;i++){  
        createNewBanner(myLocalStorage[i][0],myLocalStorage[i][1],myLocalStorage[i][2]);

    }
}

