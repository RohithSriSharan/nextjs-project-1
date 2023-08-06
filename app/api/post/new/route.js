import { connectToDB } from "@utils/database";
import Story from "@models/story";

export const POST = async (request) => {
    const { userId, title, story } = await request.json();
    console.log("Received userId:", userId);
        console.log("Received title:", title);
        console.log("Received story:", story);

    try {
        await connectToDB();
        const newStory = new Story({
            creator: userId,
            title,
            story
        });

        await newStory.save();
        return new Response(JSON.stringify(newStory), { status: 201 });
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
