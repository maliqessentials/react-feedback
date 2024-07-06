// src/Resume.js
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Resume = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="border-b pb-4 mb-4">
      <h3 className="font-serif text-xl font-semibold">PERSONAL INFORMATION</h3>
        <hr className='border-b-black'></hr>
        <p className="text-gray-600">Tempat Lahir: Sumut</p>
        <p className="text-gray-600">Tanggal Lahir: 2024-07-04</p>
        <p className="text-gray-600">Email: refsimaulanasrg@gmail.com</p>
        <p className="text-gray-600">No. Handphone: 085267516715</p>
        <p className="text-gray-600">Sosial Media: Linkedin: refsi_maulana, Instagram: @refsi_maulana</p>
        <p className="text-gray-600">Domisili: Jakarta</p>
        <p className="text-gray-600">Ketersediaan Bergabung: ASAP</p>
      </div>
      

      <div className="mb-4">
        <h2 className="text-2xl font-bold">Biodata</h2>
        <p>
          Skilled Front-end Developer with 4 years of experience in designing, developing and maintaining front-end web applications. Achieved measurable success in increasing page load speeds by 20% which lead to an increase in website conversion rates. Led the implementation of new front-end development system which resulted in a 15% reduction in development time and a 20% increase in website performance. Adept in collaborating with cross-functional teams and delivering projects on-time and on-budget.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold">Pendidikan</h2>
        <p className="text-gray-600">Pendidikan Terakhir: S1</p>
        <p className="text-gray-600">Sekolah / Universitas: Universitas Dinamika Bangsa Jambi</p>
        <p className="text-gray-600">Periode: 2017 - 2021</p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold">Keahlian</h2>
        <ul className="list-disc list-inside">
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React JS</li>
          <li>Node JS</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
