import {NextRequest, NextResponse} from "next/server"
import {conn}  from '../../../utils/database'

interface Data {
    message: string,
    time: string,
}

export const GET = async (req: NextRequest, res: NextResponse<Data>) => {
    const response = await conn.query('SELECT NOW()')
    const responseData: Data = {
        message: "pong",
        time: response.rows[0].now,
    };
    const jsonString = JSON.stringify(responseData);
    return new Response(jsonString, {status: 200, headers: { 'Content-Type': 'application/json' }})
}