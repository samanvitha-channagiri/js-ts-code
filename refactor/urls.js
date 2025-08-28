// Refactor this code

const BASE_URL='/tasks'
function getUrl(dev=false,tasks={}){
    const queryParams=new URLSearchParams()

    if(dev){
        queryParams.append('status','ACTIVE')
        queryParams.append('dev','true')
        queryParams.append('size','20')
    }
    if(tasks.nextTasks){
        queryParams.append('hasNext','true')
    }
   if(tasks.prevTasks){
        queryParams.append('hasPrev','true')
    }
    const allQueries=queryParams.toString()
    const finalUrl=allQueries?`${BASE_URL}?${allQueries}`:BASE_URL
    
    return {url:finalUrl}
}
