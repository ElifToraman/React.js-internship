export default class Api {
 
    callApi = async (endPoint) => {
        return await(fetch(endPoint)
                .then(response => response.json())
                .then(data => {
                    return data;
                })
                .catch(errors => {
                    return {
                        errors: errors
                    };
                })
        );
    };

 
    episodes(episodeId) {
        return this.callApi('https://rickandmortyapi.com/api/episode/' + episodeId);
    }
}
