
export default async function(path:string){

    const response = await fetch(path);
    const data = response.json();
    console.log(data)
    return data;

};