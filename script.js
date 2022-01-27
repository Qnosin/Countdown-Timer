class Timer{
    constructor(){
    }
    setTimer(elements){
        const date = new Date()
        const secondDate = new Date(2022,12,31,0,0,0,0);
        const difrence = secondDate.getTime() - date.getTime();
        const seconds = Math.round(difrence / 1000);
        const minutes = Math.round(seconds / 60);
        const hours = Math.round(minutes / 60);
        elements.forEach((elem,index) => {
            if(index === 0){
                elem.innerHTML = `<h2>${hours}</h2>`
            }else if(index === 1){
                elem.innerHTML = `<h2>${minutes}</h2>`
            }else if(index === 2){
                elem.innerHTML = `<h2>${seconds}</h2>`
            }
        });
    }
}