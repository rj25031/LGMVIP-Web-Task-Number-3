const form = document.getElementById("form")
const parent = document.getElementById("parent")

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var website = document.getElementById("website").value;
    var image = document.getElementById("image").value;
    var gender = getGender();
    var skills = getSkills();

    addData(name, email, website, image, gender, skills);

});


function getGender(){
    const gender = document.getElementsByName("gender");
    for(let i = 0; i < gender.length;i++){
        if(gender[i].checked){
            return gender[i].value;
        }
    }
}

function getSkills(){
    const skills = document.getElementsByName("skill")
    selectedSkill=[]
    for(let i = 0; i < skills.length;i++){
        if(skills[i].checked){
            selectedSkill.push(skills[i].value)
        }
    }
    return selectedSkill;
}

function addData(name, email, website, image,gender,skills) {
    parent.classList.remove("togg")
    let skillSet=skills.join(',');
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>
       <span> Name:- ${name}</span>
       <span> Email:- ${email} </span>
       <span> Gender:- ${gender} </span>
       <span> Website:- <a href="${website}"> ${website} </a> </span>
       <span>Skills:-${skillSet} </span>
    </td>
    <td>
        <img src="${image}" alt="img">
        </td>
    `;

    parent.appendChild(tr);
}

