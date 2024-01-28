window.addEventListener('load', solve);

function solve() {

    let firstNAmeEl = document.getElementById('first-name');
    let lastNameEl = document.getElementById('last-name');
    let numberOfPeopleEl = document.getElementById('people-count');
    let startDateEl = document.getElementById('from-date');
    let daysToStayEL = document.getElementById('days-count');


    let ticketsList = document.querySelector('.ticket-info-list');
    let confirmedTickets = document.querySelector('.confirm-ticket');
    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNext);


    function onNext(e) {
        e.preventDefault();
        if (firstNAmeEl.value === '' ||
            numberOfPeopleEl.value === '' ||
            lastNameEl.value === '' ||
            startDateEl.value === '' ||
            daysToStayEL.value === ''
        ) {
            return;
        }

        let ticketLiElement = document.createElement('li');
        ticketLiElement.setAttribute('class', 'ticket');

        let ticketArticle = document.createElement('article');

        let reservatorNames = document.createElement('h3');
        reservatorNames.textContent = `Name: ${firstNAmeEl.value} ${lastNameEl.value}`;

        let fromDate = document.createElement('p');
        fromDate.textContent = `From date: ${startDateEl.value}`;

        let stayDays = document.createElement('p');
        stayDays.textContent = `For ${daysToStayEL.value} days`;

        let peopleCount = document.createElement('p');
        peopleCount.textContent = `For ${numberOfPeopleEl.value} people`;


        ticketArticle.appendChild(reservatorNames);
        ticketArticle.appendChild(fromDate);
        ticketArticle.appendChild(stayDays);

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        ticketLiElement.appendChild(ticketArticle);
        ticketLiElement.appendChild(editBtn);
        ticketLiElement.appendChild(continueBtn);


        ticketsList.appendChild(ticketLiElement);


        fNameData = firstNAmeEl.value;
        lNameData = lastNameEl.value;
        peopleNumData = numberOfPeopleEl.value;
        startDateData = startDateEl.value;
        daysToStayData = daysToStayEL.value;

        firstNAmeEl.value = '';
        lastNameEl.value = '';
        numberOfPeopleEl.value = '';
        startDateEl.value = '';
        daysToStayEL.value = '';

        nextBtn.disabled = true;


        editBtn.addEventListener('click', () => {
            firstNAmeEl.value = fNameData;
            lastNameEl.value = lNameData;
            numberOfPeopleEl.value = peopleNumData;
            startDateEl.value = startDateData;
            daysToStayEL.value = daysToStayData;

            ticketLiElement.remove();

            nextBtn.disabled = false;

        });

        continueBtn.addEventListener('click', () => {

            ticketsList.remove();
            // let continueName = fNameData.value;
            // let continueLastName = lNameData.value;
            // let ContinuePeopleNum = peopleNumData.value;
           // let continueStart = startDateData.value
            // let continueDaysStayng = daysToStayData.value;


            let NextLiElement = document.createElement('li');
            ticketLiElement.setAttribute('class', 'ticket-content');
    
            let NextticketArticle = document.createElement('article');
            NextticketArticle = ticketArticle;

            let confirmBtn = document.createElement('button');
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent = 'Confirm';
            
                confirmBtn.addEventListener('click',()=>{
                    let body = document.getElementById('body');
                    let divToRemove = document.getElementById('main');
    
                    body.removeChild(divToRemove);
    
                    let h1 = document.createElement('h1');
                    h1.setAttribute('id' , 'thank-you')
                    h1.textContent = 'Thank you, have a nice day!';
                    body.appendChild(h1);
    
                    let btn = document.createElement('button');
                    btn.setAttribute('id', 'back-btn');
                    btn.textContent = 'Back';
                    btn.addEventListener('click', ()=>{
                        location.reload()
                    })
    
                    body.appendChild(btn);
            })
           



            let cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.addEventListener('click', ()=>{
                confirmedTickets.removeChild(NextLiElement);
                nextBtn.disabled = false;
            })

            
            NextLiElement.appendChild(NextticketArticle);
            NextLiElement.appendChild(confirmBtn);
            NextLiElement.appendChild(cancelBtn);
            
            confirmedTickets.appendChild(NextLiElement);
            
            
            
            
            
            
            
        })




    }
}


