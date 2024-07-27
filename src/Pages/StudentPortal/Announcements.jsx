import React from 'react';
import {
    Card, CardContent, CardHeader
} from '../../components/ui/card';

const Announcements = () => {
    return (
        <div className='w-full h-screen p-4 text-[1.5rem] lg:text-[3rem]'>
            <Card className="bg-gray-100 shadow-lg">
                <CardHeader className="text-[1.5rem] lg:text-[3rem] text-center font-bold text-blue-900">
                    Announcements
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <div className="text-lg">New Library Books Available</div>
                        <div className="text-lg">Parent-Teacher Meeting on 20/08/2024</div>
                        <div className="text-lg">Science Fair on 25/08/2024</div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Announcements;
