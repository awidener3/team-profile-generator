buildHtml = (team) => {
    const template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Hello, Team!</title>
    </head>
    <body>
        <header>
            <div class="container p-5 mb-5">
                <h1 class="display-2 text-center">Say Hello to Your Team.</h1>
            </div>
        </header>
    
        <main>
            <div class="container d-flex justify-content-center flex-wrap">
                ${buildCards(team)}
            </div>
            
        </main>
    
        <footer class="container text-center fixed-bottom p-3">
            <a href="https://www.github.com/awidener3" target="_blank" rel="noopener noreferrer"><i class="bi bi-github footer-icon"></i></a>
        </footer>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>`;

    return template;
}

buildCards = (team) => {
    let str = '';
    team.forEach(member => {
        str += 
        `
            <div class="card m-2" style="width: 18rem;">
                <div class="card-header text-center">
                    <i class="${getIcon(member.getRole())} icon"></i>
                    <h4 class="card-title">${member.getName()}</h4>
                    <h5 class="card-subtitle mb-2 text-muted">${member.getRole()}</h5>
                </div>
                <div class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${member.getId()}</li>
                    <li class="list-group-item">Email: ${member.getEmail()}</li>
                    ${getInfo(member)}
                </div>
            </div>
        `
    })
    return str;
}

getIcon = (role) => {
    let icon = '';
    switch (role) {
        case 'Manager':
            icon += `bi-person-circle`;
            break;
        case 'Engineer':
            icon += `bi-tools`;
            break;
        case 'Intern':
            icon += `bi-mortarboard-fill`    
        default:
            break;
    }

    return icon;
}

getInfo = (member) => {
    let li = '';
    switch (member.getRole()) {
        case 'Manager':
            li += `<li class="list-group-item">Office: ${member.officeNumber}</li>`;
            break;
        case 'Engineer':
            li += `<li class="list-group-item">Github: <a href="https://github.com/${member.github}" target="_blank" rel="noopener">${member.github}</a></li>`;
            break;
        case 'Intern':
            li += `<li class="list-group-item">School: ${member.school}</li>`    
        default:
            break;
    }

    return li;
}


module.exports = buildHtml;