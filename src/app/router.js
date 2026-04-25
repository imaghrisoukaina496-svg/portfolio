import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Education from '@/pages/Education';
import Certifications from '@/pages/Certifications';
import Contact from '@/pages/Contact';
export const router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(RootLayout, {}),
        children: [
            { index: true, element: _jsx(Home, {}) },
            { path: 'projects', element: _jsx(Projects, {}) },
            { path: 'education', element: _jsx(Education, {}) },
            { path: 'certifications', element: _jsx(Certifications, {}) },
            { path: 'contact', element: _jsx(Contact, {}) },
        ],
    },
]);
