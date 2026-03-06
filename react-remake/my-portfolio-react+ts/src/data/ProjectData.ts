import type { ProjectTypeInterface } from "@/interfaces/ProjectInterface";

export const projects: ProjectTypeInterface = {
    major: [
        {
            name: 'Cebu 1070',
            key: 'cebu1070',
            desc: 'A centralized community platform for reporting fire incidents with Cebu.',
            tools: ['NodeJS', 'Vite', 'Fastify', 'Knex', 'SQL', 'React', 'CSS', 'JS'],
            img: 'cebu1070.png',
            repo: ''
        },
        {
            name: 'VSCode extension for NativeCamp FE devs',
            key: 'fetool',
            desc: 'A tool I made to help NativeCamp front-end devs to quickly navigate through git branches, toggle test configs, and more.',
            tools: ['VSCode', 'JS'],
            img: 'fetool.png',
            repo: ''
        },
        {
            name: 'LaagTaCebu (development paused)',
            key: 'laagtacebu',
            desc: 'A travel app for Cebu City that focuses on streamlining the process of finding places to visit, travel planning, and more.',
            tools: ['Laravel', 'Docker', 'Blade', 'TailwindCSS', 'JS'],
            img: 'laagtacebu.png',
            repo: ''
        }
    ],
    minor: [
        {
            name: 'Portfolio',
            key: 'portfolio',
            desc: 'A simple portfolio of myself to showcase my skills and capabilities.',
            tools: ['React', 'HTML', 'CSS', 'JS'],
            img: 'portfolio.png',
            repo: 'https://github.com/Leir-bg/my-portfolio'
        },
        {
            name: 'CSS only color-picker',
            key: 'csscolorpicker',
            desc: 'A simple color-picker made with only HTML and CSS, no JS. Made for fun and practice.',
            tools: ['HTML', 'CSS'],
            img: 'csscolorpicker.png',
            repo: 'https://github.com/FDC-gabriel/color-picker'
        },
        {
            name: 'Go Dark Proweaver',
            key: 'godark',
            desc: 'A custom Wordpress plugin I made for Proweaver, Inc. websites to quickly switch color themes, there were no compatible dark theme plugins for their websites before. (No longer maintained)',
            tools: ['PHP', 'JS', 'CSS'],
            img: 'unavailable.jpg',
            repo: 'https://github.com/Leir-bg/go-dark-proweaver'
        },
        {
            name: 'Bulk Edit tool',
            key: 'bulkedit',
            desc: 'Made to aid and accelerate the process of making textbooks for NativeCamp.',
            tools: ['NodeJS', 'ExpressJS', 'JS', 'Pug', 'CSS'],
            img: 'bulkedit.png',
            repo: 'https://github.com/Leir-bg/bulk-edit-content-tool'
        },
        {
            name: 'Bulk Create Folder tool',
            key: 'bulkcreate',
            desc: 'Made to aid and accelerate the process of making textbooks for NativeCamp.',
            tools: ['NodeJS', 'ExpressJS', 'JS', 'Pug', 'CSS'],
            img: 'bulkcreate.png',
            repo: 'https://github.com/Leir-bg/bulk-create-folder-tool'
        },
        {
            name: 'Web Scraper',
            key: 'webscraper',
            desc: 'Web scraping practice project.',
            tools: ['NodeJS', 'Puppeteer', 'JS'],
            img: '',
            repo: ''
        },
        {
            name: 'Counter API',
            key: 'counterapi',
            desc: 'A simple API I made to count visits to my portfolio, since the one I used keeps going down.',
            tools: ['NodeJS', 'ExpressJS', 'Mongodb', 'JS', 'Render'],
            img: '',
            repo: 'https://github.com/Leir-bg/counterapi'
        },
        {
            name: 'Mobile Game API (MLBB)',
            key: 'mlbbapi',
            desc: 'An unofficial API for Mobile Legends: Bang Bang game for public use. Data is forked from this repo (https://github.com/p3hndrx/MLBB-API).',
            tools: ['NodeJS', 'ExpressJS', 'JS', 'Render'],
            img: 'mlbbapi.png',
            repo: 'https://github.com/Leir-bg/MLBB-API'
        }
    ]
}
