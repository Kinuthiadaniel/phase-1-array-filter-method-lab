// Code your solution here

 // drivers.toUppercase();
function findMatching(driverss, string){
const matching = driverss.filter((driver)=>{
  if(driver.toLowerCase() === string.toLowerCase()){return (driver)} else {return undefined};
})
return matching;
}
findMatching(drivers, "Bobby".toLowerCase())

function fuzzyMatch(drivver, name){
  const byChart = drivver.filter((mention)=>{
    if (mention.slice(0,name.length)===name){return mention}
  })
  return byChart;
}

console.log(drivers)
const drriver = [{
  name: 'Bobby',
  hometown: 'Pittsburgh' },
{
  name: 'Sammy',
  hometown: 'New York' } ,
{
  name: 'Sally',
  hometown: 'Cleveland' },
{
  name: 'Annette',
  hometown: 'Los Angeles' },
{
  name: 'Bobby',
  hometown: 'Tampa Bay' }]
function matchName(array,string){

  const newNames = array.filter((mention)=>{
if (mention.name=== string){return mention}
  })
  return newNames;
 }
 console.log(matchName(drriver, "Bobby"))
 

