
export default function cleanUpData(data) {

    const unWanted = ['remastered', 'remaster', 'deluxe', 'reissue', 'collection'
    ,'anniversary', 'expanded']
    let newObj = data.filter(str => !unWanted.some(term => str.name.toLowerCase().includes(term)));

    return newObj;
} 