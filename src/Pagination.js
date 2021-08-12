import react from "react"
function Pagination({dataPerPage,totalData,changeCurrentPage}){
    const buttonArray=[]
    for(let index=1;index<=Math.ceil(totalData/dataPerPage);index++){
       buttonArray.push(index)
    }
    return(<div id="buttonsDiv">
   {buttonArray.map(item=><button class="button"onClick={()=>changeCurrentPage(item)}>{item}</button>)
     
   }
   </div>)
}
export default Pagination