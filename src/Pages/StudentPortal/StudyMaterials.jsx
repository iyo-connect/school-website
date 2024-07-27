import React from 'react';
import {
    Card, CardContent, CardHeader
} from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const StudyMaterials = () => {
    return (
        <div className='w-full h-screen p-4 text-[1.5rem] lg:text-[3rem]'>
            <Card className="bg-gray-100 shadow-lg">
                <CardHeader className="text-center font-bold text-blue-900">
                    Study Materials
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <Button className="bg-transparent hover:bg-transparent text-[#7776B3]">Mathematics</Button>
                        <Button className="bg-transparent hover:bg-transparent text-[#7776B3]">Science</Button>
                        <Button className="bg-transparent hover:bg-transparent text-[#7776B3]">English</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default StudyMaterials;
