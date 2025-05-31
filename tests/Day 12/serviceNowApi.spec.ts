import test, {chromium} from "@playwright/test"
import { faker } from "@faker-js/faker";


//endpoint 
//auth
//contenttype
//data
//response
//encode : "admin:khOyo%57C$QC"

let id:any
test(`API Test`,async({request})=>{
    // const browser = await chromium.launch()
    // const context = await browser.newContext()
    // const request=context.request //API Requestcntext fuunction

    const response = await request.post("https://dev348063.service-now.com/api/now/table/incident",
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Basic YWRtaW46a2hPeW8lNTdDJFFD`
        },
        data:{ //Body of the request
            "description":"Creating issue from Playwright"
        }
    })

    const responsebody = await response.json()
     id=responsebody.result.sys_id

    console.log(responsebody)
    console.log(response.status())
    console.log(response.statusText())
    console.log(responsebody.result.sys_id)
})

test('Fetch the resource',async({request})=>{
    // const browser=await chromium.launch()
    // const context=await browser.newContext()
    // const request=context.request

    const response =await request.get(`https://dev348063.service-now.com/api/now/table/incident/${id}`,
     {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Basic YWRtaW46a2hPeW8lNTdDJFFD`
            },
        
    })
    const responsBody=await response.json()
    console.log(responsBody)
    console.log(response.status())
    console.log(response.statusText())
     })

     test('Update the resource',async({request})=>{
    // const browser=await chromium.launch()
    // const context=await browser.newContext()
    // const request=context.request

    const response =await request.patch(`https://dev348063.service-now.com/api/now/table/incident/${id}`,
     {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Basic YWRtaW46a2hPeW8lNTdDJFFD`
            },
          data:{
             "location":"Chennai",
             "short_description":faker.lorem.sentence(3)
          }
    })
    const responsBody=await response.json()
    console.log(responsBody)
    console.log(response.status())
    console.log(response.statusText())
     })

     test('Delete the resource',async({request})=>{
    // const browser=await chromium.launch()
    // const context=await browser.newContext()
    // const request=context.request

    const response =await request.delete(`https://dev348063.service-now.com/api/now/table/incident/${id}`,
     {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Basic YWRtaW46a2hPeW8lNTdDJFFD`
            },
        
    })
    // const responsBody=await response.json()
    // console.log(responsBody)  no content  -->not applicable to fetch the response body
    console.log(response.status())
    console.log(response.statusText())
    })
