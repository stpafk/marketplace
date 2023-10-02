
export default function cleanUpData(data) {

    const unWanted = ['remastered', 'remaster', 'deluxe', 'reissue', 'collection'
    ,'anniversary', 'expanded', '(null)']
    let newObj = data.filter(str => !unWanted.some(term => str.name.toLowerCase().includes(term)));
    newObj = newObj.filter(str => str.image[3]['#text']!== "") 

    return newObj;
} 