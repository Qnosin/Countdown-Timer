class Timer{
    constructor(){
    }
    setTimer(){
        const date = new Date()
        const secondDate = new Date(2022,12,31,0,0,0,0);
        const difrence = secondDate.getTime() - date.getTime();
        const seconds = Math.round(difrence / 1000);
        const minutes = Math.round(seconds / 60);
        const hours = Math.round(minutes / 60);
    }
}