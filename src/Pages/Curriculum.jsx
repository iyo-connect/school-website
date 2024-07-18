import React from 'react';
import { Link } from 'react-router-dom';

const CurriculumPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-8 px-4">
          {/* Curriculum Content Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Curriculum</h2>
            <p className="mb-4">
              At NewLeaf School, we offer a comprehensive curriculum designed to foster
              intellectual, emotional, and social growth in our students.
            </p>
            <p className="mb-4">
              Our curriculum includes a blend of academic subjects, extracurricular
              activities, and personal development programs aimed at nurturing well-rounded
              individuals.
            </p>
            <p className="mb-4">
              Key subjects and programs include:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>Mathematics</li>
              <li>Science</li>
              <li>Literature and Language Arts</li>
              <li>Social Studies</li>
              <li>Physical Education</li>
              <li>Visual and Performing Arts</li>
              <li>Technology and Innovation</li>
              <li>Character Education</li>
            </ul>
            <p className="mb-4">
              For detailed information about our curriculum and academic standards,
              please contact our admissions office.
            </p>
          </div>

          {/* Related Links Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4">Related Links</h3>
            <ul>
              <li><Link to="#" className="block hover:underline mb-2">Admissions</Link></li>
              <li><Link to="#" className="block hover:underline mb-2">School Calendar</Link></li>
              <li><Link to="#" className="block hover:underline mb-2">Extracurricular Activities</Link></li>
              <li><Link to="#" className="block hover:underline mb-2">Faculty and Staff</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurriculumPage;
