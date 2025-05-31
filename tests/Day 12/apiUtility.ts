//form data, endpoints, auth, body response
import { faker } from "@faker-js/faker";
import { APIRequestContext } from "@playwright/test";

let tokenUrl = "https://login.salesforce.com/services/oauth2/token"
let grantType = "password"
let client_id = "3MVG9GBhY6wQjl2tYE26S2t2z9zk8THAMT1O3mBqS8rkuxAACCQ37yClYwePpqdJqg3lDYXBHbpmpmA_5ts3q"
let client_secret = "20F6EF1930E334F6AFB6329F4C686AF16982983F1850999E40D0926EC3A4C5EC"
let username = "mail2ajaysundarqa-gmql@force.com"
let password = "Arkantos12#$"
let token: any
let inst_url:any
let tokenType:any
let resourceID: any

export async function generateToken(request:APIRequestContext){

    const response = await request.post(tokenUrl,
        {
            headers:{
                "Content-Type":"application/x-www-form-urlencoded",
            },
            form:{
                "grant_type":grantType,
                "client_id": client_id,
                "client_secret": client_secret,
                "username": username,
                "password": password
            }

    })
    const responseBody=await response.json()
    token=responseBody.access_token
    tokenType=responseBody.token_type
    inst_url=responseBody.instance_url
    console.log(inst_url)
}

export async function createResource(request:APIRequestContext){
    await generateToken(request)
    const response=await request.post(`${inst_url}/services/data/v60.0/sobjects/Lead`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`${tokenType} ${token}`
            },
            data:{
                "lastname":faker.person.lastName(),
                "company":faker.company.buzzNoun()   
            }
    })
    const res = await response.json()
    resourceID = res.id
}

export async function FetchResource(request:APIRequestContext){
    const response=await request.get(`${inst_url}/services/data/v60.0/sobjects/Lead/${resourceID}`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`${tokenType} ${token}`
            }
            
    })
    const res = await response.json()
    console.log(res)
    return res.lastName
}

