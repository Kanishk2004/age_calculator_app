
const getYourAge = () => {
    let day = Math.floor(document.getElementById('day').value);
    let month = Math.floor(document.getElementById('month').value);
    let year = Math.floor(document.getElementById('year').value);

    if (!day) {
        const parentDiv = document.getElementsByClassName("date")[0];


        const errPara = document.createElement("p");
        errPara.classList.add("error-text");

        const errText = document.createTextNode("This field is required");
        errPara.appendChild(errText);
        
        const errLabel = document.getElementsByClassName('label')[0].classList.add('err-label');
        const errInput = document.getElementsByClassName('input')[0].classList.add('err-input');

        parentDiv.appendChild(errPara);
    };

    if (!month) {
        const parentDiv = document.getElementsByClassName("date")[1];


        const errPara = document.createElement("p");
        errPara.classList.add("error-text");

        const errText = document.createTextNode("This field is required");
        errPara.appendChild(errText);
        
        const errLabel = document.getElementsByClassName('label')[1].classList.add('err-label');
        const errInput = document.getElementsByClassName('input')[1].classList.add('err-input');

        parentDiv.appendChild(errPara);
    };

    if (!year) {
        const parentDiv = document.getElementsByClassName("date")[2];


        const errPara = document.createElement("p");
        errPara.classList.add("error-text");

        const errText = document.createTextNode("This field is required");
        errPara.appendChild(errText);
        
        const errLabel = document.getElementsByClassName('label')[2].classList.add('err-label');
        const errInput = document.getElementsByClassName('input')[2].classList.add('err-input');

        parentDiv.appendChild(errPara);
        return;
    };


    let monthInWords;

    switch (month) {
        case 01:
            monthInWords = "jan"
            break;
        case 02:
            monthInWords = "feb"
            break;
        case 03:
            monthInWords = "mar"
            break;
        case 04:
            monthInWords = "apr"
            break;
        case 05:
            monthInWords = "may"
            break;
        case 06:
            monthInWords = "jun"
            break;
        case 07:
            monthInWords = "jul"
            break;
        case 08:
            monthInWords = "aug"
            break;
        case 09:
            monthInWords = "sep"
            break;
        case 10:
            monthInWords = "oct"
            break;
        case 11:
            monthInWords = "nov"
            break;
        case 12:
            monthInWords = "dec"
            break;
    
        default:
            const parentDiv = document.getElementsByClassName("date")[1];


            const errPara = document.createElement("p");
            errPara.classList.add("error-text");

            const errText = document.createTextNode("Must be a valid month");
            errPara.appendChild(errText);
            
            const errLabel = document.getElementsByClassName('label')[1].classList.add('err-label');
            const errInput = document.getElementsByClassName('input')[1].classList.add('err-input');

            parentDiv.appendChild(errPara);
    }


    let dob = new Date(`${day} ${monthInWords} ${year}`);
    let currentDate = Date.now();


    const ageInYear = Math.floor((currentDate - dob)/31556952000);

    // console.log((currentDate/31556952000)  ageInYear);

    if ((currentDate/31556952000) < ageInYear ) {
        const parentDiv = document.getElementsByClassName("date")[2];


        const errPara = document.createElement("p");
        errPara.classList.add("error-text");

        const errText = document.createTextNode("Must be in the past");
        errPara.appendChild(errText);
                
        const errLabel = document.getElementsByClassName('label')[2].classList.add('err-label');
        const errInput = document.getElementsByClassName('input')[2].classList.add('err-input');

        parentDiv.appendChild(errPara);
        return;
    }

    if (day > 31) {
        const parentDiv = document.getElementsByClassName("date")[0];


        const errPara = document.createElement("p");
        errPara.classList.add("error-text");

        const errText = document.createTextNode("Must be a valid day");
        errPara.appendChild(errText);
        
        const errLabel = document.getElementsByClassName('label')[0].classList.add('err-label');
        const errInput = document.getElementsByClassName('input')[0].classList.add('err-input');

        parentDiv.appendChild(errPara);
        return;
    }

    const remainingSecondsForMonth = (currentDate - dob)%31556952000;

    const ageInMonths = Math.floor(remainingSecondsForMonth/2629746000);

    const remainingSecondsForDays = remainingSecondsForMonth%2629746000;

    const ageInDays = Math.round(remainingSecondsForDays/(1000 * 60 * 60 * 24));

    document.getElementsByClassName('years')[0].innerText = ageInYear;
    document.getElementsByClassName('months')[0].innerText = ageInMonths;
    document.getElementsByClassName('days')[0].innerText = ageInDays;
}

