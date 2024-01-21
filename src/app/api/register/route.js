import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
    try {
        await connectToDB()
        const val = await request.json()
        const {firstname, lastname, email, password, username} = val
        const query = User.where({email: email})
        const isUser = await query.findOne()
        if (isUser) return new Response("User with email already exists", { status: 404 })
        const user = new User({firstname, lastname, email, password, username})
        const newUser = await user.save()
        return new Response(JSON.stringify(newUser), { status: 200 })
    } catch (error) {
        return new Response(error._message, {status: 500})
    }
}