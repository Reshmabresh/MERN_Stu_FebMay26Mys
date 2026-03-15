const form = document.getElementById("feedbacksForm");
const fbname = document.getElementById("fbfbname");
const fbemail = document.getElementById("fbfbemail");
const fbtype = document.getElementById("fbfbtype");
const feedbacks = document.getElementById("feedbackss");
const message = document.getElementById("message");
const cardContainer = document.getElementById("feedbacksCard");
//
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const fbnameValue = fbname.value.trim();
    const fbemailValue = fbemail.value.trim();
    const fbtypeValue = fbtype.value;
    const feedbacksValue = feedbacks.value.trim();
    if(!fbnameValue){
        message.textContent = "Fbname is required";
        message.style.color = "red";
        fbname.focus();
        return;
    }
    if (!fbemailValue) {
        message.textContent = "Fbemail is required";
        message.style.color = "red";
        fbemail.focus();
        return;
    }

    if (!fbemailValue.includes("@") || !fbemailValue.includes(".")) {
        message.textContent = "Please enter valid fbemail id";
        message.style.color = "red";
        fbemail.focus();
        return;
    }

    if (feedbacksValue.length < 20) {
        message.textContent = "Feedbacks must be atleast 20 characters";
        message.style.color = "red";
        feedbacks.focus();
        return;
    }

    message.textContent = "Feedbacks submitted successfully";
    message.style.color = "green";

    createCard(fbnameValue, fbemailValue, fbtypeValue, feedbacksValue);

    form.reset();
});

fbemail.addEventListener("input", () => message.textContent = "");
feedbacks.addEventListener("input", () => message.textContent = "");

function createCard(fbname, fbemail, fbtype, feedbacks) {

    const card = document.createElement("div");

    card.style.border = "1px solid black";
    card.style.padding = "10px";
    card.style.marginTop = "10px";

    card.innerHTML = `
        <h3>${fbname}</h3>
        <p><strong>Fbemail:</strong> ${fbemail}</p>
        <p><strong>Fbtype:</strong> ${fbtype}</p>
        <p><strong>Feedbacks:</strong> ${feedbacks}</p>
    `;

    cardContainer.appendChild(card);
}