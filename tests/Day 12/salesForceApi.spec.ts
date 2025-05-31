//generate token
//endpoint 
//Post , get, patch and delete

import test from "@playwright/test"
import { faker } from "@faker-js/faker"

let token, inst_url, tokenType: any

test('Generate Token',async({request})=>{

    const response = await request.post("https://login.salesforce.com/services/oauth2/token",
        {
            headers:{
                "Content-Type":"application/x-www-form-urlencoded",
            },
            form:{
                "grant_type":"password",
                "client_id": "3MVG9GBhY6wQjl2tYE26S2t2z9zk8THAMT1O3mBqS8rkuxAACCQ37yClYwePpqdJqg3lDYXBHbpmpmA_5ts3q",
                "client_secret": "20F6EF1930E334F6AFB6329F4C686AF16982983F1850999E40D0926EC3A4C5EC",
                "username": "mail2ajaysundarqa-gmql@force.com",
                "password": "Arkantos12#$"
            }

    })

    const responseBody=await response.json()

    token=responseBody.access_token
    inst_url=responseBody.instance_url
    tokenType=responseBody.token_type
    console.log(response.status())

})

test('Create Lead',async({request})=>{

    const response = await request.post(`${inst_url}/services/data/v60.0/sobjects/Lead`,
        {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        data:{
            "lastname":faker.person.lastName(),
            "company":faker.company.buzzNoun()
        }
    })

    const resbody = await response.json()
    console.log(resbody)
    console.log(response.statusText())
})