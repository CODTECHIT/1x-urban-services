import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        status: 'online',
        message: '1x urban services API is fully operational',
        version: '1.0.0'
    });
}
