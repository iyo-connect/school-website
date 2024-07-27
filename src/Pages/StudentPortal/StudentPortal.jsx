import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../components/ui/sheet";
import { Separator } from "../../components/ui/separator";
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Menu } from 'lucide-react';
import StudentRankCard from './StudentRankCard';
import ExamResult from './ExamResult';
import Announcements from './Announcements';
import StudyMaterials from './StudyMaterials';
import ExamTimetable from './ExamTimeTable';

const StudentPortal = () => {
    return (
        <div className='w-full h-screen text-[1.5rem] lg:text-[3rem]'>
            <div className='flex justify-between items-center p-4 bg-[#C9DABF]'>
                <div className='flex gap-3 items-center'>
                    <Sheet>
                        <SheetTrigger><Menu /></SheetTrigger>
                        <SheetContent side='left' className="lg:w-1/4 md:w-1/2 bg-[#C9DABF]">
                            <SheetHeader>
                                <SheetTitle className="text-[1.5rem] lg:text-[3rem]">Student Menu</SheetTitle>
                            </SheetHeader>
                            <SheetDescription>
                                <div className='flex flex-col gap-5 mt-5 text-[1.5rem] lg:text-[3rem]'>
                                    <Label>Student Id</Label>
                                    <Input className="outline-red-600" />
                                    <Label>Password</Label>
                                    <Input type="password" />
                                    <Button className="bg-[#7776B3] w-1/2">Login</Button>
                                </div>
                                <Separator className="bg-[#7776B3] mt-5" />
                                <div className='mt-5 flex flex-col text-[1.5rem] lg:text-[3rem]'>
                                    <Link to="exam-timetable">
                                        <Button className="mb-5 bg-transparent hover:bg-transparent text-[#7776B3] font-bold">Exam Timetable</Button>
                                    </Link>
                                    <Link to="announcements">
                                        <Button className="mb-5 bg-transparent hover:bg-transparent text-[#7776B3] font-bold">Announcements</Button>
                                    </Link>
                                    <Link to="study-materials">
                                        <Button className="mb-5 bg-transparent hover:bg-transparent text-[#7776B3] font-bold">Study Materials</Button>
                                    </Link>
                                    <Link to="exam-result">
                                        <Button className="mb-5 bg-transparent hover:bg-transparent text-[#7776B3] font-bold">Student Performances</Button>
                                    </Link>
                                </div>
                            </SheetDescription>
                            <SheetFooter>
                                <Button className="bg-[#7776B3] w-full">Logout</Button>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                    <span className='font-bold text-xl text-[#7776B3]'>Student Portal</span>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<ExamResult />} />
                <Route path="exam-result" element={<StudentRankCard />} />
                <Route path="study-materials" element={<StudyMaterials />} />
                <Route path="exam-timetable" element={<ExamTimetable />} />
                <Route path="announcements" element={<Announcements />} />
            </Routes>
        </div>
    );
};

export default StudentPortal;

