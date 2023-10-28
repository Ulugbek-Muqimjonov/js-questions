const elForm = document.querySelector(".hero__form");
const elTitle = document.querySelector(".hero__wrap-questions-title");
const temp = document.querySelector(".hero__template").content;
const elTable = document.querySelector(".hero__table-body");
const userRezult = document.querySelector(".hero__table-user-result-count");
const userRezultFalse = document.querySelector(".hero__table-user-result-count--false");
const reloadBtn = document.querySelector(".hero__reload");
let truCount = 0;
let falseCount = 0;

const users = [
    {
        id:1,
        text:"JavaScriptda qaysi ozgaruvchini Re-Declare qilsa boladi?",
        answer:"var"
    },
    {
        id:2,
        text:"JavaScriptda Reduce oziga nechta argument oladi?",
        answer:"2"
    },
    {
        id:3,
        text:"JavaScriptda  conjunction  birinchi kelgan nimani qaytaredi?",
        answer:"false"
    },
    {
        id:4,
        text:"Array ga ma'lmot kiritshni qaysi yolida PREFROMS yuqoi",
        answer:"push"
    },
    {
        id:5,
        text:`false || [] || true || 0 || "" natijani toping`,
        answer:"[]"
    },
    {
        id:6,
        text:"Reduce ni callback functionning nomi ?",
        answer:"reducer"
    },
    {
        id:7,
        text:"Arrayni slice metodi ozini 2-argumentiga nma oldi(deletecount || end || deleteitem)?",
        answer:"end"
    },
    {
        id:8,
        text:"Digaction oxirgi nmani qaytaradi?",
        answer:"false"
    },
    {
        id:9,
        text:"JavaScript avval qaysi nom bilan yartilgan?",
        answer:"livescript"
    },
    {
        id:10,
        text:"Matches oziga nama qabul qiladi?",
        answer:"sellector"
    }
];

function* generator(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        const answer = yield elTitle.textContent = `${arr[i].id}-savol. ${arr[i].text}`;
        arr[i].user_aswer = answer.toLowerCase();
        if (arr[i].user_aswer == arr[i].answer) {
            ++truCount;
            arr[i].checked = "✔";
            
        }else if(arr[i].user_aswer != arr[i].answer) {
            ++falseCount;
            arr[i].checked = "❌";
        }
    }
    
}
const gen = generator(users);
gen.next();

elForm.addEventListener("submit", (evt) =>{
    evt.preventDefault();
    if (gen.next(elForm.children[0].value).done) {
        alert("tugadi");
        render(users);
        if (users.length == truCount) {
            userRezult.style.display = "block";
            userRezult.textContent = `xammasi ta tog'ri`;
        }else if (users.length == falseCount) {
            userRezultFalse.style.display = "block"
            userRezultFalse.textContent = `xamasi ta notog'ri`;
        }else {
            userRezult.style.display = "block";
            userRezult.textContent = `${truCount} ta tog'ri`
            userRezultFalse.style.display = "block";
            userRezultFalse.textContent = `${falseCount} ta notog'ri`;
        }
        
        
        
    }
    elForm.children[0].value = "";  
    
})

function render(arr) {
    elTable.innerHTML = "";
    arr.forEach(item => {
        const tempClone = temp.cloneNode(true);
        tempClone.querySelector(".hero__table-question-id").textContent = `${item.id}-savol`;
        tempClone.querySelector(".hero__table-question").textContent = item.text;
        tempClone.querySelector(".hero__table-answer").textContent = item.user_aswer;
        tempClone.querySelector(".hero__table-check").textContent = item.checked;
        elTable.appendChild(tempClone);
    });
}

reloadBtn.addEventListener("click", () => {
    const res = confirm("boshidan boshlashni xoxlaysizmi");
    if(res) {
        window.location.reload();
    }
})


