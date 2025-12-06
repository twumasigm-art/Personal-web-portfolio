const projects = [
    {
        title: "Music player",
        description: "Ukelele, HEY!, Summer sound",
        links: {
            github: "https://twumasigm-art.github.io/Music-Board-/",
            demo: null 
        }
    },
    {
        title: "Catch Insect",
        description: "It's a game where you catch insects",
        links: {
            github: "https://twumasigm-art.github.io/catch-insect/",
            demo: null
        }
    }
   
];


function displayProjects() {
    const projectGrid = document.getElementById('project-grid');
    
   
    projectGrid.innerHTML = '';
    
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        
        const title = document.createElement('h3');
        title.textContent = project.title;
        
       
        const description = document.createElement('p');
        description.textContent = project.description;
        
        const linksDiv = document.createElement('div');
        linksDiv.className = 'project-links';
        
        if (project.links.github) {
            const githubLink = document.createElement('a');
            githubLink.href = project.links.github;
            githubLink.target = '_blank';
            githubLink.className = 'project-btn';
            githubLink.textContent = 'GitHub';
            linksDiv.appendChild(githubLink);
        }
        
        
        projectCard.appendChild(title);
        projectCard.appendChild(description);
        projectCard.appendChild(linksDiv);
        
        
        projectGrid.appendChild(projectCard);
    });
}

const photographs = [
    {
        image: "https://image2url.com/images/1764917498171-d3a52cff-7686-4679-b8ee-b5dcd2f42ccb.jpeg",
        caption: "Self Portrait"
    },
        {
            image: "https://image2url.com/images/1764917458127-86addbbd-a506-40bf-a6d1-d2f6824de085.jpeg",
            caption: "Flower hockney"
        },
            {
                image: "https://image2url.com/images/1765044196264-d1895c4a-7030-4ef7-ba91-a7fa46d285c6.jpeg",
                caption: "Branch"
            },
            {
                image: "https://image2url.com/images/1765044336605-5edec0d4-97cd-4f5f-9409-3a4741a19f3d.jpg",
                caption: "Evelyn"
            }
        ];


function displayPhotographs() {
    const photoGrid = document.getElementById('photo-grid');
    
    // Clear existing content
    photoGrid.innerHTML = '';
    
    // Create a card for each photo
    photographs.forEach(photo => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
       
        // Create image element
        const img = document.createElement('img');
        img.src = photo.image;
        img.alt = photo.caption;
        
        // Make image clickable to open in new tab
        photoItem.style.cursor = 'pointer';
        photoItem.onclick = () => window.open(photo.image, '_blank');
        
        // Create caption
        const caption = document.createElement('div');
        caption.className = 'photo-caption';
        caption.textContent = photo.caption;
        
        // Assemble the photo item
        photoItem.appendChild(img);
        photoItem.appendChild(caption);
        
        // Add to grid
        photoGrid.appendChild(photoItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.getElementById('project-grid');
    if (projectGrid) {
        displayProjects();
    }
    displayPhotographs();
});
