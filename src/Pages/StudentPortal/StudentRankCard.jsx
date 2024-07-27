import React from 'react';
import {
    Card, CardContent, CardHeader, CardFooter
} from '../../components/ui/card';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

const StudentRankCard = () => {
    return (
        <div className='w-full h-screen p-4 text-[1.5rem] lg:text-[3rem]'>
            <Card className="bg-gray-100 shadow-lg">
                <CardHeader className="text-[1.5rem] lg:text-[3rem] text-center font-bold text-blue-900">
                    Student Performances
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <div>
                            <Label>Subject</Label>
                            <Input value="Mathematics" className="disabled "></Input>
                            <Label>Marks</Label>
                            <Input value="85" className="disabled "></Input>
                        </div>
                        <div>
                            <Label>Subject</Label>
                            <Input value="Science" className="disabled "></Input>
                            <Label>Marks</Label>
                            <Input value="90" className="disabled "></Input>
                        </div>
                        <div>
                            <Label>Subject</Label>
                            <Input value="English" className="disabled "></Input>
                            <Label>Marks</Label>
                            <Input value="88" className="disabled "></Input>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="text-[#7776B3]">
                    <Button className="bg-transparent hover:bg-transparent text-[#7776B3] w-fit">More Details</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default StudentRankCard;
