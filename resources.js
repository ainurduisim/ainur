// Global scope and array
const allResources = [
    {
        title: "They Say / I Say: The Moves That Matter in Academic Writing, with Readings",
        author: "Gerald Graff, Cathy Birkenstein, Russel Durst",
        link: "https://archive.org/details/theysayisay3rdedition",
        type: "Educational book",
        description: "Teaches key rhetorical moves for academic writing, focusing on summarizing others' work to set up your own arguments.",
        hidden: true,
        category: "academic",
        password: "1234"
    },
    {
        title: "The Norton Introduction to Literature (Shorter 10th Edition)",
        author: "Alison Booth, Kelly J. Mays",
        link: "https://wwnorton.com/books/9780393886306",
        type: "Textbook",
        description: "A diverse collection of literature pieces put together to get to know literature in the most interesting way possible.",
        hidden: false
    },
    {
        title: "The SAGE Handbook of the Social Sciences: The SAGE Handbook of Cultural Anthropology",
        author: "Lene Pedersen, Lisa Cliggett",
        link: "https://search.credoreference.com/books/Qm9va1R5cGU6MzMx?aid=279895",
        type: "Textbook",
        description: "Essential resource for social scientists with chapters on all major topics in cultural anthropology.",
        hidden: false,
        category: "academic"
    },
    {
        title: "How Languages Work: An Introduction to Language and Linguistics",
        author: "Carol Genetti, Allison Adelman (Eds.)",
        link: "https://www.cambridge.org/highereducation/books/how-languages-work/DB6E72758E31BF3838EEAFFC5BA4A311#overview",
        type: "Educational book",
        description: "Comprehensive introduction to linguistics with new material on language and culture, tone and intonation.",
        hidden: false,
        category: "academic"
    },
    {
        title: "Integrated Chinese, Level 1, Part 1: Character Workbook",
        author: "Tao-chung Yao",
        link: "https://www.cheng-tsui.com/browse/integrated-chinese",
        type: "Workbook",
        description: "A very detailed and clever workbook if you want to learn Chinese language. The book includes dialogues, writing practices, grammatical structures, and examples.",
        hidden: false,
        category: "language",
        features: [
            "Simplified and traditional characters",
            "Stroke order practice",
            "Writing practice",
            "Vocabulary",
            "Aligned with textbook lessons"
        ]
    },
    {
        title: "Comparative Politics",
        author: "Daniele Caramani",
        link: "https://books.google.com/books?hl=en&lr=&id=mgJLDgAAQBAJ&oi=fnd&pg=PP1&dq=Comparative+Politics+Author:+Daniele+Caramani&ots=3M08Bf-8fW&sig=hUcIJElYWlLabsAWZBFKOn0XnsQ ",
        type: "Textbook",
        description: "A leading textbook offering a global overview of political systems, regimes, institutions, and actors with comparative analysis.",
        hidden: false,
        category: "political science"
    }
];

// Function that displays resources
function displayResources(resources) {
    const container = document.getElementById('resourceContainer'); 
    container.innerHTML = ''; 

    for (let i = 0; i < resources.length; i++) {
        const resource = resources[i];
        const div = document.createElement('div');
        div.className = resource.hidden ? 'resource hidden' : 'resource'; 
        div.innerHTML = `
            <h3>${resource.title}</h3>
            <p><strong>Author:</strong> ${resource.author}</p>
            <p><strong>Type:</strong> ${resource.type}</p>
            <p>${resource.description}</p>
            <a href="${resource.link}" target="_blank">Visit Resource</a>
        `;
        container.appendChild(div);
    }
}

// Event listeners
document.getElementById('showAll').addEventListener('click', function() {
    displayResources(allResources.filter(r => !r.hidden));
});

document.getElementById('filterTextbooks').addEventListener('click', function() {
    const textbooks = allResources.filter(r => r.type === "Textbook" && !r.hidden);
    displayResources(textbooks);
});

document.getElementById('showHidden').addEventListener('click', function() {
    const password = prompt("Enter password:");
    if (password === "1234") {
        const hiddenResources = allResources.filter(r => r.hidden);
        displayResources(hiddenResources);
    } else {
        alert("Wrong password!");
    }
});

document.getElementById('filterWorkbooks').addEventListener('click', function() {
    const filterType = "Workbook";
    
    switch(filterType) {
        case "Workbook":
            const workbooks = allResources.filter(r => r.type === "Workbook" && !r.hidden);
            displayResources(workbooks);
            break;
        default:
            displayResources(allResources.filter(r => !r.hidden));
    }
});

// Other code
const links = document.querySelectorAll('a'); 
let i = 0;

while (i < links.length) {
    if (links[i].href.includes("facebook")) {
        i++;          
        continue;
    }
    console.log("Valid link:", links[i].href);
    if (i === 3) break;
    i++;
}

const resourceBlocks = document.getElementsByClassName('resource');
console.log("Number of resource blocks:", resourceBlocks.length);

const allParagraphs = document.getElementsByTagName('p');
console.log("Number of <p> tags:", allParagraphs.length);

// Initial display
displayResources(allResources.filter(r => !r.hidden));