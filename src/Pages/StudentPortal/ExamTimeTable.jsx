import React from 'react';
import {
    Card, CardContent, CardHeader
} from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';

const ExamTimetable = () => {
    return (
        <div className='w-full h-screen p-4 text-[1.5rem] lg:text-[3rem]'>
            <Card className="bg-gray-100 shadow-lg">
                <CardHeader className="text-[1.5rem] lg:text-[3rem] text-center font-bold text-blue-900">
                    Exam Timetable
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Subject</TableHead>
                                <TableHead>Time</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>12/08/2024</TableCell>
                                <TableCell>Mathematics</TableCell>
                                <TableCell>9:00 AM - 12:00 PM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>14/08/2024</TableCell>
                                <TableCell>Science</TableCell>
                                <TableCell>9:00 AM - 12:00 PM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>16/08/2024</TableCell>
                                <TableCell>English</TableCell>
                                <TableCell>9:00 AM - 12:00 PM</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default ExamTimetable;
