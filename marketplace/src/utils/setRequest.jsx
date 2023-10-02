
function setRequest(type) {

    let request = ""

    switch(type) {
        case 'heavy': request = "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=heavy+metal&api_key=3f26f648032bcdf951aa7395619343a3&format=json&limit=25";
        break;
        case 'rock': request = "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rock&api_key=3f26f648032bcdf951aa7395619343a3&format=json&limit=25";
        break;
        case 'hardcore': request = 'https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=deathcore&api_key=3f26f648032bcdf951aa7395619343a3&format=json&limit=25';
        break;
        case 'punk': request = "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=punk+rock&api_key=3f26f648032bcdf951aa7395619343a3&format=json&limit=25";
        break;
        case 'death': request = "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=death+metal&api_key=3f26f648032bcdf951aa7395619343a3&format=json&limit=25";
        break;
        case 'black': request = "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=black+metal&api_key=3f26f648032bcdf951aa7395619343a3&format=json&limit=25";
        break;
        case 'thrash': request = "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=thrash+metal&api_key=3f26f648032bcdf951aa7395619343a3&format=json&limit=25";
        break;
        default:
        console.log('error')
    }

    return request;

}

export default setRequest;