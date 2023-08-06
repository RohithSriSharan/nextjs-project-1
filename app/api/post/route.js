// route.js

import { connectToDB } from "@utils/database";

import Story from "@models/story";


export const GET = async(request) =>{
    try{
        await connectToDB();
        const stories = await Story.find({}).populate('creator')
        return new Response(JSON.stringify(stories), {status:200})
    }catch(error){
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}