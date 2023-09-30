
function setRequest(type) {

    let request = ""

    switch(type) {
        case 'top': request = "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=heavy+metal&api_key=3f26f648032bcdf951aa7395619343a3&format=json&limit=5";
        break;
    default:
        console.log('error')
    }

    return request

}

export default setRequest;