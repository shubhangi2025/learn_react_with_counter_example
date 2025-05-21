const Person = {
    name: 'Shubhangi',
    address:{
        line1: 'Herrnstrasse 39',
        city: 'Fürth',
        contry: 'Germany'
    },
    profiles: ['twitter','fb','linkedin'],
    printProfiles:() => {
        console.log(Person.profiles);
    }
    
}


export default function LearningJavaScript(){
    return(
        <>
<div> {Person.name}</div>
<div> {Person.address.line1}</div>
<div> {Person.profiles[0]}</div>
<div> {Person.printProfiles()}</div>
</>

    )

}