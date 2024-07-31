import React from 'react';
import userimage from '../../images/cover3.jpg';
import {
    Card, CardContent, CardFooter, CardHeader
} from '../../components/ui/card';
import { Book, Timer, BookAudioIcon } from 'lucide-react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

const ExamResult = () => {
    return (
        <div className='w-full h-screen text-[1.5rem] lg:text-[3rem]'>
            <div className="flex justify-center lg:mt-[4rem]">
                <Card className="bg-gray-100 shadow-lg">
                    <CardHeader className="text-[1.5rem] lg:text-[3rem] text-center font-bold text-blue-900">
                        Student Report Card
                    </CardHeader>
                    <CardContent className="flex justify-center items-center gap-2">
                        <div className="text-[1.5rem] lg:text-[3rem] lg:flex lg:flex-col lg:gap-5 lg:items-center font-bold text-[#7776B3]">
                            <div>
                                <img src={userimage} alt="student_Image" className='h-[200px] lg:mt-5 rounded-md' />
                            </div>
                            <div>
                                <div className=''>
                                    <Label>Name</Label>
                                    <Input value="Student Name" className="disabled "></Input>
                                </div>
                                <div className=''>
                                    <Label>Roll Number</Label>
                                    <Input value="Student Name" className="disabled "></Input>
                                </div>
                                <div className=''>
                                    <Label>Class</Label>
                                    <Input value="Student Name" className="disabled "></Input>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="text-[#7776B3]">
                        <Button className="bg-transparent hover:bg-transparent text-[#7776B3] w-fit">
                            Books<Book />
                        </Button>
                        <Button className="bg-transparent hover:bg-transparent text-[#7776B3]">
                            Time Table<Timer />
                        </Button>
                        <Button className="bg-transparent hover:bg-transparent text-[#7776B3]">
                            Material<BookAudioIcon />
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default ExamResult;
