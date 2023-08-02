import { aboutPageid, blogPageid, menuPageid, reservationPageid, reviewPageid } from "../../Common/Const";

export const filterBeverages=(beverages,type)=>{
    console.log("utils",beverages,type)
    let tempBeverages=beverages;
    return tempBeverages.filter((item)=>(item.type === type))
}

export const convertDateMontIntoWord=(date)=>{
    let modifiedDate=new Date(date);
    let day=modifiedDate.getDay();
    let month=modifiedDate.toLocaleString('default',{month:'short'});
    let year=modifiedDate.getFullYear()
    return `${day} ${month} ${year}`
}

export const getCurrentYear=()=>{
    return new Date().getFullYear()
}

 const getElementByPageId=(pageId)=>{
    return document.getElementById(pageId);
}

 const checkOffSet=(page)=>{
    const scrollPosition=window.scrollY;
    return page&&scrollPosition>=page.offsetTop-64?true:false;
}
export const currentScrollIndex=()=>{
    const aboutPage=getElementByPageId(aboutPageid);
    const menuPage=getElementByPageId(menuPageid);
    const reservationPage=getElementByPageId(reservationPageid);
    const blogPage=getElementByPageId(blogPageid);
    const reviewPage=getElementByPageId(reviewPageid);

   if(isPageReachedToBottom()) return 0; 
   if(checkOffSet(reviewPage)) return reviewPageid 
   if(checkOffSet(blogPage))return blogPageid
   if(checkOffSet(reservationPage))return reservationPageid
   if(checkOffSet(menuPage))return menuPageid
   if(checkOffSet(aboutPage))return aboutPageid
   return 1
}

export const isPageReachedToBottom=() =>{
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrolledToBottom = scrollPosition + viewportHeight >= documentHeight;
    return scrolledToBottom?true:false;
}


