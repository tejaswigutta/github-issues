import react from "react"
function Issues({isFetchDataSuccess,issuesArray,currentPage,dataPerPage}){
        
        const indexOfLastData=currentPage*dataPerPage
        const indexOfFirstData=indexOfLastData-dataPerPage
        console.log(indexOfFirstData,indexOfLastData)
        var newIssuesArray=[]
        if(isFetchDataSuccess)
        newIssuesArray=issuesArray.slice(indexOfFirstData,indexOfLastData)
        console.log("new",newIssuesArray)
    
    return(<div>
    {isFetchDataSuccess?
    <div id="display">
    {
      newIssuesArray.length!==0?newIssuesArray.map(item=><div class="items"><input type="checkbox" /><a href={item.html_url} target="_blank"><h3 class="title">{item.title}</h3></a><p>#{item.number}opened by {item.user.login}</p></div>):<div></div>
    }
    </div>:<div><h1>PLEASE ENTER A VALID USER NAME AND REPO NAME :)</h1></div>
    }
    </div>)
}
export default Issues