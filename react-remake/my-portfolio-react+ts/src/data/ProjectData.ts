import type { ProjectInterface } from "@/interfaces/ProjectInterface";

export const projects: ProjectInterface[] = [
    {
        name: 'Portfolio',
        key: 'portfolio',
        desc: 'A simple portfolio of myself to showcase my skills and capabilities.',
        tools: ['React', 'HTML', 'CSS', 'JS'],
        img: 'portfolio.png',
        repo: 'https://github.com/Leir-bg/my-portfolio'
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
        name: 'LaagTaCebu (in development)',
        key: 'laagtacebu',
        desc: 'A big project I am currently working on, a travel app for Cebu City that focuses on streamlining the process of finding places to visit, travel planning, and more.',
        tools: ['Laravel', 'Docker', 'Blade', 'TailwindCSS', 'JS'],
        img: 'laagtacebu.png',
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