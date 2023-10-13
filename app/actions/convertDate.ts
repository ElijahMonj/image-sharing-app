export default function convertDate(d:Date){
    let stringDate="";
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months[d.getMonth()];

    stringDate=month+" "+d.getDate()+", "+d.getFullYear();
    return stringDate
     
}